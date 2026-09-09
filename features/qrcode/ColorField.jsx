import { Box, Popover, TextField } from "@mui/material";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

/** Campo de cor com amostra clicável e seletor em popover. */
const ColorField = ({ label, value, onChange }) => {
  const [anchor, setAnchor] = useState(null);
  const [text, setText] = useState(value);

  const commit = next => {
    setText(next);
    if (HEX.test(next)) onChange(next);
  };

  return (
    <>
      <TextField
        fullWidth
        size="small"
        label={label}
        value={text}
        onChange={event => commit(event.target.value)}
        onBlur={() => setText(value)}
        InputProps={{
          startAdornment: (
            <Box
              component="button"
              type="button"
              aria-label={`Escolher ${label.toLowerCase()}`}
              onClick={event => setAnchor(event.currentTarget)}
              sx={{
                width: 24,
                height: 24,
                mr: 1,
                p: 0,
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                bgcolor: value,
                cursor: "pointer",
                flexShrink: 0,
              }}
            />
          ),
        }}
      />
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 1.5 }}>
          <HexColorPicker color={value} onChange={commit} />
        </Box>
      </Popover>
    </>
  );
};

export default ColorField;

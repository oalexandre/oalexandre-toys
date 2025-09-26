import { Box, Button, Container, Drawer, IconButton, Paper, TextField } from "@mui/material";

import { qrCodeInputs } from "../../constants/qrCode";
import { qrCodePickers } from "../../constants/popoverColorPicker";

import ActionGroup from "./ActionGroup";
import LogoUpload from "./LogoUpload";
import PopoverColorPicker from "../../components/common/PopoverColorPicker";
import { useState } from "react";
import { Palette } from "@mui/icons-material";

const QrCodeForm = ({
  values,
  downloadUrl,
  handleFocus,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
}) => {
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  return (
    <Paper elevation={1} sx={{ p: 5, mt: 5 }}>
      <Container maxWidth="sm" disableGutters sx={{ margin: 0 }}>
        <Drawer anchor="right" open={colorPickerOpen} onClose={() => setColorPickerOpen(false)}>
          <Box sx={{ p: 10 }}>
            {qrCodePickers.map(picker => (
              <PopoverColorPicker
                key={picker.name}
                label={picker?.label}
                name={picker.name}
                helperText={picker?.helperText}
                handleBlur={handleBlur}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Box sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                onClick={() => setColorPickerOpen(false)}
                aria-label="fechar"
              >
                Fechar
              </Button>
            </Box>
          </Box>
        </Drawer>

        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {qrCodeInputs.map(input => (
            <TextField
              key={input.name}
              type={input.type || "text"}
              fullWidth
              variant="outlined"
              label={input.label}
              placeholder={input.placeholder}
              name={input.name}
              value={values[input.name]}
              onFocus={handleFocus}
              onChange={handleChange}
              autoComplete="none"
            />
          ))}

          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => setColorPickerOpen(true)}
              aria-label="pallete"
              endIcon={<Palette />}
            >
              Gerenciar Cores
            </Button>
          </Box>

          <LogoUpload
            logoBackgroundTransparent={values.logoBackgroundTransparent}
            logoName={values.logoName}
            handleChange={handleChange}
          />

          <ActionGroup values={values} downloadUrl={downloadUrl} handleReset={handleReset} />
        </Box>
      </Container>
    </Paper>
  );
};

export default QrCodeForm;

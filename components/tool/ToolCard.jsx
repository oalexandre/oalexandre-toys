import ChevronRightIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import { colors } from "../../theme";

/**
 * Linha de diretório de uma ferramenta: ícone em quadrado tingido, nome,
 * descrição e seta. `compact` esconde a descrição (relacionadas, 404).
 */
const ToolCard = ({ tool, compact = false }) => {
  const Icon = tool.icon;
  return (
    <Box
      component={Link}
      href={tool.path}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.75,
        minHeight: compact ? 60 : 76,
        px: 2,
        py: 1.5,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: "14px",
        height: "100%",
        textDecoration: "none",
        color: "text.primary",
        transition: "border-color 150ms, box-shadow 150ms, background-color 150ms",
        "&:hover": {
          borderColor: colors.accentTintStrong,
          bgcolor: "#fbfaff",
        },
        "&:hover .tool-arrow": { color: "primary.main", transform: "translateX(2px)" },
        "&:hover .tool-icon": { bgcolor: colors.accentTintStrong },
      }}
    >
      <Box
        className="tool-icon"
        sx={{
          display: "grid",
          placeItems: "center",
          width: 44,
          height: 44,
          flexShrink: 0,
          borderRadius: "10px",
          bgcolor: colors.accentTint,
          color: "primary.main",
          transition: "background-color 150ms",
        }}
      >
        <Icon fontSize="small" />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography component="h3" variant="h4" sx={{ lineHeight: 1.3 }}>
          {tool.name}
        </Typography>
        {!compact && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
            {tool.description}
          </Typography>
        )}
      </Box>
      <ChevronRightIcon
        className="tool-arrow"
        sx={{ color: colors.inkMuted, transition: "color 150ms, transform 150ms", flexShrink: 0 }}
      />
    </Box>
  );
};

export default ToolCard;

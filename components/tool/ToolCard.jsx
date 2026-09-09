import { Box, Typography } from "@mui/material";
import Link from "next/link";

/** Card de uma ferramenta usado na home e em "ferramentas relacionadas". */
const ToolCard = ({ tool, compact = false }) => {
  const Icon = tool.icon;
  return (
    <Box
      component={Link}
      href={tool.path}
      sx={{
        display: "flex",
        flexDirection: compact ? "row" : { xs: "row", sm: "column" },
        alignItems: compact ? "center" : { xs: "flex-start", sm: "flex-start" },
        gap: compact ? 1.5 : { xs: 1.5, sm: 2 },
        height: "100%",
        p: compact ? 2 : 2.5,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
        textDecoration: "none",
        color: "text.primary",
        transition: "border-color .15s, box-shadow .15s, transform .15s",
        "&:hover": {
          borderColor: "primary.light",
          boxShadow: "0 6px 20px rgba(47,91,234,0.10)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: compact ? 40 : 44,
          height: compact ? 40 : 44,
          flexShrink: 0,
          borderRadius: 2,
          bgcolor: "#eef2ff",
          color: "primary.main",
        }}
      >
        <Icon fontSize={compact ? "small" : "medium"} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography component="h3" variant="h4" sx={{ mb: compact ? 0.25 : 0.5 }}>
          {tool.name}
        </Typography>
        {!compact && (
          <Typography variant="body2" color="text.secondary">
            {tool.description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ToolCard;

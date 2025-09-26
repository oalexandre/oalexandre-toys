import { Box, CssBaseline, Paper } from "@mui/material";
import { useEffect, useRef } from "react";

const BottomMenu = ({ screen, _handleScreen, _navItems, isFocused, _activeListId, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [screen]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      {children}

      <Paper
        sx={{
          position: "fixed",
          bottom: isFocused ? "-56px" : 0,
          left: { xs: 57, sm: 65 },
          right: 0,
          zIndex: 2,
        }}
        elevation={3}
      >
        {/* <BottomNavigation showLabels value={screen} onChange={handleScreen}>
                    {navItems.map((item) => (
                        <BottomNavigationAction key={item.label} label={item.label} value={item.value} icon={item.icon} disabled={!activeListId && item.editIcon} />
                    ))}
                </BottomNavigation> */}
      </Paper>
    </Box>
  );
};

export default BottomMenu;

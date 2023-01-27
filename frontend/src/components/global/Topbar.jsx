import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="right">
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlined />
        ) : (
          <LightModeOutlined />
        )}
      </IconButton>
    </Box>
  );
};

export default Topbar;

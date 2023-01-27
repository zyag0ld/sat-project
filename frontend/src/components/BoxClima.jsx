import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const BoxClima = ({ value, type, icon }) => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
    <Box width="100%">
      <Box display="flex">
        <Box width="30%" m="0 10px" display="flex" justifyContent="center">
          {icon}
        </Box>
        <Box width="70%">
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
            {value}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {type}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxClima;
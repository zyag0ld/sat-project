import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mt="30px" mb="60px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 10px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
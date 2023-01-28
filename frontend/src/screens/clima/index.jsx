import { Box, useTheme } from "@mui/material";
import { Thermostat, Speed, CloudOutlined, Air} from "@mui/icons-material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BoxClima from "../../components/BoxClima";

const Clima = () => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="Estación meteorológica" subtitle="Lecturas de los sensores de clima" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="140px"
        gap="15px"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BoxClima
            value="30 °C"
            type="Temperatura"
            icon={ <Thermostat sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/> }
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >          
          <BoxClima
            value="1014 hPa"
            type="Presión atmosférica"
            icon={ <Speed sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/> }
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >          
          <BoxClima
            value="56%"
            type="Porcentaje de humedad"
            icon={ <CloudOutlined sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/> }
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BoxClima
            value="12.9 Km/H"
            type="Velocidad del viento"
            icon={ <Air sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/> }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Clima;

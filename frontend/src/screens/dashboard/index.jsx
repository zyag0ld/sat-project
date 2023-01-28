import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Thermostat, Speed, CloudOutlined, Air, WaterOutlined, ShowChartOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BoxClima from "../../components/BoxClima";
import LineChartCauce from "../../components/LineChartCauce";
import LineChartCaudal from "../../components/LineChartCaudal";

const Dashboard = () => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Responsive elements
  const isWholeScreen = useMediaQuery("(min-width: 1300px)");
  const isHalfScreen = useMediaQuery("(min-width: 750px)");

  return (
    <Box>
      <Header title="Panel principal" subtitle="Sistema de Alerta Temprana para Inundaciones por Desbordamiento de Ríos" />      
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="15px"
        //sx={{ "& > div": { gridColumn: isWholeScreen ? undefined : isHalfScreen ? "span 6" : "span 12" } }} // next immediate child
      >
        {/* BOX CLIMA */}
        <Box 
          gridColumn={ isWholeScreen ? "span 6" : "span 12" }
          gridRow={ isHalfScreen ? "span 2" : "span 4" }
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="15px"
        >
          <Box
            gridColumn={ isHalfScreen ? "span 6" : "span 12" }
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
            gridColumn={ isHalfScreen ? "span 6" : "span 12" }
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
            gridColumn={ isHalfScreen ? "span 6" : "span 12" }
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
            gridColumn={ isHalfScreen ? "span 6" : "span 12" }
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
        {/* IMAGES */}
        <Box
          gridColumn={ isWholeScreen ? "span 6" : "span 12" }
          gridRow={ isWholeScreen ? "span 2" : isHalfScreen ? "span 3" : "span 12" }
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="15px"
        >
          <Box
            gridColumn={ isWholeScreen ? "span 4" : isHalfScreen ? "span 4" : "span 12" }
            gridRow={ isWholeScreen ? "span 2" : isHalfScreen ? "span 3" : "span 4" }
            backgroundColor={colors.primary[400]}
          >
            <img src="https://drive.google.com/uc?export=view&id=1O1mMIPpkzQCyAFWJXTjFfGUZ-BSeXKN2" alt="sat-app-05.jpg" width="100%" height="100%"/>
          </Box>
          <Box
            gridColumn={ isWholeScreen ? "span 4" : isHalfScreen ? "span 4" : "span 12" }
            gridRow={ isWholeScreen ? "span 2" : isHalfScreen ? "span 3" : "span 4" }
            backgroundColor={colors.primary[400]}
          >
            <img src="https://drive.google.com/uc?export=view&id=1KSCoqgfpk9zkqB554bcq1dk39BWn4EwM" alt="sat-app-06.jpg" width="100%" height="100%"/>
          </Box>
          <Box
            gridColumn={ isWholeScreen ? "span 4" : isHalfScreen ? "span 4" : "span 12" }
            gridRow={ isWholeScreen ? "span 2" : isHalfScreen ? "span 3" : "span 4" }
            backgroundColor={colors.primary[400]}
          >
            <img src="https://drive.google.com/uc?export=view&id=14wYmwdDRRWRCOVlmchHOnvhwTd6g3NK6" alt="sat-app-07.jpg" width="100%" height="100%"/>
          </Box>
        </Box>
        {/*LINE CHART */}
        <Box
          gridColumn={ isWholeScreen ? "span 6" : "span 12" }
          gridRow={ isWholeScreen ? "span 3" : "span 2" }
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
          >
            <Box display="flex">
              <Box width="12%">
                <WaterOutlined sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/>
              </Box>
              <Box width="88%">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                  3 [m]
                </Typography>
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                  Nivel del Cauce
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box height="90%" width="102%" ml= "40px" mt="-20px">
            <LineChartCauce isDashboard={true} />
          </Box>
        </Box>
        {/*LINE CHART */}
        <Box
          gridColumn={ isWholeScreen ? "span 6" : "span 12" }
          gridRow={ isWholeScreen ? "span 3" : "span 2" }
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
          >
            <Box display="flex">
              <Box width="12%">
                <ShowChartOutlined sx={{ color: colors.greenAccent[600], fontSize: "44px" }}/>
              </Box>
              <Box width="88%">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                  1.6 [L/min]
                </Typography>
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                  Velocidad del caudal
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box height="90%" width="102%" ml= "40px" mt="-20px" >
            <LineChartCaudal isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );

};

export default Dashboard;

import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import BarChartInundaciones from "../../components/BarChartInundaciones";

const Inundaciones = () => {
  return (
    <Box>
      <Header title="Desastres naturales" subtitle="Declaratorias de desastre natural publicadas en el Diario Oficial de la Federación" />
      <Box mt="-40px" height="75vh" mb="15px">
        <BarChartInundaciones />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography fontSize="10px">
          http://dgeiawf.semarnat.gob.mx:8080/ibi_apps/WFServlet?IBIF_ex=D1_DESASTRE00_06&IBIC_user=dgeia_mce&IBIC_pass=dgeia_mce&NOMBREENTIDAD=*&NOMBREANIO=*
        </Typography>
      </Box>
    </Box>
  );
};

export default Inundaciones;

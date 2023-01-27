import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChartInundaciones from "../../components/BarChartInundaciones";

const Inundaciones = () => {
  return (
    <Box>
      <Header title="Inundaciones" subtitle="Historial de inundaciones por fechas" />
      <Box mt="-40px" height="75vh">
        <BarChartInundaciones />
      </Box>
    </Box>
  );
};

export default Inundaciones;

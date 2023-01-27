import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartCaudal from "../../components/LineChartCaudal";

const Caudal = () => {
  return (
    <Box>
      <Header title="Velocidad del caudal" subtitle="Representación gráfica de las lecturas de los sensores de velocidad del río." />
      <Box mt="-40px" height="75vh">
        <LineChartCaudal />
      </Box>
    </Box>
  );
};

export default Caudal;

import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChartCauce from "../../components/LineChartCauce";

const Cauce = () => {
  return (
    <Box>
      <Header title="Nivel del cauce" subtitle="Representación gráfica de las lecturas de los sensores de nivel del cauce" />
      <Box mt="-40px" height="75vh">
        <LineChartCauce />
      </Box>
    </Box>
  );
};

export default Cauce;

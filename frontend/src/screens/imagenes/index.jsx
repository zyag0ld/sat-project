import { Box } from "@mui/material";
import Header from "../../components/Header";
import { imagenes } from "../../data/imagenes";

const Imagenes = () => {
  return (
    <Box>
      <Header title="Imágenes" subtitle="Monitoreo de las condiciones del río"/>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="360px"
        gap="15px"
      >
        {imagenes.map((imagen, i) => {
          return (
            <iframe src={`https://drive.google.com/file/d/${imagen.src}/preview`} title={imagen.nombre} width="100%" height="100%"></iframe>
          )
        })}
      </Box>
    </Box>
  );
};

export default Imagenes;
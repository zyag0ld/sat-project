import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Directorio = () => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Controlled accordion
  const [expanded, setExpanded] = useState("panel2");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // Table data
  function createTelefonos(nombre, telefono) {
    return { nombre, telefono };
  };
  function createRefugios(nombre, ubicacion, responsable, telefono) {
    return { nombre, ubicacion, responsable, telefono };
  };
  const rowsTelefonos = [
    createTelefonos("Protección Civil Atoyac", "742-423-5836"),
    createTelefonos("Seguridad Pública", "742-110-1462 | 742-423-6153"),
    createTelefonos("Cruz Roja ", "742-423-5151"),
  ];
  const rowsRefugios = [
    createRefugios("Escuela Primaria “Herminia L. Gómez”", "Calle Juan Álvarez Norte, colonia Centro", "Rene Hernández Barrientos", "742-105-1287"),
    createRefugios("Escuela Primaria “Lázaro Cárdenas”", "Calle Feliciano Radilla No. 1, colonia Silvestre Mariscal", "Omar Radilla Hernández", "742-423-2192"),
    createRefugios("Escuela Primaria “Juan Escutia”", "Calle 26 de marzo de 1967, colonia 18 de Mayo", "Domingo Hernández González", "781-100-5961"),
    createRefugios("Escuela Primaria “Cuauhtémoc”", "Comunidad de Corral Falso", "Josefina Hernández Gallardo", "781-426-3251"),
    createRefugios("Escuela Primaria “Endino Ríos Radilla”", "Colonia los Llanitos, comunidad El Ticui", "Alejandro Abrajan Nogueda", "742-423-2947"),
    createRefugios("Cbtis No. 216 ", "Boulevard Juan Álvarez, colonia Lomas del Sur", "Rubén Castro Mondragón", "742-423-0700"),
    createRefugios("Escuela Técnica No. 176 “José Agustín Ramírez Altamirano”", "Carretera Nacional Acapulco – Zihuatanejo, comunidad el Ciruelar", "José Abundio Diego Galeana", "742-722-8212"),
    createRefugios("Centro Bachillerato Agropecuario CBTA No. 66", "Km. 68.5, Acapulco – Zihuatanejo, comunidad de Cacalutla", "Edgar Diego Radilla", "742-427-4400"),
    createRefugios("Preparatoria Popular Rio Santiago", "Comunidad de Rio Santiago", "Lilia Castro Piza", "742-119-3224"),
    createRefugios("Albergue La Quebradora", "Fraccionamiento Nuevo Paraíso", "Joaquín Martínez Valdez", "742-111-2736"),
    createRefugios("Escuela Secundaria Técnica No. 101 “Plan de Ayutla”", "Km. 19, Carretera Atoyac – Pie de la Cuesta, comunidad de San Juan de las Flores", "Leovany Obe Bracho", "742-105-3870"),
    createRefugios("Centro Educativo La Pintada", "Comunidad de la Pintada", "Gildarlo Moreno Ávila", "742-109-5029"),
  ];
  return (
    <Box>
      <Header title="Directorio" subtitle="Información relevante sobre los planes de acción, refugios temporales y números de teléfono de las autoridades" />
      <Box>
        <Accordion sx={{backgroundColor: colors.primary[400]}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography color={colors.greenAccent[500]} variant="h5">
              Planes de acción
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Un elemento clave para lograr reducir el impacto destructivo que provocan los fenómenos naturales o antropogénicos, es la implementación de una efectiva estrategia de prevención. 
              Mantente informado sobre las condiciones meteorológicas en tu lugar de residencia. 
              Ten presente tu plan familiar de Protección Civil. 
              Guarda documentos importantes en bolsas de plástico selladas. 
              Almacena agua, alimentos enlatados, impermeables y botas. 
              Cuenta con un botiquín de primeros auxilios y una linterna. 
              Si es necesario dirígete a tu refugio temporal más cercano, lleva contigo sólo lo indispensable. 
              No trates de caminar, nadar o utilizar automóvil en caminos inundados, evita cruzar el cauce de los ríos. 
              Ante la presencia de lluvias evita refugiarte bajo los árboles, postes y cables de electricidad, ya que estos atraen la descarga eléctrica de los rayos. 
              Desaloja el agua estancada para evitar plagas, mosquitos, enfermedades e infecciones. 
              Limpia restos de sustancias tóxicas o inflamables.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{backgroundColor: colors.primary[400]}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography color={colors.greenAccent[500]} variant="h5">
              Números de emergencia
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Nombre</TableCell>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Número de teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsTelefonos.map((row) => (
                    <TableRow key={row.nombre} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell component="th" scope="row"> {row.nombre} </TableCell>
                      <TableCell >{row.telefono}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{backgroundColor: colors.primary[400]}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography color={colors.greenAccent[500]} variant="h5">
              Refugios temporales
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Nombre</TableCell>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Ubicación</TableCell>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Responsable</TableCell>
                    <TableCell sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100]}}>Número de teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsRefugios.map((row) => (
                    <TableRow key={row.nombre} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell component="th" scope="row"> {row.nombre} </TableCell>
                      <TableCell>{row.ubicacion}</TableCell>
                      <TableCell>{row.responsable}</TableCell>
                      <TableCell>{row.telefono}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Directorio;

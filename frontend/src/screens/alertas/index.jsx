import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useTheme, IconButton } from "@mui/material";
import { Check, Close, Circle } from "@mui/icons-material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { URL } from "../../App";
import Header from "../../components/Header";

const Alertas = () => {
  // Theme and colors
	const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Request to API
  const [alertas, setAlertas] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/alertas`)
      .then((response) => {setAlertas(response.data)});
  }, []);
  // Data grid 
	const columns = [
    // { field: "_id", headerName: "Id", flex: 1 },
    { field: "orden", headerName: "Orden", flex: 1 },
    { field: "tipo", headerName: "Tipo de alerta", flex: 1, cellClassName: "name-column--cell" },
    { field: "grado", headerName: "Grado de peligro", flex: 1 },
    {
      field: "color",
      headerName: "Color asociado",
      flex: 1,
      renderCell: ({ row: { color } }) => {
        return (
          <Box width="100%" m="0 auto" display="flex" justifyContent="center">
            {color === "Rojo" && <Circle sx={{ fontSize: "20px", color: "#FF5050" }}/>}
            {color === "Naranja" && <Circle sx={{fontSize:"20px", color: "#FFCC00" }}/>}
            {color === "Amarillo" && <Circle sx={{fontSize:"20px", color: "#FFFF66" }}/>}
          </Box>
        )
      }
    },
    {
      field: "publicada",
      headerName: "Publicada",
      flex: 1,
      renderCell: ({ row: { publicada } }) => {
        return (
          <Box width="100%" m="0 auto" display="flex" justifyContent="center">
            {publicada === false && <IconButton><Close sx={{ fontSize: "16px", color: colors.grey[100] }}/></IconButton>}
            {publicada === true && <IconButton><Check sx={{fontSize:"16px", color: colors.grey[100] }}/></IconButton>}
          </Box>
        )
      }
    },
    { 
      field: "createdAt", 
      headerName: "Fecha y hora",
      flex: 1, 
      valueFormatter: (params) => new Date(params?.value).toLocaleString()
    }
  ];

	return (
    <Box>
      <Header title="Alertas" subtitle="Lista de alertas detectadas y publicadas" />
      <Box
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400], //before 300
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid 
          rows={alertas} 
          columns={columns}
          getRowId={(row) => row._id}
          components={{ Toolbar: GridToolbar }}
          loading={!alertas.length}
        />
      </Box>
    </Box>
  );
}

export default Alertas;
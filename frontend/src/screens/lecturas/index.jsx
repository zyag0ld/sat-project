import { useState, useEffect } from "react";
import axios from "axios";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { URL } from "../../App";
import Header from "../../components/Header";

const Lecturas = () => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Request to API
  const [lecturas, setLecturas] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/lecturas`)
      .then((response) => {setLecturas(response.data)});
  }, []);
  // Data grid 
  const columns = [
    // { field: "_id", headerName: "Id", flex: 1 },
    { field: "tipo", headerName: "Tipo de sensor", flex: 1 },
    { field: "valor", headerName: "Valor de la lectura", flex: 1, cellClassName: "name-column--cell" },
    { 
      field: "createdAt", 
      headerName: "Fecha y hora",
      flex: 1, 
      valueFormatter: (params) => new Date(params?.value).toLocaleString()
    }
  ];

  return (
    <Box>
      <Header title="Lecturas" subtitle="Registro completo de las lecturas recibidas por todos los sensores"/>
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
          rows={lecturas}
          columns={columns}
          getRowId={(row) => row._id}
          components={{ Toolbar: GridToolbar }}
          loading={!lecturas.length}
        />
      </Box>
    </Box>
  );
};

export default Lecturas;

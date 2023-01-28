import { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { MenuOutlined, HomeOutlined, ReceiptOutlined, WarningAmber, HelpOutlineOutlined, FloodOutlined, ImageOutlined, WaterOutlined, ShowChartOutlined, FilterDrama } from "@mui/icons-material";
import { tokens } from "../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);  
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Controlled sidebar
  const [isCollapsed, setIsCollapsed] = useState(true); //manually changed
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      //position="fixed"
      height="100vh"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "0px 20px 0px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >      
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <img alt="sat" width="18px" height="18px" src={"../../assets/sat.png"} style={{ cursor: "pointer", borderRadius: "5%" }}/> : undefined }
            style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
					{/* {SAT IMAGE AND DESCRIPTION} */}
          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="sat"
                  width="100px"
                  height="100px"
                  src={`../../assets/sat.png`}
                  style={{ cursor: "pointer", borderRadius: "5%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  SAT
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Sistema de Alerta Temprana
                </Typography>
              </Box>
            </Box>
          )}
					{/* {MENU ITEMS} */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Panel principal"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lecturas"
              to="/lecturas"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Alertas"
              to="/alertas"
              icon={<WarningAmber />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Directorio"
              to="/directorio"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Desastres naturales"
              to="/inundaciones"
              icon={<FloodOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Imágenes"
              to="/imagenes"
              icon={<ImageOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Nivel de cauce"
              to="/cauce"
              icon={<WaterOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Velocidad del caudal"
              to="/caudal"
              icon={<ShowChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Estación meteorológica"
              to="/clima"
              icon={<FilterDrama />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
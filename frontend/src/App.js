import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import Dashboard from "./screens/dashboard";
import Lecturas from "./screens/lecturas";
import Alertas from "./screens/alertas";
import Directorio from "./screens/directorio";
import Inundaciones from "./screens/inundaciones";
import Cauce from "./screens/cauce";
import Caudal from "./screens/caudal";
import Clima from "./screens/clima";

export const URL = process.env.REACT_APP_SERVER_URL; // Make available on all the project

function App() {
  // Theme and colors
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
          <Sidebar/>
            <main className = "content">
              <Topbar/>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/lecturas" element={<Lecturas />} />
                <Route path="/alertas" element={<Alertas />} />
                <Route path="/directorio" element={<Directorio />} />
                <Route path="/inundaciones" element={<Inundaciones />} />
                <Route path="/cauce" element={<Cauce />} />
                <Route path="/caudal" element={<Caudal />} />
                <Route path="/clima" element={<Clima />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

// 2 - Reaproveitamento de Estrutura
import { Link, Outlet } from "react-router-dom";

// 4 - Navengando entre Páginas
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

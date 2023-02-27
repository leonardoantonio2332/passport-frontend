// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
// import ModeToggle from "../layout/ModeToggle";

// const Navbar = () => {
//   return (
//     <div className={styles.list}>
//       <Link to="/">Home</Link>
//       <Link to="/contact">Contato</Link>
//       <Link to="/enterprise">Empresa</Link>
//       <ModeToggle />
//     </div>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ModeToggle from "./ModeToggle";
import { DarkMode } from "@mui/icons-material";
import { Switch, FormControlLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#05998c" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Passport
          </Typography>
          <ModeToggle check={DarkMode} change={() => setDarkmode(!darkMode)} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;

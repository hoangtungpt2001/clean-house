import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Modal,
  Toolbar,
  Typography,
  Modal
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Register from "../../pages/Register";
import Login from "../Login/Login";
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);



  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tongleModal = () => {
    setOpenLogin(!openLogin);
  }
  const [registerOpen, setRegisterOpen] = useState(false);
  const handleOpen = () => {
    setRegisterOpen(!registerOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"red"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <Button variant="outlined">Login</Button>
        </li>
        <li>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={registerOpen}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </li>
      </ul>
    </Box>
  );

  return (

    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "#fba34e" }} position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography>
              <HomeWorkIcon />
              HOUSE CLEANING
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>

                <li>

                    <Button variant="outlined" onClick={tongleModal} >Login</Button>
                    <Modal
                        open={openLogin}
                        onClose={tongleModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                      <Login />   
                    </Modal>

                  <Button onClick={handleOpen}>Open modal</Button>
                  <Modal
                    open={registerOpen}
                    onClose={handleOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Register />
                      </Typography>
                    </Box>
                  </Modal>

                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
     
    </>
  );
};

export default Header;

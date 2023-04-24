import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../store/slices/accSlice";
import {
  fecthUserById,
  fetchRoles,
  fecthAllUser,
} from "../../store/actions/getUserAction";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Modal,
  Toolbar,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import Register from "../Register/Register";
import Login from "../Login/Login";
import StyledButton from "../../styles/StyledButton";
import Logo from "../../assets/images/logo-final.png";
import "./Header.scss";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(null);

  const dispatch = useDispatch();
  const { isLogin, account } = useSelector((state) => state.account);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    setUserMenu(null);
    setLoginOpen(false);
    if (isLogin === true) {
      const id = account.userId;
      dispatch(fecthUserById(id));
      dispatch(fetchRoles());
      dispatch(fecthAllUser());
    }
  }, [isLogin, dispatch, account.userId]);

  const handleOpenUserMenu = (event) => {
    setUserMenu(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setUserMenu(null);
  };
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const tongleModalLogin = () => {
    setLoginOpen(!loginOpen);
  };

  const tongleModalRegister = () => {
    setRegisterOpen(!registerOpen);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(Logout());

    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="mobile">
      <Box mb={1}>
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </Box>
      <Divider sx={{ width: "200px" }} />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>Dịch vụ</NavLink>
        </li>
        <li>
          <NavLink to={"/experience"}>Kinh nghiệm hay</NavLink>
        </li>
      </ul>
      {!isLogin && (
        <Box className="auth-action">
          <Button
            onClick={tongleModalRegister}
            variant="text"
            className="btn-text"
          >
            ĐĂNG KÝ
          </Button>
          <StyledButton variant="contained" onClick={tongleModalLogin}>
            ĐĂNG NHẬP
          </StyledButton>
          <Modal
            open={loginOpen}
            onClose={tongleModalLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Login
                onClose={tongleModalLogin}
                registerOpen={tongleModalRegister}
                registerState={registerOpen}
              />
            </Box>
          </Modal>
          <Modal
            open={registerOpen}
            onClose={tongleModalRegister}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Register />
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );

  return (
    <header className="header">
      <Container maxWidth="lg">
        <Box>
          <AppBar
            component="nav"
            sx={{ bgcolor: "#fff" }}
            position="static"
            elevation={0}
          >
            <Toolbar className="header-nav" disableGutters={true}>
              <Box>
                <Link to={"/"}>
                  <img src={Logo} alt="logo" className="logo" />
                </Link>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <ul className="navigation">
                  <li>
                    <NavLink to={"/"}>Trang chủ</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/service"}>Dịch vụ</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/experience"}>Kinh nghiệm hay</NavLink>
                  </li>
                </ul>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "0 10px" }}
              >
                {isLogin === true && (
                  <Box>
                    <Box onClick={handleOpenUserMenu} className="user-account">
                      <Avatar
                        alt="user"
                        src={user.avatar}
                        sx={{ bgcolor: "#FA8D22" }}
                      />
                      <Typography
                        className="user-name"
                        sx={{ display: { xs: "none", sm: "block" } }}
                      >
                        {user.firstName} {user.lastName}
                      </Typography>
                    </Box>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="account-menu"
                      anchorEl={userMenu}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(userMenu)}
                      onClose={handleCloseUserMenu}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.32))",
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: "15px",
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%)  rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                    >
                      <MenuItem className="user-menu">
                        <NavLink to="/user-infor" className="user-menu-link">
                          <PersonIcon /> Thông tin cá nhân
                        </NavLink>
                      </MenuItem>
                      <MenuItem className="user-menu">
                        <NavLink to={"/history"} className="user-menu-link">
                          <HistoryIcon /> Lịch sử đăng ký
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={handleLogout} className="user-menu">
                        <LogoutIcon /> Đăng xuất
                      </MenuItem>
                    </Menu>
                  </Box>
                )}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{
                    display: { md: "none", color: "#000" },
                  }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {!isLogin && (
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Box className="auth-action">
                    <Button
                      onClick={tongleModalRegister}
                      variant="text"
                      className="btn-text"
                    >
                      ĐĂNG KÝ
                    </Button>
                    <StyledButton
                      variant="contained"
                      onClick={tongleModalLogin}
                    >
                      ĐĂNG NHẬP
                    </StyledButton>
                    <Modal
                      open={loginOpen}
                      onClose={tongleModalLogin}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <Login
                          onClose={tongleModalLogin}
                          registerOpen={tongleModalRegister}
                          registerState={registerOpen}
                        />
                      </Box>
                    </Modal>
                    <Modal
                      open={registerOpen}
                      onClose={tongleModalRegister}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <Register />
                      </Box>
                    </Modal>
                  </Box>
                </Box>
              )}
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "300px",
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {
  Snackbar,
  Alert 
} from "@mui/material";
import Services from "./pages/Service";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import GoToTop from "./components/GoToTop/GoToTop";
import './App.scss';
import InFor from "./pages/InFor";




function App() {
  const {isLogin} = useSelector((state) => state.account);
  const [openToast, setOpenToast] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/service" element = {<Services />}/>
          <Route path="/experience" element = {<Experience />}/>
          <Route path="/user-infor" element = {<InFor/>}/>
          <Route path="*" element = {<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
      <GoToTop />
      {isLogin && 
      <Snackbar open={openToast} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert variant="filled" color="warning" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Đăng nhập thành công!
          </Alert>
        </Snackbar>
      }
    </div>
  );
}

export default App;

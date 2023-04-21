
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import {
  Snackbar,
  Alert 
} from "@mui/material";

import Services from "./pages/service/Service";

import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import GoToTop from "./components/GoToTop/GoToTop";
import './App.scss';

import ExperienceDetail from "./pages/ExperienceDetail";
import NewExperience from "./pages/NewExperience";
import History from "./pages/History";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsOfUse from "./pages/termsOfUse";
import Introduce from "./pages/Introduce";
import User  from "./pages/User";



import ArticleList from "./components/ArticleList/ArticleList";

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
    <div className="app" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/service" element = {<Services />}/>
          <Route path="/experience/" end  element = {<Experience />}>
            <Route path="" element = {<ArticleList />}/>
            <Route path="clean-up" element = {<ArticleList categoryId='1' />}/>
            <Route path="go-market" element = {<ArticleList categoryId='3' />}/>
            <Route path="cook" element = {<ArticleList categoryId='2' />}/>
            <Route path="laundry" element = {<ArticleList categoryId='4' />}/>
          </Route>
          <Route path="/experience/:articleName" element = {<ExperienceDetail />}/>
          <Route path="/user-infor" element = {<User/>}/>
          <Route path="/new-experience" element = {<NewExperience/>}/>
          <Route path="/history" element = {<History/>}/>
          <Route path="/privacy-policy" element = {<PrivacyPolicy/>}/>
          <Route path="/terms-of-use" element = {<TermsOfUse/>}/>
          <Route path="/introduce" element = {<Introduce/>}/>
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

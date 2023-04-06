import React from 'react';
import {Box} from "@mui/material";
import { NavLink } from "react-router-dom";
import './ArticleSidebar.scss';


const ArticleSidebar = () => {

  return (
    <>
    <Box sx={{ display: { xs: "none", md: "block" } }}>
    <ul className="article-menu">
    <li className="article-link">
        <NavLink  to={"/experience"} end>Tất cả</NavLink>
    </li>
     <li className="article-link">
        <NavLink to={"/experience/clean-up"} >Dọn dẹp</NavLink>
    </li>
     <li className="article-link">
        <NavLink to={"/experience/go-market"} >Đi chợ</NavLink>
    </li>
    <li className="article-link">
        <NavLink to={"/experience/cook"} >Nấu ăn</NavLink>
    </li>
    <li className="article-link">
        <NavLink to={"/experience/laundry"} >Giặt ủi</NavLink>
    </li>
    </ul>
    </Box>
    <Box sx={{ display: { xs: "block", md: "none" } }}>
    <ul className="article-menu-mobile">
    <li className="article-link">
        <NavLink  to={"/experience"} end>Tất cả</NavLink>
    </li>
     <li className="article-link">
        <NavLink to={"/experience/clean-up"} >Dọn dẹp</NavLink>
    </li>
     <li className="article-link">
        <NavLink to={"/experience/go-market"} >Đi chợ</NavLink>
    </li>
    <li className="article-link">
        <NavLink to={"/experience/cook"} >Nấu ăn</NavLink>
    </li>
    <li className="article-link">
        <NavLink to={"/experience/laundry"} >Giặt ủi</NavLink>
    </li>
    </ul>
    </Box>
    </>
  )
}

export default ArticleSidebar
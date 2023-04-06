import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthArticles } from '../../store/actions/getArrticlesAction'; 
import { useParams } from "react-router-dom";
import {Container, Grid, Typography} from "@mui/material";

const ArticleDetail = () => {
    const { articleName } = useParams();
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);
    useEffect(() => {
        dispatch(fecthArticles());
    }, []);
    const article = articles.find((article) => article.title === articleName);
  return (
    <h1>Trang chi tiết</h1>
  )
}

export default ArticleDetail
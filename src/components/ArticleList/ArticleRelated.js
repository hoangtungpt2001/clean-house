import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fecthArticles } from '../../store/actions/arrticlesAction'; 
import { fecthAllUser } from '../../store/actions/getUserAction';
import {Box, Typography, Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

import "./ArticleList.scss";



const ArticleRelated= () => {
    const { articleName } = useParams();
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);
    const { users } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fecthArticles());
        dispatch(fecthAllUser());
    }, [dispatch]);

    const article = articles.find((article) => article.title === articleName);
      console.log('check article: ',article )
    const typeId = article ? article.categoryId : {};
    const filteredArticles = typeId
    ? articles.filter((article) => article.categoryId === typeId)
    : [];
    
    return (
        <>
        <Typography variant="h4" component="h1" sx={{color: "#FA8D22"}} >Bài viết liên quan</Typography>
        <Grid container spacing={3} mt={"15px"} mb={"100px"}>
            {filteredArticles && filteredArticles.length > 0 && filteredArticles.map((article)=>{
                const user = users.find((user) => user.id === article.userId)
                return (
                <Grid item xs={12} sm={6} md={3} className="article" key={article.id}>
                    <Box component="div" className="article-item">
                        <Box className="article-img" textAlign="center" pt={2} height={200}>
                            <img src={article.image} alt={article.title} />
                        </Box>
                        <Box className="article-content" p={2}> 
                        <Box className="article-top">
                              <Link to={`/experience/${article.title}`}>
                                <Typography variant="h5" component="h3" className="article-title">
                                      {article.title}
                                </Typography>
                                </Link>
                                <Box className="article-info">
                                    <Box className="article-author">
                                        {user && 
                                        <>
                                        <Avatar alt='author'  src={user.avatar} sx={{ bgcolor: "#FA8D22" }} />
                                        <Typography variant="body1" component="p" className="article-name" >
                                        {user.firstName} {user.lastName}
                                        </Typography>
                                        </>
                                        }
                                    </Box>
                                    <Typography variant="body1" component="p" className="article-date" >
                                    {article.createdAt}
                                    </Typography>
                                </Box>
                        </Box>
                            <Box className="article-rate" >
                                <FavoriteIcon sx={{color: "red"}} /> 
                                <Typography variant="body1" component="p" className="article-rate-detail" >
                                {article.likes}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            
                )
            })}
           
        </Grid>
       
        </>
    )
}
export default ArticleRelated;
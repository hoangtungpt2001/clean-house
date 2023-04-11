import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthArticles } from '../../store/actions/getArrticlesAction'; 
import { fecthAllUser } from '../../store/actions/getUserAction';
import { updateLike } from '../../store/actions/likeAction';
import { useParams } from "react-router-dom";
import {Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ArticleDetail.scss';

const ArticleDetail = () => {
    const { articleName } = useParams();
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);
    const { users } = useSelector(state => state.users);
    const { isLogin } = useSelector(state => state.account);
    const { isLiked } = useSelector((state) => state.like);
    // console.log('check: ', isLiked);
    useEffect(() => {
        dispatch(fecthArticles());
        dispatch(fecthAllUser());
    }, [dispatch]);
    const article = articles.find((article) => article.title === articleName);
    // console.log('check: ',article )
    const user = users.find((user) => user.id === article.userId)
    const handleLikeClick = () => {
       dispatch(updateLike(article.id));
    }
  return (
    <>
     {/* {isLogin && ( */}
        <IconButton onClick={handleLikeClick}  sx={{
            position: 'fixed',
            bottom: {xs: "50%" , md: "50%"},
            right: {xs: 10 , sm: 70, md: 100},
            color: "red",
            ":hover": {
                color: "red"
            }
        }} >
           {isLiked ?  <FavoriteIcon className='icon'/> : <FavoriteBorderIcon className='icon' />}
        </IconButton>
      {/* )} */}
 
    {article && 
      <Box className="article-detail">
          <Typography variant="h3" component="h1" className="article-heading">{article.title}</Typography>
          <Box className="article-info">
             <Typography variant="body1" component="p" className="article-date" >
              {article.createdAt}
              </Typography>
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
          </Box>
          <Box className="article-img" textAlign="center" sx={{width: {sm: "100%", md: "70%"}, margin: " 0 auto"}}>
                            <img src={article.image} alt={article.title} />
          </Box>
            {article.contents.map((item,index)=>{
              return (
           
                 <Box key={index} className="article-content" sx={{width: {sm: "100%", md: "70%"}, margin: " 0 auto"}} >
                    <Typography variant="h4" component="h2" className="article-subtitle" >
                        {item.subTitle}
                    </Typography>
                    <Typography variant="body1" component="p" className="article-text" >
                            {item.content}
                    </Typography>
                    <Box className="content-img" textAlign="center">
                              <img src={item.imageUrl} alt={item.subTitle} />
                    </Box>
                   </Box>
               
              )
            })}
      </Box>
    }
    </>
    
  )
}

export default ArticleDetail
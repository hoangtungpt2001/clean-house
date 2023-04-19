import React,{ useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthArticles, addLikeApi, removeLikeApi } from '../../store/actions/arrticlesAction'; 
import { fecthAllUser } from '../../store/actions/getUserAction';
import { useParams } from "react-router-dom";
import {Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ArticleDetail.scss';
import styled from 'styled-components';


const StyledContent = styled.div`
  h1,h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fa8d22;
  }
  ul {
    margin-bottom: 20px;
    list-style: inside;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    text-align: justify;
  }
  img {

    display: block;
    margin: 0 auto;
  }
`;

const ArticleDetail = () => {
    const { articleName } = useParams();
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);
    const { users } = useSelector(state => state.users);
     
    const { isLogin, account } = useSelector(state => state.account);
    const { likes } = useSelector(state => state.articles);

    const userId = isLogin ? account.userId : "";
 
    useEffect(() => {
        dispatch(fecthArticles());
        dispatch(fecthAllUser());
    }, [dispatch]);

    const article = articles ? articles.find((article) => article.title === articleName) : {};
    const author = users ? users.find((user) => user.id === article.userId) : {};
    const articleId = article ? article.id : '';
    const checkLiked = useMemo(() => likes.some(
      (like) => like.articleId === articleId && like.userId === userId
    ), [likes, articleId, userId]);
    const [liked, setLiked] = useState(checkLiked);

    const handleLike = () => {
      if (liked) {
         setLiked(false);
        dispatch(removeLikeApi(userId, article.id));
      } else {
        dispatch(addLikeApi(userId, article.id))
         setLiked(true);
      }
    };
  return (
    <>
     {isLogin && (
        <IconButton 
          onClick={handleLike}
          sx={{
            position: 'fixed',
            bottom: {xs: "50%" , md: "50%"},
            right: {xs: 10 , sm: 70, md: 100},
            color: "red",
            ":hover": {
                color: "red"
            }
        }} >
           {liked ?  <FavoriteIcon className='icon'/> 
              : <FavoriteBorderIcon className='icon'/>}
        </IconButton>
      )}
 
    {article && 
      <Box className="article-detail">
          <Typography variant="h4" component="h1" className="article-heading">{article.title}</Typography>
          <Box className="article-info">
             <Typography variant="body1" component="p" className="article-date" >
              {article.createdAt}
              </Typography>
             <Box className="article-author">
                  {author && 
                  <>
                  <Avatar alt='author'  src={author.avatar} sx={{ bgcolor: "#FA8D22" }} />
                  <Typography variant="body1" component="p" className="article-name" >
                  {author.firstName} {author.lastName}
                  </Typography>
                  </>
                  }
              </Box>
          </Box>
          <Box className="article-img" textAlign="center" sx={{width: {sm: "100%", md: "70%"}, margin: " 0 auto"}} pb={4}>
                            <img src={article.image} alt={article.title} />
          </Box>
                 <Box className="article-content" sx={{width: {sm: "100%", md: "70%"}, margin: " 0 auto"}} >
                  <StyledContent dangerouslySetInnerHTML={{ __html: article.content }} />
                   </Box>
      </Box>
    }
    </>
    
  )
}

export default ArticleDetail
import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fecthArticles } from '../../store/actions/getArrticlesAction'; 
import { fecthAllUser } from '../../store/actions/getUserAction';
import {Box, Typography, Grid, Avatar,Button, Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import "./ArticleList.scss";



const ArticleList = ({ categoryId }) => {
    const dispatch = useDispatch();
    const { articles } = useSelector(state => state.articles);
    const { users } = useSelector(state => state.users);
    const { isLogin, account } = useSelector(state => state.account);
    useEffect(() => {
        dispatch(fecthArticles());
        dispatch(fecthAllUser());
    }, []);

    

    const filteredArticles = categoryId
    ? articles.filter((article) => article.categoryId === parseInt(categoryId))
    : articles;
   
    const articlesPerPage = 6;
    const numPages = Math.ceil(filteredArticles.length / articlesPerPage);
    // Khởi tạo state để lưu trang hiện tại
    const [currentPage, setCurrentPage] = useState(1);

    // Tính toán index của các sản phẩm cần hiển thị trên trang hiện tại
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
     const displayedArticles = filteredArticles.slice(startIndex, endIndex);

    
    return (
        <>
        {isLogin && account.roleId === 3 &&
        <Box textAlign={'right'} mb={3}>
            <Link to="" >
            <Button variant="outlined" sx={{
                color: "#FA8D22",
                 borderColor: "#FA8D22",
                 ":hover": {
                    borderColor: "#FA8D22",
                    backgroundColor: "rgba(250, 141, 34, 0.1)"
                 }
                 }}>
                <AddIcon/>
                Viết bài</Button>
            </Link>
        </Box>
        }
        <Grid container spacing={2}>
            {displayedArticles && displayedArticles.map((article)=>{
                const user = users.find((user) => user.id === article.userId)
                return (
              
                <Grid item xs={12} sm={6} md={4} className="article" key={article.id}>
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
                                    {article.date}
                                    </Typography>
                                </Box>
                        </Box>
                            <Box className="article-rate" >
                                <FavoriteIcon sx={{color: "red"}} /> 
                                <Typography variant="body1" component="p" className="article-rate-detail" >
                                {article.like}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            
                )
            })}
           
        </Grid>
        <Box mt={3}>
         <Pagination count={numPages} page={currentPage} onChange={(event, page) => setCurrentPage(page)} size="large" 
         defaultPage={1} 
            sx={{
                ".MuiPagination-ul" : {
                    justifyContent: 'center'
                },
            }}
         />
        </Box>
        </>
    )
}
export default ArticleList;
import React from 'react';
import {Container} from "@mui/material";
import Layout from '../components/layout/Layout';
import ArticleDetail from '../components/ArticleDetail/ArticleDetail';
import ArticleRelated from '../components/ArticleList/ArticleRelated';
const ExperienceDetail = () => {
  
 
  return (
    <Layout>
        <Container maxWidth="lg" sx={{position: "relative"}} >
           <ArticleDetail/>
           <ArticleRelated/>
        </Container>
    </Layout>
  )
}

export default ExperienceDetail
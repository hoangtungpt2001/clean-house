import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import {Container, Grid, Typography} from "@mui/material";
import Layout from '../components/layout/Layout';
import ArticleSidebar from '../components/ArticleSidebar/ArticleSidebar';
const Experience = () => {
  
 
  return (
    <Layout>
        <Container maxWidth="lg" >
          <Grid container mt={"50px"} mb={"100px"} columnSpacing={2} >
            <Grid item xs={12} md={3} pl={0} >
              <Typography variant="h5" component="h1" sx={{ padding: "15px", color:"#2e2e2e", fontWeight: "bold" }}>
                Danh mục
              </Typography>
              <ArticleSidebar/>
            </Grid>
            <Grid item xs={12} md={9} >
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      
       
    </Layout>
  )
}

export default Experience
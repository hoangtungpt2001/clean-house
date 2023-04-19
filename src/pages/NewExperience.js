import React, { useState } from 'react';
import {Container, Typography} from "@mui/material";
import Layout from '../components/layout/Layout';
import CreatePost from '../components/CreatePost/CreatePost';

const NewExperience = () => {
 
 
  return (
    <Layout>
          <Container maxWidth="lg" >
            <Typography mt={"50px"} mb={"50px"} variant="h4" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold", textAlign: "center" }}>
                Bài viết mới
            </Typography>
            <CreatePost/>
        </Container>
      
       
    </Layout>
  )
}

export default NewExperience
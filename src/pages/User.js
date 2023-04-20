import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Typography} from "@mui/material";
import Layout from '../components/layout/Layout';
import UserInfor from '../components/UserInfor/UserInfor';
const User = () => {
 const { isLogin } = useSelector(state => state.account);
  return (
    <Layout>
          <Container maxWidth="lg" >
            <Typography mt={"50px"} mb={"50px"} variant="h4" component="h1" sx={{ color:"#444444", fontWeight: "bold", textAlign: "center" }}>
                Thông tin cá nhân
            </Typography>
            {isLogin && 
            <UserInfor/>
            }
        </Container>
      
       
    </Layout>
  )
}

export default User
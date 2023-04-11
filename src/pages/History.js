import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import {Container, Typography} from "@mui/material";
import Layout from '../components/layout/Layout';
import HistoryCustomer from '../components/History/HistoryCustomer';
import HistoryEmploy from '../components/History/HistoryEmploy';

const History = () => {
    const { user } = useSelector(state => state.user);
    const { isLogin, account } = useSelector(state => state.account);
 
  return (
    <Layout>
          <Container maxWidth="lg" >
            <Typography mt={"50px"} mb={"50px"} variant="h4" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold", textAlign: "center" }}>
                Lịch sử đăng ký
            </Typography>
            {isLogin && account.roleId === 2 && 
            
            <HistoryCustomer/>
            }
            {isLogin && account.roleId === 3 && 
            
            <HistoryEmploy/>
            }
        </Container>
      
       
    </Layout>
  )
}

export default History
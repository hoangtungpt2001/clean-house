import React from 'react';
import {Container, Typography} from "@mui/material";
import Layout from '../components/layout/Layout';
import HistoryCustomer from '../components/History/HistoryCustomer';
import HistoryEmploy from '../components/History/HistoryEmploy';

const History = () => {
 
  return (
    <Layout>
          <Container maxWidth="lg" >
            <Typography mt={"50px"} mb={"50px"} variant="h4" component="h1" sx={{ color:"#fa8d22", fontWeight: "bold", textAlign: "center" }}>
                Lịch sử đăng ký
            </Typography>
            <HistoryCustomer/>
            <HistoryEmploy/>
        </Container>
      
       
    </Layout>
  )
}

export default History
import React from "react";
import Layout from '../components/layout/Layout';
import {
  Box,
  Typography,
  Container
} from "@mui/material";


const Introduce = () => {
    return (
        <Layout>
             <Container maxWidth="lg" >
                <Typography variant="h4" component="h1" sx={{color: "#444444"}} mt={"50px"} >
                                GIỚI THIỆU
                    </Typography>
                <Box mt={6} mb={6}>
                    <Typography variant="h5" component="h2" sx={{color: "#fa8d22"}} >
                                  CHÚNG TÔI LÀ HOUSE CLEANING
                    </Typography>
                    <Typography variant="body1" component="p" mt={2} sx={{color: "#707070", textAlign: "justify"}} >
                                 House Cleaning là website về ngành giúp việc nhà ở Việt Nam. Chúng tôi cung cấp đa dịch vụ tiện ích như: dọn dẹp nhà, nấu ăn, đi chợ, … tại Việt Nam. Thông qua website đặt lịch dành cho khách hàng và nhận việc của cộng tác viên House Cleaning, khách hàng và cộng tác viên có thể chủ động đăng và nhận việc trực tiếp trên website.
                    </Typography>
                </Box>
            
            </Container>
    
        
        </Layout>
    )
}
export default Introduce;
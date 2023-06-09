import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import processOne from "../../assets/images/process-one.png";
import processTwo from "../../assets/images/process-two.png";
import processThree from "../../assets/images/process-three.png";
import processFour from "../../assets/images/process-four.png";
import arrowOne from "../../assets/images/arrow-one.png";
import arrowTwo from "../../assets/images/arrow-two.png";

import './Process.scss';
const Process = () => {
    return (
        <>
            <Container maxWidth="lg" className="process" >
                <Typography variant="h4" component="h2" mb={4} className="process-head">
                     Quy trình sử dụng dịch vụ
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={12} md={6} >
                       <Box component="div" className="process-item">
                           <Box className="process-img" >
                            <img src={processOne} alt="process-one" />
                            </Box>
                            <Box className="process-heading" p={1}> 
                            <CheckCircleOutlineIcon  sx={{ fontSize: 30, color: "#FA8D22" }} />
                            <Typography variant="h5" component="h3" className="process-title">
                                Chọn dịch vụ
                            </Typography>
                            </Box>
                            <Typography variant="body1" component="p" className="process-des" p={1} >
                                Chúng tôi có các dịch vụ tiện ích sẵn sàng hỗ trợ bạn.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: "none", md: "block" }}}>
                        <Box className="step">
                            <img src={arrowTwo} alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: "none", md: "block" }}}>
                        <Box className="step">
                            <img src={arrowOne} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box component="div" className="process-item">
                            <Box className="process-img" >
                            <img src={processTwo} alt="process-one" />
                            </Box>
                            <Box className="process-heading" p={1}> 
                            <LocationOnIcon sx={{ fontSize: 30,color: "#FA8D22" }} />
                            <Typography variant="h5" component="h3" className="process-title">
                                Chọn thời gian và địa điểm
                            </Typography>
                            </Box>
                            <Typography variant="body1" component="p" className="process-des" p={1}>
                                Xác định ngày, giờ và địa điểm để đặt dịch vụ House Cleaning trong vòng chưa đầy 60 giây. Bạn có thể tùy chọn số lần sử dụng theo nhu cầu.
                            </Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6} >
                        <Box component="div" className="process-item">
                            <Box className="process-img" >
                            <img src={processThree} alt="process-one" />
                            </Box>
                            <Box className="process-heading" p={1}> 
                            <WorkIcon sx={{ fontSize: 30, color: "#FA8D22" }} />
                            <Typography variant="h5" component="h3" className="process-title">
                                Tiến hành công việc
                            </Typography>
                            </Box>
                            <Typography variant="body1" component="p" className="process-des" p={1}>
                                Người giúp việc gia đình/đối tác sẽ xác nhận đến nhà bạn như đã hẹn và thực hiện nhiệm vụ. Chất lượng, sự chuyên nghiệp luôn được đảm bảo 100%.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: "none", md: "block" }}}>
                        <Box className="step">
                              <img src={arrowTwo} alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ display: { xs: "none", md: "block" }}}>
                    </Grid> 
                    <Grid item xs={12} md={6} >
                       <Box component="div" className="process-item">
                            <Box className="process-img" >
                            <img src={processFour} alt="process-one" />
                            </Box>
                            <Box className="process-heading" p={1}> 
                            <StarIcon sx={{ fontSize: 30, color: "#FA8D22" }} />
                            <Typography variant="h5" component="h3" className="process-title">
                                Đánh giá và xếp hạng
                            </Typography>
                            </Box>
                            <Typography variant="body1" component="p" className="process-des" p={1}>
                                Bạn có thể đánh giá chất lượng dịch vụ thông qua House Cleaning.
                            </Typography>
                        </Box>
                    </Grid>
                    
                </Grid>

            </Container>
        </>
    )
}
export default Process;
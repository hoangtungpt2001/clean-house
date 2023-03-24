import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material";
import CommitOne from "../../assets/images/commit-one.png";
import CommitTwo from "../../assets/images/commit-two.png";
import CommitThree from "../../assets/images/commit-three.png";
import CommitFour from "../../assets/images/commit-four.png";
import './Commitment.scss';
const Commitment = () => {
    return (
        <>
            <Container maxWidth="lg" className="commit" >
                <Typography variant="h4" component="h2" mb={4} className="commit-head">
                     Cam kết chất lượng dịch vụ
                </Typography>
                <Grid container columnSpacing={2} rowSpacing={4} alignItems="stretch" display="flex">
                    <Grid item xs={12} sm={6} md={3}>
                       <Box component="div" className="commit-item">
                           <Box className="commit-img" textAlign="center" height={300}>
                             <img src={CommitOne} alt="time" />
                            </Box>
                            <Box className="commit-heading" p={2}> 
                            <Typography variant="h5" component="h3" className="commit-title" pb={1}>
                                Đặt lịch nhanh chóng
                            </Typography>
                            <Typography variant="body1" component="p" className="commit-des" >
                                Thao tác 60 giây trên ứng dụng, có ngay người nhận việc sau 60 phút
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                       <Box component="div" className="commit-item">
                            <Box className="commit-img" textAlign="center" height={300} >
                             <img src={CommitTwo} alt="price" />
                            </Box>
                            <Box className="commit-heading" p={2}> 
                            <Typography variant="h5" component="h3" className="commit-title" pb={1}>
                                Giá cả rõ ràng
                            </Typography>
                           
                            <Typography variant="body1" component="p" className="commit-des">
                                Giá dịch vụ được hiển thị rõ ràng trên ứng dụng. Bạn không phải trả thêm bất kỳ khoản chi phí nào.
                            </Typography>
                             </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                       <Box component="div" className="commit-item">
                           <Box className="commit-img" textAlign="center" height={300} >
                             <img src={CommitThree} alt="variety of services" />
                            </Box>
                            <Box className="commit-heading" p={2}> 
                            <Typography variant="h5" component="h3" className="commit-title" pb={1}>
                                Đa dạng dịch vụ
                            </Typography>
                            
                            <Typography variant="body1" component="p" className="commit-des"  >
                                Với dịch vụ tiện ích đa dạng, House Cleaning sẵn sàng hỗ trợ mọi nhu cầu việc nhà của bạn.
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Box component="div" className="commit-item">
                           <Box className="commit-img" textAlign="center" height={300} >
                             <img src={CommitFour} alt="variety of services" />
                            </Box>
                            <Box className="commit-heading" p={2}> 
                            <Typography variant="h5" component="h3" className="commit-title" pb={1}>
                                An toàn tối đa
                            </Typography>
                            
                            <Typography variant="body1" component="p" className="commit-des"  >
                                Người làm uy tín, luôn có hồ sơ lý lịch rõ ràng và được Công ty giám sát trong suốt quá trình làm việc.
                            </Typography>
                            </Box>
                        </Box>
                     
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Commitment;
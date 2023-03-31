import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid, 
} from "@mui/material";
import CommitOne from "../../assets/images/commit-one.png";
import CommitTwo from "../../assets/images/commit-two.png";
import CommitThree from "../../assets/images/commit-three.png";
import CommitFour from "../../assets/images/commit-four.png";
import './Commitment.scss';
const items = [
  {
    name: 'Đặt lịch nhanh',
    description: 'Thao tác 60 giây, có ngay người nhận việc sau 60 phút',
    image: CommitOne,
  },
  {
    name: 'Giá cả rõ ràng',
    description: 'Giá dịch vụ được hiển thị rõ ràng. Bạn không phải trả thêm bất kỳ khoản chi phí nào.',
    image: CommitTwo,
  },
  {
    name: 'Đa dạng dịch vụ',
    description: 'Với dịch vụ tiện ích đa dạng, House Cleaning sẵn sàng hỗ trợ mọi nhu cầu việc nhà của bạn.',
    image: CommitThree,
  },
  {
    name: 'An toàn tối đa',
    description: 'Người làm uy tín, luôn có hồ sơ lý lịch rõ ràng và được Công ty giám sát trong suốt quá trình làm việc.',
    image: CommitFour,
  },
];
const Commitment = () => {
    return (
        <>
            <Container maxWidth="lg" className="commit" >
                <Typography variant="h4" component="h2" mb={4} className="commit-head">
                     Cam kết chất lượng dịch vụ
                </Typography>
                <Grid container columnSpacing={2} rowSpacing={4} alignItems="stretch" display="flex">
                     {items.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <Box component="div" className="commit-item">
                           <Box className="commit-img" textAlign="center" pt={2} height={200}>
                             <img src={item.image} alt="time" />
                            </Box>
                            <Box className="commit-content" p={2}> 
                            <Typography variant="h5" component="h3" className="commit-title" pb={1}>
                                {item.name}
                            </Typography>
                            <Typography variant="body1" component="p" className="commit-des" >
                                {item.description}
                            </Typography>
                            </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
export default Commitment;
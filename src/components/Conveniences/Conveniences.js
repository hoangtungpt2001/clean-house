import React from 'react';
import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import '../../styles/variable.scss';
import './Conveniences.scss';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1  
}};
const items = [
  {
    name: 'Giúp việc nhà theo giờ',
    description: 'Là dịch vụ đầu tiên House Cleaning triển khai. Giờ đây công việc dọn dẹp không còn là nỗi bận tâm, bạn sẽ có nhiều thời gian nghỉ ngơi và tận hưởng cuộc sống.',
    image: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2019/11/dang-ky-lam-giup-viec-theo-gio-1.jpg',
  },
  {
    name: 'Tổng vệ sinh',
    description: 'Xử lý chuyên sâu mọi vết bẩn trong căn nhà của bạn với từ 2 cộng tác viên giúp việc nhà trở lên.',
    image: 'https://1.bp.blogspot.com/-F2ZJVD5cg8M/WirBugKj80I/AAAAAAAAAK0/WVjRbPVNR34ZFQLFmIP_5t7shm1TOujigCPcBGAYYCw/s640/tong%2Bve%2Bsinh%2Bnha%2Bdon%2Btet%2Bquan%2B2%2Bd.jpg',
  },
  {
    name: 'Đi chợ',
    description: 'Việc mua sắm thực phẩm và đồ dùng gia đình trở nên tiện lợi hơn bao giờ hết. Giao hàng tận nơi chỉ sau 1h.',
    image: 'https://cdnmedia.baotintuc.vn/Upload/pTMF1jgWpbjY1m8G1xWUsg/files/2021/08/dichodumdan/dicho10.jpg',
  },
  {
    name: 'Nấu ăn gia đình',
    description: 'Mang đến bữa ăn gia đình ấm áp, tròn vị mỗi khi cuộc sống quá bận rộn.',
    image: 'https://vinmec-prod.s3.amazonaws.com/images/20200522_154627_093429_nhung-loi-ich-cua-vie.max-800x800.jpg',
  },
];
function Conveniences()
{
   
    return (
        <Container maxWidth="lg" className="conveniences" >
                <Typography variant="h4" component="h2" mb={4} className="conveniences-head">
                     Tất cả những tiện ích gia đình
                </Typography>
               <Carousel
                responsive={responsive}
                infinite
                showDots
                autoPlaySpeed={1000}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                {items.map((item, index) => (
                            <Box key={index} component="div" className="conveniences-item">
                                <Box className="conveniences-img" textAlign="center" pt={2}>
                                 <img src={item.image} alt={item.name} />
                                </Box>
                                <Box className="conveniences-content" p={2}> 
                                <Typography variant="h5" component="h3" className="conveniences-title" pb={1}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" component="p" className="conveniences-des" >
                                    {item.description} 
                                </Typography>
                                </Box>
                            </Box>
                    ))}
                </Carousel>
         
            </Container>
    )
}

export default Conveniences;
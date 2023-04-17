import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Box, Typography, Container } from "@mui/material";
import { fecthCarousesl } from '../../store/actions/carouselAction';
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

function Conveniences()
{
    const dispatch = useDispatch();
    const {carousels} = useSelector((state) => state.carousels);
       
    useEffect(() => {
        dispatch(fecthCarousesl());
   }, [dispatch]);

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
                {carousels && carousels.length > 0 &&carousels.map((item) => (
                            <Box key={item.id} component="div" className="conveniences-item">
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
import React from 'react';
import {Box} from "@mui/material";
import '../../styles/variable.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider.scss';
 const items = [
    { 
        image: 'https://www.btaskee.com/wp-content/uploads/2023/03/happy-womens-day-pc-vie.jpg',
        name: 'Aya Bouchiha',
        description: 'Full Stack Webx Developer',
    },
    {
        image: 'https://www.btaskee.com/wp-content/uploads/2023/03/brewards-happy-womens-day-2023-pc-vie.jpg',
        name: 'John Doe',
        description: 'Author',
    },
    {
        image: 'https://www.btaskee.com/wp-content/uploads/2021/01/download-app-btaskee-web-banner-ver3-vie.png',
        name: 'Pitsu Coma',
        description: 'Math Student',
    },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1  
}};

function Slider()
{
    return (
        <Box className="slider">
               <Carousel
                draggable={false} // Chặn kéo trượt bằng chuột
                responsive={responsive}
                infinite={true}
                showDots
                autoPlaySpeed={1000}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                {items.map((item, index) => (
                            <Box key={index} component="div" className="slider-item">
                                 <img src={item.image} alt={item.name} className='slider-img' />
                            </Box>
                    ))}
                </Carousel>
        </Box>
         
     
    )
}

export default Slider;
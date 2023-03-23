import { Margin, Padding } from '@mui/icons-material'
import { Box, Button, Modal, Paper, TextField, Typography } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Layout from '../components/layout/Layout'
// import "../styles/Paper.css";
const Home = () => {

  const Item = ({name, image}) => {
    return (
        <Paper elevation={4} style={{overflow: 'hidden'}}>
        <div>
        
          <img src={image} alt={name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        
        </div>
            
            
            
            
        </Paper>
    );
};

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
  return (
    <Layout>
    {/* <h1>home</h1> */}

    <Carousel>
  {items.map((item, i) => (
    <Item key={i} {...item} />
  ))}
</Carousel>


        
    </Layout>
  )




      
  
}

export default Home
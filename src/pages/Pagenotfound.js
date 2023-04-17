import React from 'react'
import {
  Box,
  Typography,
  Container
} from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Pagenotfound = () => {
  return (

        <Container maxWidth="lg" sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }} >
          <Box >
            <SentimentSatisfiedAltIcon sx={{fontSize: "100px", color: "#FFA500"}} />
            <Typography variant="h4" component="h1" mb={2} mt={2}>Oops! Page Not Be Found</Typography>
            <Typography variant="h5" component="h2">Sorry but the page you are looking for does not exist.</Typography>
          </Box>
        </Container>
  
  )
}

export default Pagenotfound
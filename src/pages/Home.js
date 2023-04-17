

import React from 'react';

import Layout from '../components/layout/Layout';
import Process from '../components/Process/Process';
import Slider from '../components/Slider/Slider';
import Commitment from '../components/Commitment/Commitment';
import Conveniences from '../components/Conveniences/Conveniences';
const Home = () => {

  return (
    <Layout>
    <Slider/>
    <Conveniences />
    <Commitment />
    <Process/>
        
    </Layout>
  )




      
  
}

export default Home;
import React from 'react';
import Navbar from '../components/Navbar';
import Offers from '../components/Offers';
import Products from '../components/Products';
import Footer from '../components/footer';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Offers/>
        <Products/>
        <Footer/>
    </>
  )
}

export default Home
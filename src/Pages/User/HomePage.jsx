import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar';
import Hero from '../../Components/User/Hero/Hero';
import Popular from '../../Components/User/Popular/Popular';
import Offers from '../../Components/Offers/Offers';
import NewCollections from '../../Components/NewCollections/NewCollections';
import NewsLetter from '../../Components/User/NewsLetter/NewsLetter';
import Footer from '../../Components/User/Footer/Footer';


function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>

      
      
    </div>
  )
}

export default HomePage;
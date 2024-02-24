import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar';
import Hero from '../../Components/User/Hero/Hero';
import Popular from '../../Components/User/Popular/Popular';
import Offers from '../../Components/Offers/Offers';
function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Offers/>
      
    </div>
  )
}

export default HomePage;
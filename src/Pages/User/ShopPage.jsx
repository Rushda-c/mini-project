import React from 'react'
import Hero from '../../Components/User/Hero/Hero'
import Popular from '../../Components/User/Popular/Popular'
import Offers from '../../Components/User/Offers/Offers'
import NewCollections from '../../Components/User/NewCollections/NewCollections'
import NewsLetter from '../../Components/User/NewsLetter/NewsLetter'
import Footer from '../../Components/User/Footer/Footer'






function ShopPage() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        <Footer/>
        

        
    </div>
  )
}

export default ShopPage
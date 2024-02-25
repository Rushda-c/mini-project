import React from 'react'
import Hero from '../../Components/User/Hero/Hero'
import Popular from '../../Components/User/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollections from '../../Components/NewCollections/NewCollections'

function ShopPage() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
    </div>
  )
}

export default ShopPage
import React from 'react'
import './Hero.css'
import { FaArrowRightLong } from "react-icons/fa6";


function Hero() {
  return (
    <div className='hero'>
    <div className="hero-left">
     <h2>NEW ARRIVALS ONLY</h2>
     <div>
        <div className='hero-bag-icon'>
            <p>new</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMW9rYCDhHnua0FWO0F0D-CMGMHgZsprZWA&usqp=CAU"height={50}width={50}></img>
        </div>
        <div className='hero-p'>
        <p>collections</p>
        <p>for everyone</p>
        </div>
     </div>
     <div className='hero-latest-btn'>
        <div>Latest Collections</div>
        <FaArrowRightLong/>

     </div>
     </div>

    
    <div className="hero-right">
     <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg"height={500}width={500}></img>
    </div>
    </div>
  )
}

export default Hero
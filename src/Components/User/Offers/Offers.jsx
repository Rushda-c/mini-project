import React from 'react'
import './Offers.css'
function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='offers-right'>
            <img src="https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={300} width={300}></img>

        </div>
    </div>

  )
}

export default Offers
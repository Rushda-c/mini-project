import React from 'react'
import './Popular.css'
import data from '../Assets/Data'
import Item from '../Item/Item' 

function Popular() {
  return (
    <div className='popular'>
<h1>TRENDING CATEGORIES IN WOMEN</h1>
<hr/>
<div className='popular-item'>
  {data.map((item)=>{
    return<Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
  })}
</div>


        


    </div>
  )
}

export default Popular;
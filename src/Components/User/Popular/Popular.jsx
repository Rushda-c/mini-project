import React from 'react'
import './Popular.css'
import data from '../Assets/data'
function Popular() {
  return (
    <div className='popular'>
<h1>POPULAR IN WOMEN</h1>
<hr/>
<div className='popular-item'>
  {data.map((item)=>{
    return
  })}
</div>
    </div>
  )
}

export default Popular;
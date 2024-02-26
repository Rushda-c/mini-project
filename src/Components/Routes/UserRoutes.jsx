import React from 'react'

import { Routes,Route } from 'react-router-dom';
import HomePage from '../../Pages/User/HomePage';
import ShopPage from '../../Pages/User/ShopPage';
function UserRoutes() {
  return (
    <div> 
      
      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<ShopPage/>}/>

      
        
      
      
      
        
      </Routes>
      
      

    </div>
  )
}

export default UserRoutes;
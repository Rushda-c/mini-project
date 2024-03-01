import React from 'react'

import { Routes,Route } from 'react-router-dom';
import HomePage from '../../Pages/User/HomePage';
import ShopPage from '../../Pages/User/ShopPage';
import ShopCategoryPage from '../../Pages/User/ShopCategoryPage';
import ShopWomenPage from '../../Pages/User/ShopWomenPage';


function UserRoutes() {
  return (
    <div> 
      
      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<ShopPage/>}/>
        <Route path='/mens' element={<ShopCategoryPage category="mens"/>}/>
        <Route path='/womens' element={<ShopWomenPage category="womens"/>}/>
        
        
        
        
      
        
      
      
      
        
      </Routes>
      
      

    </div>
  )
}

export default UserRoutes;
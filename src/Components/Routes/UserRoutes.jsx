import React from 'react'

import { Routes,Route } from 'react-router-dom';
import HomePage from '../../Pages/User/HomePage';
import ShopPage from '../../Pages/User/ShopPage';
import ShopCategoryPage from '../../Pages/User/ShopCategoryPage';
import ShopWomenPage from '../../Pages/User/ShopWomenPage';
import ShopKidPage from '../../Pages/User/ShopKidPage';
import SignupPage from '../../Pages/User/SignupPage';
import LoginPage from '../../Pages/User/LoginPage';



function UserRoutes() {
  return (
    <div> 
      
      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/' element={<ShopPage/>}/>
        <Route path='/mens' element={<ShopCategoryPage category="mens"/>}/>
        <Route path='/womens' element={<ShopWomenPage category="womens"/>}/>
        <Route path='/kids' element={<ShopKidPage category="kids"/>}/>
        <Route path='/Signup' element={<SignupPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        
      
         
      
        
      
      
      
        
      </Routes>
      
      

    </div>
  )
}

export default UserRoutes;
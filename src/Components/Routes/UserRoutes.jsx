import React from 'react'

import { Routes,Route } from 'react-router-dom';
import HomePage from '../../Pages/User/HomePage';
function UserRoutes() {
  return (
    <div> 
      
      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      
      
        
      </Routes>
      

    </div>
  )
}

export default UserRoutes;
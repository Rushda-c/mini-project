import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import UserRoutes from './Components/Routes/UserRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
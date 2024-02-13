import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/User/HomePage'
import SignUpPage from '../Pages/User/SignUpPage'
import LoginPage from '../Pages/User/LoginPage'
import SingleProductPage from '../Pages/User/SingleProductPage'
function UserRoutes() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/' element={<SignUpPage/>}/>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/' element={<SingleProductPage/>}/>
            </Routes>
        </div>
    )

}


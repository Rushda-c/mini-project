import React from 'react'
import './Header.css'
function Header(){
    return (
        <div className='Header'>
            <div className='headerbrand'>
                <h1>Phone</h1>
                <div className='headerlinks'>
                    <ul><li><a>Latest</a></li>
                    <li><a>Brands</a></li>
                    <li><a>Categories</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Support</a></li>
                    
                    </ul>
                </div>


            </div>
        </div>
    )
}
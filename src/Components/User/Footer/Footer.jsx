import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
       <div className='footer-logo' >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCwLdEs7rvgyP6GlrFm3WSsmM3gvkcdrV9gp3UdekKw&s"height={50}width={100}></img>
                
                
       </div>
       <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src="https://media.istockphoto.com/id/1278996256/vector/camera-icon-simple-style-isolated-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=nmJsi4AIImCMPD_hyNDb8kLhO1iDRcbW-haTBcByOJo=" height={50} width={50}></img>
        </div>
        <div className='footer-icons-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOX1WJnGIReKqX8fHTKCfdvV47xBmmTF8iw&usqp=CAU" height={50} width={50}></img>
        </div>
        <div className='footer-icons-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0drCHaQi6FsDjSv5Ujy26NKd6nafVbQDGZQ&usqp=CAU" height={50} width={50}></img>
            </div>
            
       </div>
       <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2023 - All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
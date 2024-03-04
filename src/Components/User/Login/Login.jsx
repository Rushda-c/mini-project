import React from 'react'
import './Login.css'
import { useState } from 'react'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setErrors]=useState([])
    const handleSubmit = (event) =>{
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if(Object.keys(errors).length === 0){
            alert("Done");
        }

        
    }
    const validate =() =>{
        const error ={};
        if(!email){
            error.email = 'Email is Required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
           errors.email = "Email not Matched";
        } else {
            error.email="";
            
        }
        if(!password){
            error.password = 'password is Required';
        } else if(password.length < 8){
           errors.password = "Password not Matched";
        } else {
            error.password="";
            
        }
        return error;


    }
  return (
    <div className='container'>
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)}  placeholder='Enter a email'/>
                    {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password"onChange={(e)=> setPassword(e.target.value)} placeholder='Enter a password'  />
                    {errors.password && <div className='error'>{errors.password}</div>}
                
                </div>
                <button>Login</button>

            </form>
            <a href='#'>Sing Up</a>
        </div>

    </div>
  )
}

export default Login
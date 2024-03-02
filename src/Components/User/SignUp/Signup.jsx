import React from 'react';
import './Signup.css'
import { useFormik } from 'formik';
const validate=values=>{
    const errors={};
    if(!values.username) {
        errors.username ='Required';
        errors.username='please enter a valid username.';
    }
    if(!values.email){
        errors.email ='Required';

    } else if (!/^[A-Z0-9.com_%+-]+@[A-Z0-9.com-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email ='Please enter a valid email address.';
    }
    if(!values.phone){
        errors.phone ='Required';

    } else if(!/^\d{10}$/i.test(values.phone)){
        errors.phone ='Please enter a valid phone number';
    }
    if(!values.password){
        errors.password ='Required';
    } else if (values.password.length < 8){
        errors.password = 'Password must be at least 8 characters long';
    }
    if(!values.confirmPassword){
        errors.confirmPassword ='Required';

    } else if (values.confirmPassword !=values.password){
        errors.confirmPassword = 'Please must match';
    }
    return errors;

};
const Signup =() => {
   const formik = useFormik({
    initialValues:{
        username:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    },
    validate,
    onSubmit:values => {
        console.log(values);
    },
   });
   return (
    <form onSubmit={formik.handleSubmit}>
        <h1>Signup</h1>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ):null}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? ( <div>{formik.errors.email}</div>):null}
        </div>
        <div>
            <label htmlFor='phone'>Phone Number</label>
            <input type="text" id="phone" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
            {formik.touched.phone && formik.errors.phone ? (<div>{formik.errors.phone}</div>):null}
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>):null}
        </div>
        <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}/>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div>{formik.errors.confirmPassword}</div>):null}
            <button type="submit">Submit</button>
        </div>
    </form>
   )
}
export default Signup
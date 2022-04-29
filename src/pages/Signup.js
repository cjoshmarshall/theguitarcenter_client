import React, { useEffect, useState } from 'react'
import './Signup.css'
import Announcement from '../components/Announcement'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { signup } from '../redux/api/userApi';
import { useDispatch, useSelector } from 'react-redux'

function Signup() {
    
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("") 
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("") 
    const dispatch=useDispatch()

    
    const {isFetching,error}=useSelector((state)=>state.user)

    const handleSignup=(e)=>{
        e.preventDefault()
        signup(dispatch,{fname,lname,email,password})
    }

    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



    return (
        <div>
        <Announcement />
        <Header />
        <div className='signup'>
            <h1 className='signup_title'>SIGNUP</h1>
            <form className='signup_container' autoComplete='off'>
                <div className='signup_subcontainer'>
                    {error?<div className='login_error'>Something went wrong</div>:<></>}
                    <label className='signup_label'>First Name</label>
                    <input className='signup_input' name="fname" type="text" onChange={(e)=>setFname(e.target.value)} />
                    <label className='signup_label'>Last Name</label>
                    <input className='signup_input' name="lname" type="text" onChange={(e)=>setLname(e.target.value)} />
                    <label className='signup_label' >Email</label>
                    <input className='signup_input' name="email" type="email" onChange={(e)=>setEmail(e.target.value)} />
                    <label className='signup_label'>Password</label>
                    <input className='signup_input' name="password" type="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <button className='signup_button' onClick={handleSignup}>
                        {isFetching?<div class="signup_loader"></div>:<div>CREATE NEW ACCOUNT</div>}
                    </button>
                    </div>
            </form>
        </div>
        <Newsletter />
        <Footer />
        </div>
    )
}

export default Signup
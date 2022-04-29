import React, { useState } from 'react'
import "./Newsletter.css"
import { publicRequest } from '../redux/api/apiHandle'

function Newsletter() {

  const [email,setEmail]=useState("")
  
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      console.log(email)
      const res=await publicRequest.post("/newsletter",{email})
      alert("Sumitted Successfully")
    }catch(err){
      alert("Something went Wrong")
    }
  }

  

  return (
    <div className='newsletter'>
        <div className='newsletter_container'>
            <h1>NEWSLETTER</h1>
            <p>Get updates on our latest products and sales</p>
            <form className='newsletter_subcontainer' autoComplete='off'>
                <input name="email" type="email" placeholder="ENTER EMAIL" className='newsletter_input' onChange={e=>setEmail(e.target.value)}/>
                <button className='newsletter_button' onClick={handleSubmit}>
                    SUBMIT
                </button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
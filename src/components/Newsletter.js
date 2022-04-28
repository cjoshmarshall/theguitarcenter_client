import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Newsletter.css"

function Newsletter() {

  const [email,setEmail]=useState("")
  const dispatch=useDispatch()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    // login(dispatch,{email})
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
import React, { useEffect } from 'react'
import './Error.css'
import Announcement from '../components/Announcement'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Error() {

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
        <div>          
            <Announcement />
            <Header />
            <div className='error'>
                <h1 className='error_title'>OOPS! LOOKS LIKE THERE WAS AN ERROR.</h1>
                <h1 className='error_description'>CANNOT FIND THE PAGE YOU ARE LOOKING FOR!</h1> 
                <div className='error_buttonContainer'>
                  <Link to="/">
                    <button className='error_button'>CONTINUE SHOPPING</button>
                  </Link>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
  )
}

export default Error
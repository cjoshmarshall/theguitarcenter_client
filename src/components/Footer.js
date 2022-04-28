import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
        <h1 className='footer_title'>THE GUITAR CENTER</h1>
        <div className='footer_container'>
            <div className='footer_leftContainer'>
                <p className='footer_description'>Our products are known for more than their quality, craftsmanship, and tone. They are backed by our unwavering commitment to environmental sustainability and responsible manufacturing practices.</p>
                <div className='footer_socialContainer'>
                    <h2 className='footer_socialTitle'>#JOIN OUR FAMILY</h2>
                    <ul className='footer_socialList'>
                        <li><a href='https://www.instagram.com' target='_blank' className='footer_socialInstagram'><InstagramIcon /></a></li>
                        <li><a href='https://www.facebook.com' target='_blank' className='footer_socialFacebook'><FacebookIcon /></a></li>
                        <li><a href='https://www.twitter.com' target='_blank' className='footer_socialTwitter'><TwitterIcon /></a></li>
                        <li><a href='https://www.youtube.com' target='_blank' className='footer_socialYoutube'><YouTubeIcon /></a></li>
                    </ul>
                </div>
            </div>            
            <div className='footer_middleContainer'>
                <h2 className='footer_middleTitle'>Quick Links</h2>
                <ul className='footer_linkList'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/'>ABOUT</Link></li>
                    <li><Link to='/guitars'>GUITARS</Link></li>
                    <li><Link to='/cart'>CART</Link></li>
                    <li><Link to='/'>MY ACCOUNT</Link></li>
                    <li><Link to='/'>TERMS</Link></li>
                </ul>
            </div>
            <div className='footer_rightContainer'>
                <h2 className='footer_rightTitle'>CONTACT</h2>
                <div className='footer_contact'>
                    <div className='footer_contactIcon'><LocationOnIcon /></div>
                    <p>xxxx xxxx xxxx</p>
                    <div className='footer_contactIcon'><PhoneIcon /></div>
                    <p>+1 2345678</p>
                    <div className='footer_contactIcon'><EmailIcon /></div>
                    <p>contact@theguitarcenter.com</p>
                </div>
            </div>
        </div>
        <p className='footer_footer'>@2022 The Guitar Store All Rights Reserved</p>
    </div>
  )
}

export default Footer
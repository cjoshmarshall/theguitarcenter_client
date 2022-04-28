import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

function Header() {

    const quantity=useSelector(state=>state.cart.quantity)
    
    const user=useSelector(state=>state.user)

    const logout=()=>{
        localStorage.clear()
        window.location.reload()
    }

    const handleDropdown=()=>{
        const dropdown=document.getElementById("header_showContainer")
        dropdown.classList.toggle("header_show")
    }

  return (
    <div className='header'>
        <div className='header_container'>
            <div className='header_leftContainer'>
                <div className='header_searchContainer'>
                    <input className='header_searchInput'></input>
                    <div className='header_searchIcon'><SearchIcon /></div>
                </div>
            </div>
            <div className='header_middleContainer'>
                <Link to='/'><img src="https://theguitarstore.s3.ap-south-1.amazonaws.com/icon_home.png" alt="" className='header_title'/></Link>
            </div>
            <div className='header_rightContainer'>                
                <h3 className='header_guitars'><Link to='/guitars'>GUITARS</Link></h3>                
                {user.currentUser!==null?
                    <div className='header_user' onClick={handleDropdown}>{user.currentUser.fname}</div>:
                    <div>
                        <Link to='/login'>
                            <div className='header_login'>Login</div>
                        </Link>
                    </div>}
                <Link to='/cart'>
                    <Badge badgeContent={quantity} color="primary" className='header_cart'>
                        <ShoppingCartIcon />
                    </Badge>
                </Link>
            </div>
        </div>
        <div className='header_menuContainer'>
            <div id="header_showContainer" className='header_showContainer'>
                <div>
                    <div className='header_menu'>Account</div>
                    <Link to="/orders"><div className='header_menu'>Orders</div>  </Link>        
                    <div className='header_menu' onClick={logout}>Logout</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
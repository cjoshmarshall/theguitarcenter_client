import React, { useEffect, useState } from 'react'
import './Cart.css'
import Header from '../components/Header';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {removeProduct} from "../redux/cartSlice"
import Stripe from '../components/Stripe';


function Cart() {
    
    const cart=useSelector(state=>state.cart)
    const user=useSelector(state=>state.user)

    const dispatch=useDispatch()


    const handleRemove=()=>{
        dispatch(removeProduct(cart))
    }


    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


  return (
    <div>
        <Header />
        <Announcement />
        <div className='cart'>
            <h1 className='cart_title'>YOUR CART</h1>
            {cart.products.length>=1?
            <div className='cart_container'>
                <div className='cart_subcontainer'>
                    <p className='cart_card'>
                        <Link to='/'>Continue Shopping</Link>
                    </p>                  
                    {cart.products.map((product)=>(
                        <div className='cart_innercontainer1' key={product._id}>
                            <div className='cart_infoContainer'>
                                <img src={product.thumbnail} alt=' ' className='cart_image'/>
                                <div className='cart_descriptionContainer'>
                                    <h2 className='cart_descriptionTitle'>{product.title}</h2>
                                    <h3 className='cart_description'>{product.series}</h3>
                                    <p className='cart_remove' onClick={handleRemove}>Remove</p>
                                </div>
                            </div>
                            <div className='cart_priceContainer'>
                                <div className='cart_price'>
                                    <p className='cart_priceLabel'>Each</p>
                                    <p className='cart_priceValue'>${product.price}</p>
                                </div>
                                <div className='cart_price'>
                                    <p className='cart_priceLabel'>Quantity</p>
                                    <p className='cart_priceValue'>{product.quantity}</p>
                                </div>
                                <div className='cart_price'>
                                    <p className='cart_priceLabel'>Total</p>
                                    <p className='cart_priceValue'>${product.quantity*product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='cart_subcontainer'>
                    <p className='cart_items'>1 ITEM(S)</p>
                    <div className='cart_innercontainer2'>
                        <div>
                            <div className='cart_checkoutContainer'>
                                <div className='cart_checkoutPrice'>
                                    <p>Shipping Cost</p>
                                    <p>$10.00</p>
                                </div>
                                <div className='cart_checkoutPrice'>
                                    <p>Shipping Discount</p>
                                    <p>-$10.00</p>
                                </div>
                                <div className='cart_checkoutPrice'>
                                    <p>Sales Tax</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='cart_checkoutPrice'>
                                    <p>Estimated Total</p>
                                    <p>${cart.total}</p>
                                </div>
                            </div>
                        </div>
                        <div className='cart_buttonContainer'>
                            <Stripe cart={cart} user={user}/>
                        </div>
                    </div>
                </div>
            </div>:
            <div className='cart_innercontainer3'>
                <p className='cart_infoDescription'>Your Cart is empty.</p>
                <Link to="/guitars"><button className='cart_infoButton'>Shop Now</button></Link>
            </div>
            } 
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart
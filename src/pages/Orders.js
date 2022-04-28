import React, { useEffect, useState } from 'react'
import "./Orders.css"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import moment from 'moment'
import { publicRequest } from '../redux/api/apiHandle'

function Orders() {

    const [order,setOrder]=useState([])


    useEffect(()=>{
        const getorders=async ()=>{
          try{
            const res=await publicRequest.get("/orders")
            setOrder(res.data)
          }catch(err){}
        }
        getorders()
      },[])


      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



  return (
    <div className='orders'>
        <Announcement />
        <Header /> 
            <div className='orders_container'>
                <h1 className='orders_title'>YOUR ORDERS</h1>
                {order.map((product)=>{
                    return(
                    <div className='orders_subcontainer' key={product._id}>
                        <div className='orders_innercontainer1'>
                            <div className='orders_content1'>
                                <p className='orders_info1'>ORDER PLACED</p>
                                <p className='orders_info2'>{moment(product.createdAt).format("MMM DD yyyy")}</p>
                            </div>
                            <div className='orders_content1'>
                                <p className='orders_info1'>TOTAL</p>
                                <p className='orders_info2'>${product.amount}</p>
                            </div>
                            <div className='orders_content1'>
                                <p className='orders_info1'>SHIP TO</p>
                                <p className='orders_info2'>JOSH MARSHALL</p>
                            </div>
                            <div className='orders_content1'>
                                <p className='orders_info1'>ORDER ID <b>#{product._id}</b></p>
                            </div>
                        </div>
                        {product.products.map(item=>{
                           return( 
                            <>
                            <div key={item._id} className='orders_innercontainer2'>
                                <div className='orders_innermostcontainer'>
                                    <img src={item.thumbnail} alt=' ' className='orders_image' />
                                    <div className='orders_content2'>
                                        <h2 className='orders_info3'>{item.title}</h2>
                                        <h3 className='orders_info3'>{item.series}</h3>
                                    </div>
                                    <div className='orders_content2'>
                                        <div className='orders_content3'>
                                            <h3 className='orders_info4'>Gig Case</h3>
                                            <h4 className='orders_info4'>{item.specs.case}</h4>
                                        </div>
                                        <div className='orders_content3'>
                                            <h3 className='orders_info4'>Electonics</h3>
                                            <h4 className='orders_info4'>{item.specs.electronics}</h4>
                                        </div>
                                    </div>
                                    <div className='orders_content2'>
                                        <h2 className='orders_info3'>PRICE</h2>
                                        <h3 className='orders_info3'>${item.price}</h3>
                                    </div>
                                </div>
                                </div>
                            </>)
                            })}
                        </div>
                    )
                    })}
            </div>       
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Orders
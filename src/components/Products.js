import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import { publicRequest } from '../redux/api/apiHandle'

function Products({category,filter,sort}) {

  const [products,setProducts]=useState([])
  const [filteredProducts,setFilterProducts]=useState([])




  useEffect(()=>{
    const getGuitars=async ()=>{
      try{
        const res=await publicRequest.get("/guitars")
        setProducts(res.data)
      }catch(err){}
    }
    getGuitars()
  },[category])

  useEffect(()=>{
    filter && setFilterProducts(
      products.filter((item)=>
      Object.entries(filter).every(([key,value])=>
      item[key].includes(value)
      ))
    )
  },[products,filter])

  useEffect(()=>{
    if((sort==="most popular")){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=>a._id.localeCompare(b._id)))
    }else if((sort==="price low to high")){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=>a.price-b.price))
    }else if((sort==="price high to low")){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=>b.price-a.price))
    }else if((sort==="product name a-z")){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=>a.title.localeCompare(b.title)))
    }else if((sort==="product name z-a")){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=>b.title.localeCompare(a.title)))
    }
  },[sort])


  
  return (
    <div className='products'>
      {filteredProducts.map((item)=>(
        <div className='products_container' key={item._id}>
          <Link to={`/guitars/${item._id}`}>
          <img src={item.image} alt=" " className='products_image'/>
          <p className='products_title'>{item.title}</p>
          <h2 className='products_price'>${item.price}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
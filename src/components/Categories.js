import React, { useEffect, useState } from 'react'
import "./Categories.css"
import { categories} from "../data.js"
import axios from 'axios'

function Categories() {


        const [category,setCategory]=useState([])
        
    useEffect(()=>{
        const getCategory=async ()=>{
          try{
            const res=await axios.get("http://localhost:3006/api/categories")
            setCategory(res.data)
          }catch(err){}
        }
        getCategory()
      },[])

return (
        <div className='categories'>
            {category.map(item=>(
                <div className='categories_container' key={item._id}>
                    <div className='categories_imageContainer'>
                        <img src={item.image} alt=" " className='categories_image'/>
                    </div>
                    <h2 className='categories_title'>{item.title}</h2>
                    <p className='categories_description'>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Categories
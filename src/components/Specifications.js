import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../redux/api/apiHandle'
import "./Specifications.css"

function Specifications(){


  const location=useLocation()
  const id=location.pathname.split("/")[2]

  const [product,setProduct]=useState({})
  
  useEffect(()=>{
    const getGuitars=async ()=>{
      try{
        const res=await publicRequest.get("/guitars/find/"+id)
        setProduct(res.data.specs)
      }catch(err){}
    }
    getGuitars()
  },[id])


 

  return (
    <div className='Specifications'>
        <div className='Specifications_container'>
          <div className='Specifications_imageContainer'>
            <img src={product.specsimage} alt=" " className='Specifications_image'/> 
          </div>       
          <div className='Specifications_infoContainer'>
            <h2 className='Specifications_infoTitle'>Specifications</h2>
            <ul className='Specifications_infoList'>
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Body Size:</p>
                <p className='Specifications_infoValue'>{product.bodysize}</p>
              </li> 
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Finish Top:</p>
                <p className='Specifications_infoValue'>{product.finishtop}</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Bracing Pattern:</p>
                <p className='Specifications_infoValue'>{product.construction}</p>
              </li>    
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Back and Side Finish:</p>
                <p className='Specifications_infoValue'>{product.backandsidefinish}</p>
              </li> 
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Scale Length:</p>
                <p className='Specifications_infoValue'>{product.scalelength}"</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Fingerboard Width:</p>
                <p className='Specifications_infoValue'>{product.fingerboardwidth}"</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Top Material:</p>
                <p className='Specifications_infoValue'>{product.topmaterial}</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Neck Shape:</p>
                <p className='Specifications_infoValue'>{product.neckshape}</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Back Material:</p>
                <p className='Specifications_infoValue'>{product.backmaterial}</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Case:</p>
                <p className='Specifications_infoValue'>{product.case}</p>
              </li> 
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Side Material:</p>
                <p className='Specifications_infoValue'>{product.sidematerial}</p>
              </li>  
              <li className='Specifications_infoLists'>
                <p className='Specifications_infoLabel'>Electronics:</p>
                <p className='Specifications_infoValue'>{product.electronics}</p>
              </li>   
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Specifications
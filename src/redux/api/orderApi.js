import { createAsyncThunk } from "@reduxjs/toolkit"
import { publicRequest } from "./apiHandle"


export const getAllOrders=createAsyncThunk("/orders",async (dispatch)=>{
    try{
        const res=await publicRequest.get("/orders")
        console.log(res.data)
        dispatch({type: 'GET_ALL_CARS', payload:res.data})
    }catch(err){
        console.log(err)
    }
})


import { loginFailure, loginStart, loginSuccess } from "../userSlice"
import { publicRequest, userRequest } from "./apiHandle"

export const login=async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await userRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const signup=async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        const res=await publicRequest.post("/auth/signup",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}



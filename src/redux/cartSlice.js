import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload)
            state.total+=action.payload.price*action.payload.quantity
        },
        removeProduct:(state,action)=>{
            state.quantity-=1;
            state.total=0
            state.products.splice(state.products.findIndex((guitar) => guitar._id === action.payload),1)
        },
        resetCart:(state)=>{
            state.products=[]
            state.quantity=0
            state.total=0
        }
    }
})

            

export const {addProduct,removeProduct,resetCart}=cartSlice.actions

export default cartSlice.reducer
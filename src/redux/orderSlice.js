import {createSlice} from "@reduxjs/toolkit"

const orderSlice=createSlice({
    name:"orders",
    initialState:{
        orders:null
    },
    reducers:{
        getOrder(state,action){
            switch ((action.type)) {
                case 'GET_ALL_BOOKINGS':
                state.orders=action.payload
            } 
        }
    }
})

export const {getOrder}=orderSlice.actions

export default orderSlice.reducer
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from "./redux/cartSlice"
import userReducer from "./redux/userSlice"
import orderReducer from "./redux/orderSlice"


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const rootReducer=combineReducers({user:userReducer,cart:cartReducer,order:orderReducer})

  const persistedReducer = persistReducer(persistConfig, rootReducer)

   
    export const store=configureStore({
        reducer:persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
        })
    })

  export let persistor = persistStore(store)
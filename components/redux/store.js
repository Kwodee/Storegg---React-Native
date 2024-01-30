import { configureStore } from '@reduxjs/toolkit'
import myCoinReducer from './myCoinSlice'
import myProductsReducer from './myProductsSlice'

export default configureStore({
  reducer: {
    MyCoins: myCoinReducer,
    MyProducts: myProductsReducer,
  },
})
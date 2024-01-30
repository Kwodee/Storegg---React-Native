import { createSlice } from '@reduxjs/toolkit'

export const myProductsSlice = createSlice({
  name: 'MyProducts',
  initialState: {
    myPurchased: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.myPurchased.push(action.payload);
    }
  },
})

export const { addProduct } = myProductsSlice.actions

export default myProductsSlice.reducer
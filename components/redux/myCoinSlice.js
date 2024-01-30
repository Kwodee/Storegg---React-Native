import { createSlice } from '@reduxjs/toolkit'

export const myCoinSlice = createSlice({
  name: 'MyCoins',
  initialState: {
    value: 1000,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = myCoinSlice.actions

export default myCoinSlice.reducer
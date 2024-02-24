import { configureStore } from '@reduxjs/toolkit'
import sneakersSlice from './sneakersSlice'
import bagSlice from './bagSlice'

export const store = configureStore({
  reducer: {
	  sneakers: sneakersSlice,
    bag: bagSlice,
  },
})
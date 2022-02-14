import {configureStore} from '@reduxjs/toolkit'
import reservationsReducer from '../features/reservationSlice'
import attendeeReducer from '../features/attendeeSlice'

export const store = configureStore({
  reducer:{
      reservations: reservationsReducer,
      attendee: attendeeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import React from 'react'
import { useDispatch } from 'react-redux'
import { addAttendees } from '../features/attendeeSlice'
import { removeReservation } from '../features/reservationSlice'
import {v4 as uuid } from 'uuid'

interface ReservationCardTypes {
  name: string;
  index: number;
}
export default function ReservationCard({name, index}: ReservationCardTypes) {
  const dispatch = useDispatch()

  return (
    <div onClick={() => {
      dispatch(removeReservation(index));
      dispatch(addAttendees({
        id: uuid(),
        name,
        food: []
      }));
    }} 
    
    className="reservation-card-container"><b>{name}</b> <br/> <small>click to place order</small></div>
  )
}

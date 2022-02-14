import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToAttendee } from '../features/attendeeSlice';

interface AttendeeCardType { 
  id: string;
  name: string;
  food: string[]
}

function AttendeesCard( {id, name, food}: AttendeeCardType) {
  const dispatch = useDispatch()
  const [attendeeFoodInput, setAttendeeFoodInput] = useState("")

  return (
    <div className='customer-food-card-container'>
      <p>{name}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map((food) => { 
            return <p>{food}</p>
            })}
        </div>
        <div className='customer-food-input-container'>
          <input value={attendeeFoodInput} onChange={(event) => setAttendeeFoodInput(event.target.value)} />
          <button onClick={() => {
            if(!attendeeFoodInput) return;
            dispatch(addFoodToAttendee({
              id,
              food: attendeeFoodInput
            }))
            setAttendeeFoodInput("")
          }}>Add Order</button>
        </div>
      </div>
    </div>
  );
}

export default AttendeesCard;

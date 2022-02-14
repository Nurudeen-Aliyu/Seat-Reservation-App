import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import AttendeesCard from './components/AttendeesCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('');

  const reservation = useSelector(
    (state: RootState) => state.reservations.value
  );
  const attendees = useSelector((state: RootState) => state.attendee.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservation.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reservationNameInput}
              onChange={(event) => setReservationNameInput(event.target.value)}
            />
            <button onClick={handleAddReservation}>Add Name To Reserve Seat</button>
          </div>
        </div>
        <div className='customer-food-container'>
          <h5 className='reservation-header'>_Attendees' Order</h5>
          {attendees.map((attendee) => {
            return (
              <AttendeesCard
                id={attendee.id}
                name={attendee.name}
                food={attendee.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

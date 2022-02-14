import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AttendeeState {
  value: Attendee[];
}
interface Attendee {
  id: string;
  name: string;
  food: string[];
}
interface AddFoodToAttendeePayload {
  food: string;
  id: string;
}

const initialState: AttendeeState = {
  value: [],
};

export const attendeeSlice = createSlice({
  name: 'attendees',
  initialState,
  reducers: {
    addAttendees: (state, action: PayloadAction<Attendee>) => {
      state.value.push(action.payload);
    },
    addFoodToAttendee: (
      state,
      action: PayloadAction<AddFoodToAttendeePayload>
    ) => {
      state.value.forEach((attendee) => {
        if (attendee.id === action.payload.id) {
          attendee.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addAttendees, addFoodToAttendee } = attendeeSlice.actions;
export default attendeeSlice.reducer;

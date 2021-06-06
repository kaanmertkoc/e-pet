import {
  ADD_APPT_REQUEST,
  ADD_APPT_SUCCESS,
  ADD_APPT_FAIL,
} from '../constants/appointmentConstants';

export const addAppointmentReducer = (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_APPT_REQUEST:
      return {
        loading: true,
      };
    case ADD_APPT_SUCCESS:
      return {
        loading: false,
        appointment: action.payload,
      };
    case ADD_APPT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

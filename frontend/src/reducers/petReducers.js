import {
  ADD_PET_REQUEST,
  ADD_PET_SUCCESS,
  ADD_PET_FAIL,
} from '../constants/petConstants';

export const addPetReducer = (state = { vaccines: {} }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_PET_REQUEST:
      return {
        loading: true,
      };
    case ADD_PET_SUCCESS:
      return {
        loading: false,
        petInfo: action.payload,
      };
    case ADD_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

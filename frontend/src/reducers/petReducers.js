import {
  ADD_PET_REQUEST,
  ADD_PET_SUCCESS,
  ADD_PET_FAIL,
  GET_PET_REQUEST,
  GET_PET_SUCCESS,
  GET_PET_FAIL,
  GET_PET_ID_REQUEST,
  GET_PET_ID_SUCCESS,
  GET_PET_ID_FAIL,
} from '../constants/petConstants';

export const addPetReducer = (state = { vaccines: [] }, action) => {
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
export const getPetReducer = (state = { pets: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_PET_REQUEST:
      return {
        loading: true,
      };
    case GET_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload,
      };
    case GET_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPetDetailReducer = (
  state = { pet: { vaccines: [] } },
  action
) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_PET_ID_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PET_ID_SUCCESS:
      return {
        loading: false,
        pet: action.payload,
      };
    case GET_PET_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

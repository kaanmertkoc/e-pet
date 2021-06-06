import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  getUsersReducer,
} from './reducers/userReducers';
import { vetRegisterReducer } from './reducers/vetReducers';
import {
  addPetReducer,
  getPetReducer,
  getPetDetailReducer,
} from './reducers/petReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  usersList: getUsersReducer,
  vetRegister: vetRegisterReducer,
  addPet: addPetReducer,
  getPet: getPetReducer,
  getPetDetail: getPetDetailReducer,
});

const middleware = [thunk];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

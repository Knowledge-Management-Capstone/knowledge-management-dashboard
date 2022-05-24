import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer
} from './reducers/userReducers.js'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
})

const userFromStorage = localStorage.getItem('user-researcher')
  ? JSON.parse(localStorage.getItem('user-researcher'))
  : null

const initialState = {
  userLogin: { user: userFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

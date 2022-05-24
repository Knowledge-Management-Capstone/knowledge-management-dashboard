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

const userFromStorage = localStorage.getItem('user-admin')
  ? JSON.parse(localStorage.getItem('user-admin'))
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

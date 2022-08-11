import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducers'
import {
  teamListReducer,
  updateTeamReducer,
  createTeamReducer,
  deleteTeamReducer
} from './reducers/teamReducers'

const reducer = combineReducers({
  user: userReducer,
  teamList: teamListReducer,
  createTeam: createTeamReducer,
  updateTeam: updateTeamReducer,
  deleteTeam: deleteTeamReducer
})

const userFromStorage = localStorage.getItem('user-researcher')
  ? { data: JSON.parse(localStorage.getItem('user-researcher')) }
  : { data: null }

const initialState = { user: userFromStorage }

const middlewares = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store

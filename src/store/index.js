import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducers'
import {
  teamsReducer,
  acceptedTeamsReducer,
  selectedTeamReducer
} from './reducers/teamReducers'

const reducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  acceptedTeams: acceptedTeamsReducer,
  selectedTeam: selectedTeamReducer
})

const userFromStorage = localStorage.getItem('user-researcher')
  ? { data: JSON.parse(localStorage.getItem('user-researcher')) }
  : { data: null }

const selectedTeamFromStorage = localStorage.getItem('selected-team') && ''

const initialState = {
  user: userFromStorage,
  selectedTeam: selectedTeamFromStorage
}

const middlewares = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store

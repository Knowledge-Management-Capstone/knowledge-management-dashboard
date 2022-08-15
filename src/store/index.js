import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducer } from './reducers/userReducers'
import {
  teamsReducer,
  acceptedTeamsReducer,
  selectedTeamIdReducer
} from './reducers/teamReducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'selectedTeamId']
}

const reducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  acceptedTeams: acceptedTeamsReducer,
  selectedTeamId: selectedTeamIdReducer
})

const userFromStorage = localStorage.getItem('user-researcher')
  ? { data: JSON.parse(localStorage.getItem('user-researcher')) }
  : { data: null }

const selectedTeamIdFromStorage = localStorage.getItem('selected-team-id') || ''

const initialState = {
  user: userFromStorage,
  selectedTeamId: selectedTeamIdFromStorage
}

const middlewares = [thunk]

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  redupersistedReducercer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

export default { store, persistor }

import {
  TEAM_PROPOSE_FAIL,
  TEAM_PROPOSE_REQUEST,
  TEAM_PROPOSE_SUCCESS
} from '../constants/teamConstants'

export const teamProposeReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_PROPOSE_REQUEST:
      return { loading: true }
    case TEAM_PROPOSE_SUCCESS:
      return { loading: false, team: action.payload }
    case TEAM_PROPOSE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

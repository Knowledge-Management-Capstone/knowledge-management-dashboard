import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants/userConstants'

const register =
  (fullName, email, userId, faculty, major, accountType, password) =>
  async dispatch => {
    dispatch({ type: USER_REGISTER_REQUEST })

    const { data } = await axios.post('/api/users', {
      fullName,
      email,
      userId,
      faculty,
      major,
      accountType,
      password
    })

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    try {
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

import axios from 'axios'
import MySwal from '../../utils/sweetalert.js'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants/userConstants.js'

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const { data } = await axios.post('/api/users/login', { email, password })

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
    MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message
    })
  }
}

export const register =
  (fullName, email, userId, faculty, major, accountType, password) =>
  async dispatch => {
    try {
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
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
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

export const logout = () => dispatch => {
  localStorage.removeItem('user')
  dispatch({ type: USER_LOGOUT })
}

import axios from "axios";

import { notification } from "~/utils/soundEffect";
import {
  LOADING_NOTIFICATION,
  FETCH_NOTIFICATION,
  UPDATE_NOTIFICATION,
  RESET_NOTIFICATION,
  ERROR_NOTIFICATION,
} from "../constants/notificationConstants";

export const fetchNotifications = (memberId, roomId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_NOTIFICATION });

    const { data } = await axios.get(
      `/api/notification/${roomId}/member/${memberId}`,
    );

    dispatch({ type: FETCH_NOTIFICATION, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR_NOTIFICATION,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateNotification = () => (dispatch) => {
  dispatch({ type: UPDATE_NOTIFICATION });
  notification.play();
};

export const resetNotification = (memberId, roomId) => async (dispatch) => {
  try {
    await axios.put(`/api/notification/${roomId}/member/${memberId}`);

    dispatch({ type: RESET_NOTIFICATION });
  } catch (error) {
    dispatch({
      type: ERROR_NOTIFICATION,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

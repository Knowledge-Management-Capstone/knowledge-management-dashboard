/* eslint-disable import/prefer-default-export, default-param-last */
import axios from "axios";
import {
  ERROR_CHAT_ROOM,
  FETCH_CHAT_LOG,
  LOADING_CHAT_LOG,
} from "../constants/chatConstants";

export const fetchChatLog = (roomId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_CHAT_LOG });

    const { data } = await axios.get(`/api/chat/${roomId}`);

    dispatch({ type: FETCH_CHAT_LOG, payload: { roomId, log: data } });
  } catch (error) {
    dispatch({
      type: ERROR_CHAT_ROOM,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

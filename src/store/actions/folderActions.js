import { folderApi } from "~/api";
import {
  CREATE_FOLDER,
  ERROR_FOLDER,
  LOADING_FOLDER,
} from "../constants/folderConstants";

// eslint-disable-next-line import/prefer-default-export
export const createFolder = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_FOLDER });

    const { data } = await folderApi.createFolder(payload);

    dispatch({ type: CREATE_FOLDER, payload: data });
  } catch (error) {
    dispatch({
      type: ERROR_FOLDER,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
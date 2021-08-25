import axios from 'axios';

import {
  RATING_POST_FAIL,
  RATING_POST_REQUEST,
  RATING_POST_SUCCESS,
} from '../constants/ratingConstants';

export const saveRating = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: RATING_POST_REQUEST });

    const {
      data: { message },
    } = await axios.post(
      `https://motor-tax.herokuapp.com/api/tax-record/rating/${bodyData.id}`,
      bodyData
    );
    dispatch({ type: RATING_POST_SUCCESS, payload: message });
  } catch (error) {
    dispatch({
      type: RATING_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

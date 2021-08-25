import {
  RATING_POST_FAIL,
  RATING_POST_REQUEST,
  RATING_POST_SUCCESS,
} from '../constants/ratingConstants';

export const savedRatingReducers = (state = { message: '' }, action) => {
  switch (action.type) {
    case RATING_POST_REQUEST:
      return { loading: true };
    case RATING_POST_SUCCESS:
      return { loading: false, message: action.payload };
    case RATING_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

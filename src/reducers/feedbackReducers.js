import {
  FEEDBACK_FETCH_FAIL,
  FEEDBACK_FETCH_REQUEST,
  FEEDBACK_FETCH_SUCCESS,
  FEEDBACK_POST_FAIL,
  FEEDBACK_POST_REQUEST,
  FEEDBACK_POST_SUCCESS,
} from '../constants/feedbackConstants';

export const savedFeedbackReducers = (state = { message: '' }, action) => {
  switch (action.type) {
    case FEEDBACK_POST_REQUEST:
      return { loading: true };
    case FEEDBACK_POST_SUCCESS:
      return { loading: false, message: action.payload };
    case FEEDBACK_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFeedbackReducers = (state = { feedback: [] }, action) => {
  switch (action.type) {
    case FEEDBACK_FETCH_REQUEST:
      return { loading: true };
    case FEEDBACK_FETCH_SUCCESS:
      return { loading: false, feedback: action.payload };
    case FEEDBACK_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

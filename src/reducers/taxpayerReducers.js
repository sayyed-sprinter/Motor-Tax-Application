import {
  TAXPAYER_FETCH_REQUEST,
  TAXPAYER_FETCH_SUCCESS,
  TAXPAYER_FETCH_FAIL,
  TAXPAYER_FETCH_RESET,
} from '../constants/taxpayerConstants';

export const taxpayerReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXPAYER_FETCH_REQUEST:
      return { loading: true };
    case TAXPAYER_FETCH_SUCCESS:
      return {
        loading: false,
        success: true,
        taxpayerinfo: action.payload,
      };
    case TAXPAYER_FETCH_FAIL:
      return { loading: false, error: action.payload, success: false };
    case TAXPAYER_FETCH_RESET:
      return { taxpayer: {}, success: false };
    default:
      return state;
  }
};

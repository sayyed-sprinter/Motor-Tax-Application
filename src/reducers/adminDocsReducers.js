import {
  ADMIN_DOCS_FETCH_FAIL,
  ADMIN_DOCS_FETCH_REQUEST,
  ADMIN_DOCS_FETCH_SUCCESS,
  ADMIN_DOCS_UPDATE_FAIL,
  ADMIN_DOCS_UPDATE_REQUEST,
  ADMIN_DOCS_UPDATE_SUCCESS,
} from '../constants/adminDocsConstants';

export const adminDocsReducer = (state = { adminDocs: [] }, action) => {
  switch (action.type) {
    case ADMIN_DOCS_FETCH_REQUEST:
      return { loading: true };
    case ADMIN_DOCS_FETCH_SUCCESS:
      return { loading: false, adminDocs: action.payload };
    case ADMIN_DOCS_FETCH_FAIL:
      return { loading: false, error: true };
    default:
      return state;
  }
};

export const adminUpdatesTaxpayerReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DOCS_UPDATE_REQUEST:
      return { loading: true };
    case ADMIN_DOCS_UPDATE_SUCCESS:
      return {
        loading: false,
        updatedData: action.payload.updatedTaxpayer,
        success: true,
        message: action.payload.message,
      };
    case ADMIN_DOCS_UPDATE_FAIL:
      return { loading: false };
    default:
      return state;
  }
};

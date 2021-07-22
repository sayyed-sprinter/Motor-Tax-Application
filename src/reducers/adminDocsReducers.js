import {
  ADMIN_DOCS_FETCH_FAIL,
  ADMIN_DOCS_FETCH_REQUEST,
  ADMIN_DOCS_FETCH_SUCCESS,
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

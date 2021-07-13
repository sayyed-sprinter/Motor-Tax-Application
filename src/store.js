import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taxpayerReducer } from './reducers/taxpayerReducers';
import { insuranceReducers } from './reducers/insuranceReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
  insurance: insuranceReducers,
});

// const taxpayerFromStorage = localStorage.getItem('taxpayerinfo')
//   ? JSON.parse(localStorage.getItem('taxpayerinfo'))
//   : {};

const initialState = {
  taxpayer: {
    taxpayerinfo: {
      bluebook_number: '...',
      vehicle_number: '...',
      engine_cc: '...',
      province: '...',
      lastTaxPaidOn: '...',
      taxAmount: 2,
      taxOverdue: '3',
      penaltyOnOverdue: 2,
      pollutingCharge: 0,
    },
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

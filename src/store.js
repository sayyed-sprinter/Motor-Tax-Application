import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taxpayerReducer } from './reducers/taxpayerReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
});

const initialState = {
  taxpayer: {
    bluebook_number: '1625649993115',
    vehicle_number: '1528',
    policy_number: '05454451515',
    engine_cc: '500',
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

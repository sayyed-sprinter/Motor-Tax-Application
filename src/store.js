import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taxpayerReducer } from './reducers/taxpayerReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
});

const taxpayerFromStorage = localStorage.getItem('taxpayerinfo')
  ? JSON.parse(localStorage.getItem('taxpayerinfo'))
  : {};

const initialState = {
  taxpayer: {
    taxpayerinfo: taxpayerFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

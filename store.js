import { createStore, combineReducers } from 'redux';

import HomePageReducer from './containers/HomePage/reducer';

const rootReducer = combineReducers({ HomePageReducer });

const store = createStore(rootReducer);

export default store;

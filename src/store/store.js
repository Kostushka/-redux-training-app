import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { cashReducer } from './reducer/cashReducer/cashReducer';
import { usersReducer } from './reducer/usersReducer/usersReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer,
});

export const store = createStore(rootReducer);

import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { cashReducer } from './reducer/cashReducer/cashReducer';
import { usersReducer } from './reducer/usersReducer/usersReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

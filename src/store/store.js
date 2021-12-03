import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootWatcher } from '../saga';
import { cashReducer } from './reducer/cashReducer/cashReducer';
import { usersReducer } from './reducer/usersReducer/usersReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

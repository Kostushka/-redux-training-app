import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
    getAllUserAction,
    GET_FETCH_USERS,
} from '../store/reducer/usersReducer/usersReducer';

const getUserData = () =>
    axios.get('https://jsonplaceholder.typicode.com/users');

function* getUsersWorker() {
    const res = yield call(getUserData);
    yield put(getAllUserAction(res.data));
}

export function* getUsersWatcher() {
    yield takeEvery(GET_FETCH_USERS, getUsersWorker);
}

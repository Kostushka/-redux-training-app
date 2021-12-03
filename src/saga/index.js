import { all } from '@redux-saga/core/effects';
import { getUsersWatcher } from './usersSaga';

export function* rootWatcher() {
    yield all([getUsersWatcher()]);
}

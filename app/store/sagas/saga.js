import {AGE_UP_SAGA, AGE_UP_ASYNC_SAGA} from '../actions/actions';

import {takeEvery, put, delay, takeLatest} from 'redux-saga/effects';

function* ageUpAsyncSaga() {
  yield delay(1000);
  // you dispatch an action with put
  yield put({type: AGE_UP_ASYNC_SAGA, value: 5});
}

// this is a generator function were for every time the AGE_UP_SAGA action is called, it runs
// another generator function
export function* watchAgeUp() {
  // yield takeEvery(AGE_UP_SAGA, ageUpAsyncSaga);
  yield takeLatest(AGE_UP_SAGA, ageUpAsyncSaga); // this helps the debounce capability for saga
}

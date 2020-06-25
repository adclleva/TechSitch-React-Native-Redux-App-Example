export const AGE_UP = 'AGE_UP';
export const AGE_DOWN = 'AGE_DOWN';
export const LOADING = 'LOADING';

export const AGE_UP_ASYNC_SAGA = 'AGE_UP_ASYNC_SAGA';
export const AGE_DOWN_ASYNC_SAGA = 'AGE_DOWN_ASYNC_SAGA';
export const AGE_UP_SAGA = 'AGE_UP_SAGA';
export const AGE_DOWN_SAGA = 'AGE_DOWN_SAGA';

// onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
// onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
// onDeleteItem: (id) => dispatch({type: 'DELETE_ITEM', key: id}),
// updateA: (b) => dispatch({type: 'UPDATE_A', value: b}),
// updateB: (a) => dispatch({type: 'UPDATE_B', value: a}),

// action creator
export const ageUpAsync = (val) => {
  return {type: AGE_UP, value: val};
};
export const loading = () => {
  return {
    type: LOADING,
  };
};
// when doing async, this is the pattern that you follow
export const ageUp = (val) => (dispatch) => {
  dispatch(loading()); // this is synchronous
  setTimeout(() => {
    // we can also change what's inside
    val++;

    // this is asynchronous
    dispatch(ageUpAsync(val));
  }, 3000);
};

export const ageDown = (val) => {
  return {type: AGE_DOWN, value: val};
};

export const ageUpAsyncSaga = (val) => {
  return {type: AGE_UP_SAGA, value: val};
};

export const ageDownAsyncSaga = (val) => {
  return {type: AGE_DOWN_ASYNC_SAGA, value: val};
};

// ! this video helps with middleware https://www.youtube.com/watch?v=z2XCUu2wIl0

import {
  LOADING,
  AGE_UP_ASYNC_SAGA,
  AGE_DOWN_ASYNC_SAGA,
} from '../actions/actions';

const initialState = {
  age: 21,
  history: [],
};

const reducerSaga = (state = initialState, action) => {
  switch (action.type) {
    case AGE_UP_ASYNC_SAGA:
      return {
        ...state,
        age: state.age + action.value,
        // concat returns a new array
        history: state.history.concat({
          id: Math.random(),
          value: state.age + action.value,
        }),
        loading: false,
      };
    case AGE_DOWN_ASYNC_SAGA:
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          value: state.age - action.value,
        }),
      };
    default:
      return state;
  }
};

export default reducerSaga;

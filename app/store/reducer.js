const initialState = {
  age: 21,
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: state.age + action.value,
        // concat returns a new array
        history: state.history.concat({
          id: Math.random(),
          value: state.age + action.value,
        }),
      };
    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          value: state.age - action.value,
        }),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        history: state.history.filter((item) => item.id !== action.key),
      };
    default:
      return state;
  }
};

export default reducer;

const initialState = {
  age: 21,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGE_UP':
      return {
        ...state,
        age: ++state.age,
      };
    case 'AGE_DOWN':
      return {
        ...state,
        age: --state.age,
      };
    default:
      return state;
  }
};

export default reducer;

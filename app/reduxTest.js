const {createStore} = require('redux'); // this is the old way of getting files

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if (action.type === 'ADD') {
    newState.age += action.val;
  }

  if (action.type === 'SUBTRACT') {
    newState.age -= action.val;
  }

  return newState;
};

//
const store = createStore(myReducer);

// this will automatically run whenever there's a change within the state
store.subscribe(() => {
  console.log('state Changed', JSON.stringify(store.getState()));
});

//actions are commands to the reducers
// console.log('initial state', JSON.stringify(store.getState()));
store.dispatch({type: 'ADD', val: 10}); // 22
// console.log('after add', store.getState());
store.dispatch({type: 'SUBTRACT', val: 10}); // 21
// console.log('after subtract', store.getState());
store.dispatch({type: 'SUBTRACT', val: 10}); // 20
// console.log('after subtract', store.getState());

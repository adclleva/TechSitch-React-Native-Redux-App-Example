export const AGE_UP = 'AGE_UP';
export const AGE_DOWN = 'AGE_DOWN';
// onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
// onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
// onDeleteItem: (id) => dispatch({type: 'DELETE_ITEM', key: id}),
// updateA: (b) => dispatch({type: 'UPDATE_A', value: b}),
// updateB: (a) => dispatch({type: 'UPDATE_B', value: a}),

// action creator
export const ageUp = (val) => {
  return {type: AGE_UP, value: val};
};

export const ageDown = (val) => {
  return {type: AGE_DOWN, value: val};
};

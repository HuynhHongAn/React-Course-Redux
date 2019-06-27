const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}.action);
      newState.counter = state.counter + 1;
      return newState;
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.amount
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.amount
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
  }

  return state;
}

export default reducer;

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}, state);
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
    case 'DELETE_RESULT':
      //1)
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      //2)
      const updatedArray = state.results.filter(result => {
        return result.id !== action.id;
      })
      return {
        ...state,
        results: updatedArray
      }
  }

  return state;
}

export default reducer;

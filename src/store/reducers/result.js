import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.counter})
      }
    case actionTypes.DELETE_RESULT:
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

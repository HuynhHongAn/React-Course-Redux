export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return { //this is an action object!
    type: INCREMENT
  }
}

export const decrement = () => {
  return { //this is an action object!
    type: DECREMENT
  }
}

export const add = (amount) => {
  return {
    type: ADD,
    amount: amount
  }
}

export const subtract = (amount) => {
  return {
    type: SUBTRACT,
    amount: amount
  }
}

export const storeResult = (counter) => {
  return {
    type: STORE_RESULT,
    counter: counter
  }
}

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    id: id
  }
}
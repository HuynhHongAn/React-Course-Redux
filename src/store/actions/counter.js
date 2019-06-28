import * as actionTypes from './actionTypes'

export const increment = () => {
  return { //this is an action object!
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return { //this is an action object!
    type: actionTypes.DECREMENT
  }
}

export const add = (amount) => {
  return {
    type: actionTypes.ADD,
    amount: amount
  }
}

export const subtract = (amount) => {
  return {
    type: actionTypes.SUBTRACT,
    amount: amount
  }
}
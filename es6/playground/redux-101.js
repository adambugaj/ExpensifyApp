import react from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Example
const add = ({a,b}) => {
  return a + b;
}
console.log(add({a:1, b:3}));

// By setting default option we rid off the long statement
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  // incrementBy: typeof playload.incrementBy === 'number' ? playload.incremenntBy : 1
  incrementBy
});
// Action Generator -> 90 Udemy
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
// Action Generator -> 90 Udemy
const setCount = ({count = 0} = {}) => ({
  type: 'SET',
  count
});
// Action Generator -> 90 Udemy
const resetCount = () => ({
  type: 'RESET'
});

// Reducers

const countReducer = (state = { count:0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
    console.log(action.decrementBy);
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);


const stop = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount())

store.dispatch({
  type: 'RESET'
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

// 1. Store creation - stores functions
export default () => {

const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  );

  return store;
};

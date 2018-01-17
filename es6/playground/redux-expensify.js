import { createStore, combineReducers } from 'redux';


const expansesReducerDefaultState = [];

// Expanses Reducers
const expensesReducer = (state = expansesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'items',
    description: 'January Incomes',
    note: 'This is nice',
    amount: 20000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

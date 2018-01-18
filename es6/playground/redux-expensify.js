import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// Expanses Reducers - function which store stores
const expansesReducerDefaultState = [];
const expensesReducer = (state = expansesReducerDefaultState, action) => {
  console.log(action.expense);
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    default:
      return state;
  }
};

// Filter Reducer default
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
// Filter Reducer - function which store stores
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Remove Reducer
const removeExpense = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};




// Store creation - stores functions
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
    remove: removeExpense
  })
);

// monitor the changes made by store (up above)
store.subscribe(() => {
  console.log(store.getState());
});

// Send any new data to combineReducers (expenses and filters) in store
const expenseOne = store.dispatch(addExpense(
  {
    description: 'Income in January',
    amount: 10000
  }
));
const expenseTwo = store.dispatch(addExpense({ description: 'Rent for the apartment', amount: 1000 }));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }))

const getIt = store.getState();
console.log(expenseTwo);

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

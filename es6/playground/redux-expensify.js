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

// Expanses Reducer - function which store stores
// ACTION - is updates, changes, the new data sent by a user
// STATE - is static, previous, saved, existed data that we read from
const expansesReducerDefaultState = [];
const expensesReducer = (state = expansesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'EDIT_EXPANSE':
      return state.map((expense) => {
        console.log('STATE: ', state);
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
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
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
    console.log(state);
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state;
  }
};

// Action Generator - REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Action Generator - EDIT_EXPANSE
const editExpanse = (id, updates) => ({
  type: 'EDIT_EXPANSE',
  id,
  updates
});

// Action Generator - SET_TEXT - set new text
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text
})

// Action Generator - SORT_BY_AMOUNT
const sortByAmount = () => ({
 type: 'SORT_BY_AMOUNT'

})

// AG - SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// AG - sort by start date
const setStartDate = (date = '') => ({
  type: 'SET_START_DATE',
  date
});

// AG - sort by end date
const setEndDate = (date = '') => ({
  type: 'SET_END_DATE',
  date
});

// 1. Store creation - stores functions
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
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
// const expenseTwo = store.dispatch(addExpense({ description: 'Rent for the apartment', amount: 1000 }));
//
// // send info about removing the sepcific object with exact id
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
//
// store.dispatch(editExpanse(expenseOne.expense.id, { amount: 500 }));
// store.dispatch(editExpanse(expenseOne.expense.id, { note: 'this was actually from the previous month'}))
//
// // Setting text for filtering
// store.dispatch(setTextFilter('Income in January'));
// store.dispatch(setTextFilter());
//
// console.log(expenseOne);
// // Sorting data
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();


// Place it onto the screen
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// const expenseThree = store.dispatch(addExpense({
//   description: 'Incme for the work nt1',
//   amount: 1300,
//   createdAt: -200011
// }));

const waterBill = store.dispatch(addExpense({
  description: 'Payment for a water bill',
  note: 'ASAP',
  amount: 200,
  createdAt: '22.01.2018'
}));

const gasBill = store.dispatch(addExpense({
  description: 'Payment for a gas bill',
  note: 'soon',
  amount: 100,
  createdAt: '21.01.2018'
}));

store.dispatch(setTextFilter('bill'));



// Check if correct
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


ReactDOM.render(<AppRouter />, document.getElementById('app'));

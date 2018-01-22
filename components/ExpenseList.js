import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.js';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id}{...expense} />
      })}
      <ExpenseListItem />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}



const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;

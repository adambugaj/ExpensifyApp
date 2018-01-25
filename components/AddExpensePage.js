import React from 'react';
import { connect } from 'react-redux';
import FormExpense from './FormExpense';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <FormExpense
      // Parameter (expense) must have been changed to save the next review
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

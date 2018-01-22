import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '.././actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => {
  console.log({description});
  return (
    <div>
      <h1>{description}</h1>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => {dispatch(removeExpense({id}))}}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect()(ExpenseListItem);

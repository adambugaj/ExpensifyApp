import React from 'react';
import { Link } from 'react-router-dom';

// we don't need dispatch as parameter, because we dont send info about removing a review from the home page
const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
      </Link>
      <p>Amount: {amount} Date: {createdAt}</p>
      <button><Link to={`/edit/${id}`}>Edit</Link></button>
    </div>
  )
}

export default ExpenseListItem;

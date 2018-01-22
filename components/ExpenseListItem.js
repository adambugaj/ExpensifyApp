import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => {
  console.log(description);
  return (
    <div>
      <h1>{description}</h1>
      <p>{amount} - {createdAt}</p>
    </div>
  )
}

export default ExpenseListItem;

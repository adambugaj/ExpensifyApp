import uuid from 'uuid';
// ADD_EXPENSE
export const addExpense = (
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

// Action Generator - REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Action Generator - EDIT_EXPENSE
export const editExpanse = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

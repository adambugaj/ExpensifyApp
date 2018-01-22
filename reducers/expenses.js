

// Expanses Reducer - function which store stores
// ACTION - is updates, changes, the new data sent by a user
// STATE - is static, previous, saved, existed data that we read from
const expansesReducerDefaultState = [];

// The other option for exporting variable
// export default (state = expansesReducerDefaultState, action) =>
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
    case 'EDIT_EXPENSE':
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

export default expensesReducer;

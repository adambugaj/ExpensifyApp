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

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };

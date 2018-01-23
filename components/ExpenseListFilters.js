import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={props.filters.text}
        onChange={(e) => {
        console.log(e.target.value);
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          console.log(e.target.value === 'date');
          e.target.value === 'date' ? props.dispatch(sortByDate(e.target.value)) : props.dispatch(sortByAmount(e.target.value))
        }}
      >
        <option value="date" >Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);

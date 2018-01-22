import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input type="text" defaultValue={props.filters.text} onChange={(e) => {
        console.log(e.target.value);
        props.dispatch(setTextFilter(e.target.value))
      }} />
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

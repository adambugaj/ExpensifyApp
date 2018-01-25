import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarValue) => {
    this.setState(() => ({ calendarFocused: calendarValue}));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={(e) => {
          console.log(e.target.value);
          this.props.dispatch(setTextFilter(e.target.value));
        }}
      />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            console.log(e.target.value === 'date');
            e.target.value === 'date' ? this.props.dispatch(sortByDate(e.target.value)) : this.props.dispatch(sortByAmount(e.target.value))
          }}
        >
          <option value="date" >Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={()=>false}
        />
      </div>
    );
  }
}

/* example of functional component - the difference
const ExpenseListFilters = (props) => {
  return (
    <div>
      <input
        type="text"
        // we use props without this.props.. in functional component
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
*/


const mapStateToProps = (state) => {
  console.log(state);
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);

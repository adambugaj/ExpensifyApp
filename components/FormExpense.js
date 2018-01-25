import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do YYYY, dddd - HH:mm'));

export default class FormExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const getValue = e.target.value;
    this.setState(() => ({
      description: getValue
    }));
  };

  onNoteChange = (e) => {
    const getValue = e.target.value; // or use event.persist() and set state without any string, just with e.target.value

    this.setState(() => ({
      note: getValue
    }));
  };

  onAmountChange = (e) => {
    const getVal = e.target.value;
    console.log(typeof getVal);
    // make it fixed
    if (getVal.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: getVal }));
    };


// My idea for solving it
    // if (getVal % 1 !== 0) {
    //   let getVal = Number(e.target.value).toFixed(2);
    //   this.setState(() => ({
    //       amount: getVal
    //     }));
    // } else {
    //   this.setState(() => ({
    //     amount: getVal
    //   }));
    // }
  };

// Calendar setup functions
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  onSubmit = (e) => {
    e.preventDefault();
    // if a description or amount is empty, show a message
    if (!this.state.description && !this.state.amount) {
      this.setState(() => ({ error: 'You didn\'t type a description and an amount'}));
    }
      // Description - if empty show a message
    else if (!this.state.description) {
      this.setState(() => ({ error: 'You didn\'t type a description '}));
    }
      // Amount - if empty show a message
    else if (!this.state.amount) {
      this.setState(() => ({ error: 'You didn\'t type an amount'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };



  render() {
    return (
      <div>
        <h2>Expense Form</h2>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text" // Changed from number to text to prevent from typing more than 2 decimal numbers
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add short note"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
        <p>{this.state.amount}</p>
      </div>
    )
  }
}

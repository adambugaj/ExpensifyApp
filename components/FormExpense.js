import React from 'react';

export default class Expense extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

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

    // make it fixed
    if (getVal.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: getVal }));
    }


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

  render() {
    return (
      <div>
        <h2>Expense Form</h2>
          <form>
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

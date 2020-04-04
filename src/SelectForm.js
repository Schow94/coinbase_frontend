import React, { Component } from 'react';
import './SelectForm.css';

export default class SelectForm extends Component {
  render() {
    const { selectCurrency, currency } = this.props;
    return (
      <div className="select-form">
        <input
          type="radio"
          id="bitcoin"
          name="currency"
          value="bitcoin"
          onChange={selectCurrency}
          checked={currency === 'bitcoin'}
        />
        <label htmlFor="male">Bitcoin</label>
        <input
          type="radio"
          id="bitcoin-cash"
          name="currency"
          value="bitcoin-cash"
          onChange={selectCurrency}
          checked={currency === 'bitcoin-cash'}
        />
        <label htmlFor="male">Bitcoin Cash</label>
        <input
          type="radio"
          id="ethereum"
          name="currency"
          value="ethereum"
          onChange={selectCurrency}
          checked={currency === 'ethereum'}
        />
        <label htmlFor="male">Ethereum</label>
      </div>
    );
  }
}

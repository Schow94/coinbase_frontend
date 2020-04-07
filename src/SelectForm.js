import React, { Component } from 'react';
import './styles/SelectForm.css';

export default class SelectForm extends Component {
  handleChange = (e) => {
    this.props.selectCurrency(e.target.value);
  };

  render() {
    const { graphSelected } = this.props;
    return (
      <div className="crypto-select">
        <label htmlFor="crypto-select">Choose a currency:</label>
        <select
          className="select"
          id="crypto-select"
          value={graphSelected}
          onChange={(e) => this.handleChange(e)}
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="litecoin">Litecoin</option>
          <option value="ethereum">Ethereum</option>
        </select>
      </div>
    );
  }
}

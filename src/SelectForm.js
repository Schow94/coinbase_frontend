import React, { Component } from 'react';
import './styles/SelectForm.css';

// export default class SelectForm extends Component {
//   render() {
//     const { selectCurrency, currency } = this.props;
//     return (
//       <div className="select-form">
//         <input
//           type="radio"
//           id="bitcoin"
//           name="currency"
//           value="bitcoin"
//           onChange={selectCurrency}
//           checked={currency === 'bitcoin'}
//         />
//         <label htmlFor="male">Bitcoin</label>
//         <input
//           type="radio"
//           id="litecoin"
//           name="currency"
//           value="litecoin"
//           onChange={selectCurrency}
//           checked={currency === 'litecoin'}
//         />
//         <label htmlFor="male">Litecoin</label>
//         <input
//           type="radio"
//           id="ethereum"
//           name="currency"
//           value="ethereum"
//           onChange={selectCurrency}
//           checked={currency === 'ethereum'}
//         />
//         <label htmlFor="male">Ethereum</label>
//       </div>
//     );
//   }
// }

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

import React, { Component } from 'react';
import Table from './Table';
import './BitPriceApp.css';

import axios from 'axios';

const API_URL = 'https://btcapihistoricrates.herokuapp.com/crypto/getData';
// const API_URL = 'localhost:5000/crypto/getData';
export default class BtcPriceApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    //This code is erroneous
    const results = await axios.get(API_URL);

    this.setState({
      data: results.data.data,
    });

    // console.log(this.state.data);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Bitcoin Historical Rates</h1>
        <Table btcData={this.state.data} />
      </div>
    );
  }
}

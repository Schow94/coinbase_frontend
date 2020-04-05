import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

import Table from './Table';
import SelectForm from './SelectForm';
import Graph1 from './Graph1';
import ItemToShowOnGraph from './ItemToShowOnGraph';
import './BitPriceApp.css';

import axios from 'axios';

const API_URL = 'https://btcapihistoricrates.herokuapp.com/crypto';
// const API_URL = 'localhost:5000/crypto/getData';
export default class BtcPriceApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currency: 'bitcoin',
      dataForGraph: [],
      graphSelected: 'close',
    };

    //Binding API call fxns
    // this.processData = this.processData.bind(this);
    this.sortByTimeDesc = this.sortByTimeDesc.bind(this);
    this.sortByTimeAsc = this.sortByTimeAsc.bind(this);
    this.sortByHighDesc = this.sortByHighDesc.bind(this);
    this.sortByHighAsc = this.sortByHighAsc.bind(this);
    this.sortByLowDesc = this.sortByLowDesc.bind(this);
    this.sortByLowAsc = this.sortByLowAsc.bind(this);
    this.sortByOpenDesc = this.sortByOpenDesc.bind(this);
    this.sortByOpenAsc = this.sortByOpenAsc.bind(this);
    this.sortByCloseDesc = this.sortByCloseDesc.bind(this);
    this.sortByCloseAsc = this.sortByCloseAsc.bind(this);
    this.sortByVolumeDesc = this.sortByVolumeDesc.bind(this);
    this.sortByVolumeAsc = this.sortByVolumeAsc.bind(this);
  }

  //----------------------------- SORTING METHODS --------------------
  // TIME
  sortByTimeDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByTimeDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByTimeAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByTimeAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  // HIGH
  sortByHighDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByHighDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByHighAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByHighAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  // LOW
  sortByLowDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByLowDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByLowAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByLowAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  // OPEN
  sortByOpenDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByOpenDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByOpenAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByOpenAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  // CLOSE
  sortByCloseDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByCloseDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByCloseAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByCloseAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  // VOLUME
  sortByVolumeDesc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByVolumeDesc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  sortByVolumeAsc = async () => {
    const results = await axios.get(
      `${API_URL}/${this.state.currency}/sortByVolumeAsc`
    );

    this.setState({
      data: results.data.data,
    });
  };

  componentDidMount() {
    console.log('Component Did Mount');
    this.sortByTimeDesc();
  }

  componentDidUpdate() {
    console.log('Component did update');
    //Function calls repeatedly
  }

  selectCurrency = (e) => {
    this.setState(
      {
        currency: e.target.value,
      },
      () => this.sortByTimeDesc()
    );
  };

  onGraphChange = (selectVal) => {
    this.setState({
      graphSelected: selectVal,
    });
  };

  render() {
    // console.log(this.state.bitcoin);

    //Headers of CSV
    const headers = [
      { label: 'Time', key: 'time' },
      { label: 'High', key: 'high' },
      { label: 'Low', key: 'low' },
      { label: 'Open', key: 'open' },
      { label: 'Close', key: 'close' },
      { label: 'Volume', key: 'volume' },
    ];

    return (
      <div className="container">
        <h1 className="title">{this.state.currency} Historical Rates</h1>
        <SelectForm
          currency={this.state.currency}
          selectCurrency={this.selectCurrency}
        />
        <CSVLink
          data={this.state.data}
          headers={headers}
          filename={`${this.state.currency}${new Date()
            .toDateString()
            .slice(3, 15)
            .split(' ')
            .join('_')}.csv`}
        >
          <button className="csv-btn">Download CSV</button>
        </CSVLink>
        <ItemToShowOnGraph
          graphSelected={this.state.graphSelected}
          onGraphChange={this.onGraphChange}
        />
        <Graph1
          graphData={this.state.data}
          graphSelected={this.state.graphSelected}
        />
        <Table
          btcData={this.state.data}
          sortByTimeDesc={this.sortByTimeDesc}
          sortByTimeAsc={this.sortByTimeAsc}
          sortByHighDesc={this.sortByHighDesc}
          sortByHighAsc={this.sortByHighAsc}
          sortByLowDesc={this.sortByLowDesc}
          sortByLowAsc={this.sortByLowAsc}
          sortByOpenDesc={this.sortByOpenDesc}
          sortByOpenAsc={this.sortByOpenAsc}
          sortByCloseDesc={this.sortByCloseDesc}
          sortByCloseAsc={this.sortByCloseAsc}
          sortByVolumeDesc={this.sortByVolumeDesc}
          sortByVolumeAsc={this.sortByVolumeAsc}
        />
      </div>
    );
  }
}

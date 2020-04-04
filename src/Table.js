import React, { Component } from 'react';
import Day from './Day';
import './Table.css';

export default class Table extends Component {
  render(props) {
    const { btcData } = this.props;
    // console.log(this.props.btcData);
    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Day</th>
            <th>Low</th>
            <th>Open</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {btcData.map((day) => {
            return <Day day={day} key={day.id} />;
          })}
        </tbody>
      </table>
    );
  }
}

import React, { Component } from 'react';
import './Day.css';

export default class Table extends Component {
  render() {
    const { day } = this.props;
    return (
      <div>
        <ul className="one-day">
          <li>
            <b>Time </b>: {day.time}
          </li>
          <li>
            <b>Day: </b> {day.high}
          </li>
          <li>
            <b>Low: </b> {day.low}
          </li>
          <li>
            <b>Open: </b>
            {day.open}
          </li>
          <li>
            <b>Close:</b> {day.close}
          </li>
          <li>
            <b>Volume: </b> {day.volume}
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

import React, { Component } from 'react';
import './styles/Day.css';

export default class Table extends Component {
  render() {
    const { day } = this.props;

    const unixTime = day.time;
    var dateObj = new Date(unixTime * 1000);
    var dateStr = dateObj.toString().slice(3, 15);
    // var hours = date.getHours();
    // var minutes = '0' + date.getMinutes;
    // var seconds = '0' + date.getSeconds();
    // var formattedTime =
    //   hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(date);
    return (
      //Inline style overrides the hover effect
      <tr className={day.id % 2 === 0 ? 'evenRow' : 'oddRow'}>
        <td>{dateStr}</td>
        <td>{day.high}</td>
        <td>{day.low}</td>
        <td>{day.open}</td>
        <td>{day.close}</td>
        <td>{day.volume}</td>
      </tr>
    );
  }
}

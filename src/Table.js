import React, { Component } from 'react';
import Day from './Day';

export default class Table extends Component {
  render(props) {
    const { btcData } = this.props;
    // console.log(this.props.btcData);
    return (
      <div>
        {btcData.map((day) => {
          return <Day day={day} key={day.id} />;
        })}
      </div>
    );
  }
}

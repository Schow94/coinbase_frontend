import React, { Component } from 'react';

export default class ItemToShowOnGraph extends Component {
  handleChange = (e) => {
    this.props.onGraphChange(e.target.value);
  };

  render() {
    const { graphSelected } = this.props;
    return (
      <div>
        <label htmlFor="graphParam">Graph Parameter:</label>
        <select
          id="graphParam"
          value={graphSelected}
          onChange={(e) => this.handleChange(e)}
        >
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="open">Open</option>
          <option value="close">Close</option>
          <option value="volume">Volume</option>
        </select>
      </div>
    );
  }
}

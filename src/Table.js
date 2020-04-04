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
            <th>
              <div className="table-header">
                Time
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                High
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Low
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Open
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Close
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Volume
                <span className="chevrons">
                  <button id="rating-up">
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
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

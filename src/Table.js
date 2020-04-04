import React, { Component } from 'react';
import Day from './Day';
import './Table.css';

export default class Table extends Component {
  render(props) {
    const {
      btcData,
      sortByTimeDesc,
      sortByTimeAsc,
      sortByHighDesc,
      sortByHighAsc,
      sortByLowDesc,
      sortByLowAsc,
      sortByOpenDesc,
      sortByOpenAsc,
      sortByCloseDesc,
      sortByCloseAsc,
      sortByVolumeDesc,
      sortByVolumeAsc,
    } = this.props;
    // console.log(this.props.btcData);
    return (
      <table>
        <thead>
          <tr>
            <th>
              <div className="table-header">
                Time
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByTimeDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByTimeAsc}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                High
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByHighDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByHighAsc}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Low
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByLowDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByLowAsc}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Open
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByOpenDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByOpenAsc}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Close
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByCloseDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByCloseAsc}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                </span>
              </div>
            </th>
            <th>
              <div className="table-header">
                Volume
                <span className="chevrons">
                  <button id="rating-up" onClick={sortByVolumeDesc}>
                    <i className="fa fa-chevron-up"></i>
                  </button>
                  <button id="rating-down" onClick={sortByVolumeAsc}>
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

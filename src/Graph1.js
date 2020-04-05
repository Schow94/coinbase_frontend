import React, { Component } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
  Label,
} from 'recharts';

import './Graph1.css';

export default class Graph1 extends Component {
  render() {
    const { graphData, graphSelected } = this.props;

    let yAxisDomain;
    let highest;
    const setYAxisDomain = () => {
      if (graphSelected === 'high') {
        return (
          <YAxis dataKey="high" domain={[0, Math.ceil(high * 1.1)]}>
            <Label
              value="high"
              offset={1}
              position="left"
              angle={-90}
              dx={-10}
            />
          </YAxis>
        );
      } else if (graphSelected === 'low') {
        return (
          <YAxis dataKey="low" domain={[0, Math.ceil(low * 1.1)]}>
            <Label
              value="low"
              offset={1}
              position="left"
              angle={-90}
              dx={-10}
            />
          </YAxis>
        );
      } else if (graphSelected === 'open') {
        return (
          <YAxis dataKey="open" domain={[0, Math.ceil(open * 1.1)]}>
            <Label
              value="open"
              offset={1}
              position="left"
              angle={-90}
              dx={-10}
            />
          </YAxis>
        );
      } else if (graphSelected === 'close') {
        return (
          <YAxis dataKey="close" domain={[0, Math.ceil(close * 1.1)]}>
            <Label
              value="close"
              offset={1}
              position="left"
              angle={-90}
              dx={-10}
            />
          </YAxis>
        );
      } else if (graphSelected === 'volume') {
        return (
          <YAxis dataKey="volume" domain={[0, Math.ceil(volume) * 1.1]}>
            <Label
              value="volume"
              offset={1}
              position="left"
              angle={-90}
              dx={-10}
            />
          </YAxis>
        );
      }
    };

    var high = (function () {
      let max = 0;
      for (let i = 0; i < graphData.length; i++) {
        if (graphData[i]['high'] > max) {
          max = parseFloat(graphData[i]['high']);
        }
      }
      return max;
    })();

    var low = (function () {
      let max = 0;
      for (let i = 0; i < graphData.length; i++) {
        if (graphData[i]['low'] > max) {
          max = parseFloat(graphData[i]['low']);
        }
      }
      return max;
    })();

    var open = (function () {
      let max = 0;
      for (let i = 0; i < graphData.length; i++) {
        if (graphData[i]['open'] > max) {
          max = parseFloat(graphData[i]['open']);
        }
      }
      return max;
    })();

    var close = (function () {
      let max = 0;
      for (let i = 0; i < graphData.length; i++) {
        if (graphData[i]['close'] > max) {
          max = parseFloat(graphData[i]['close']);
        }
      }
      return max;
    })();

    var volume = (function () {
      let max = 0;
      for (let i = 0; i < graphData.length; i++) {
        if (parseFloat(graphData[i]['volume']) > max) {
          max = parseFloat(graphData[i]['volume']);
        }
      }
      return max;
    })();

    setYAxisDomain();

    return (
      <ResponsiveContainer className="graph-container" width="80%" height={400}>
        <LineChart
          data={graphData}
          margin={{ top: 20, right: 10, left: 20, bottom: 40 }}
        >
          >
          <XAxis dataKey="graphDate" interval={20}>
            <Label
              value="month-year"
              offset={1}
              position="insideBottom"
              dy={20}
            />
          </XAxis>
          {setYAxisDomain()}
          {/* <Legend /> */}
          <Tooltip />
          {/* <CartesianGrid stroke="#ccc" /> */}
          <Line
            type="monotone"
            dataKey={graphSelected}
            stroke="#3285fa"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

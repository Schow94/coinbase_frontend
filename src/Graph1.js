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
} from 'recharts';

import './Graph1.css';

export default class Graph1 extends Component {
  render() {
    const { graphData, graphSelected } = this.props;

    let yAxisDomain;
    let highest;
    const setYAxisDomain = () => {
      if (graphSelected === 'high') {
        return <YAxis dataKey="high" domain={[0, Math.ceil(high * 1.1)]} />;
      } else if (graphSelected === 'low') {
        return <YAxis dataKey="low" domain={[0, Math.ceil(low * 1.1)]} />;
      } else if (graphSelected === 'open') {
        return <YAxis dataKey="open" domain={[0, Math.ceil(open * 1.1)]} />;
      } else if (graphSelected === 'close') {
        return <YAxis dataKey="close" domain={[0, Math.ceil(close * 1.1)]} />;
      } else if (graphSelected === 'volume') {
        return <YAxis dataKey="volume" domain={[0, Math.ceil(volume) * 1.1]} />;
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
        <LineChart data={graphData}>
          <XAxis />
          {setYAxisDomain()}
          <Legend />
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

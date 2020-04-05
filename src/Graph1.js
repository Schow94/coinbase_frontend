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
    const { graphData, currency } = this.props;

    //Sort of Dynamically set yAxis so graph changes with max data points
    let yAxisDomain = 0;
    const setYAxisDomain = () => {
      if (currency === 'bitcoin') {
        yAxisDomain = 15000;
      } else if (currency === 'litecoin') {
        yAxisDomain = 180;
      } else if (currency === 'ethereum') {
        yAxisDomain = 400;
      }
      console.log('DOMAIN: ', yAxisDomain);
    };
    setYAxisDomain();

    return (
      <ResponsiveContainer className="graph-container" width="80%" height={400}>
        <LineChart
          data={graphData}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis />
          {/* Add some code to dynamically render height */}
          <YAxis dataKey="close" domain={[0, yAxisDomain]} />
          <Legend />
          <Tooltip />
          {/* <CartesianGrid stroke="#ccc" /> */}
          {/* <Line
            type="monotone"
            dataKey="high"
            stroke="red"
            activeDot={{ r: 5 }}
          /> */}
          {/* <Line
            type="monotone"
            dataKey="open"
            stroke="blue"
            activeDot={{ r: 5 }}
          /> */}
          {/* <Line
            type="monotone"
            dataKey="low"
            stroke="green"
            activeDot={{ r: 5 }}
          /> */}
          {/* <Line
            type="monotone"
            dataKey="volume"
            stroke="black"
            activeDot={{ r: 5 }}
          /> */}

          <Line
            type="monotone"
            dataKey="close"
            stroke="#3285fa"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

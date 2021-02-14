import React from "react";
import { Typography } from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Sunday",
    connections: 6000,
  },
  {
    name: "Monday",
    connections: 8000,
  },
  {
    name: "Theusday",
    connections: 4000,
  },
  {
    name: "Wednesday",
    connections: 2356,
  },
  {
    name: "Thursday",
    connections: 3023,
  },

  {
    name: "Friday",
    connections: 4000,
  },
  {
    name: "Satureday",
    connections: 4000,
  },
];
function totalConnectinos(l) {
  var total = 0;
  for (let i = 0; i < l.length; i++) {
    total = total + l[i].connections;
  }
  return total;
}

const ConnectionsChart = () => {
  return (
    <>
      <Typography variant="h4">Connections this week</Typography>
      <Typography>Total: {totalConnectinos(data)}</Typography>
      <LineChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="connections" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default ConnectionsChart;

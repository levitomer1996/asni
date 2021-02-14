import { Typography } from "@material-ui/core";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Smoke / Alcohol", value: 7432 },
  { name: "Snacks", value: 3225 },
  { name: "Soda", value: 4323 },
  { name: "Packages", value: 9035 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
function totalSales(l) {
  var total = 0;
  for (let i = 0; i < l.length; i++) {
    total = total + l[i].value;
  }
  return total;
}
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SalesChart = () => {
  const renderColorDivs = (p, c) => {
    var renderList = [];
    for (let i = 0; i < p.length; i++) {
      renderList.push(
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: c[i], width: 40, height: 40 }}></div>
          <Typography>{p[i].name} - </Typography>
          <Typography>{p[i].value}₪</Typography>
        </div>
      );
    }
    return renderList;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">Sales this week</Typography>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {renderColorDivs(data, COLORS)}
          <Typography>Total:{totalSales(data)}₪</Typography>
        </div>
      </div>
    </div>
  );
};
export default SalesChart;

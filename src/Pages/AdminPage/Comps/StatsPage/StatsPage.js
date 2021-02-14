import React from "react";
import ConnectionCharts from "./Comps/ConnectionCharts";
import SalesCharts from "./Comps/SalesCharts";
const StatsPage = () => {
  return (
    <div>
      <ConnectionCharts />
      <SalesCharts />
    </div>
  );
};

export default StatsPage;

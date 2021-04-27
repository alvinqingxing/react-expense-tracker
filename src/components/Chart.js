import React from "react";
import Bar from "./Bar";
import "./css/Chart.css";

const Chart = (props) => {
  const chartValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const chartMax = Math.max(...chartValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={chartMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

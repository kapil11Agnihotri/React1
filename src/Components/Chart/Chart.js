import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datapointsValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapointsValues);

  return (
    <div className="chart">
      {props.datapoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          maxValue={totalMaximum}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;

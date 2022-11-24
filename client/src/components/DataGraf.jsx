import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import "chart.js/auto";

Chart.register(StreamingPlugin);
Chart.defaults.font.size = 14;

const DataGraf = (props) => {
  const { keyName, dataGraf } = props;
  const grafRef = React.useRef();
  return (
    <Fragment>
      <h2 className="text-center">{keyName}</h2>
      <Line ref={grafRef} data={dataGraf} />
    </Fragment>
  );
};

export default DataGraf;

import { Chart } from "react-google-charts";
import Shake from "react-reveal/Shake";

import {} from "../assets/css/analytics.css";
import RubberBand from "react-reveal/RubberBand";
import BarChart from "../components/barchart/BarChart";

export const data = [
  ["Country", "Ventas"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 500],
  ["ARGENTINA", 250],
  ["AUSTRALIA", 600],
  ["NIGERIA", 700],
  ["INDIA", 250],
];

export function Analytics() {
  return (
    <div className="chart">
      <RubberBand>
        <h4>Analisis Global de ventas</h4>
      </RubberBand>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="1000px"
        height="400px"
        data={data}
      />
      <Shake>
        <h4>Variables de analisis</h4>
      </Shake>

      <div>
        <BarChart />
      </div>
    </div>
  );
}

export default Analytics;

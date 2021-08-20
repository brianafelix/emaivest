import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [props.percentage],
      options: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: props.barsize,
            },
          },
        },
        labels: [props.radialLabel],
      },
    };
  }

  render() {
    return (
      <div className="radialBar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height="200"
        />
      </div>
    );
  }
}

export default RadialChart;

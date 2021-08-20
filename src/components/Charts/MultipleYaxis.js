import React, { Component } from "react";
import Chart from "react-apexcharts";

class MultipleYaxis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Receitas",
          type: "column",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
          name: "Gastos",
          type: "column",
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
          name: "Lucro",
          type: "line",
          data: [2, 4, 5, 6, 6.5, 7, 8, 9],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false,
          toolbar: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 4],
        },
        xaxis: {
          categories: ["ABR", "MAR", "MAI", "JUN", "JUL", "AUG", "SEP", "NOV"],
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div className="radialBar">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="200"
        />
      </div>
    );
  }
}

export default MultipleYaxis;

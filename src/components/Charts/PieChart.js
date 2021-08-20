import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [33, 55, 13, 43, 22, 11],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Imposto",
          "Fornecedores",
          "Pessoal",
          "Despesas Financeiras",
          "Outros",
          "Lucro",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="pie">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height="400"
        />
      </div>
    );
  }
}

export default PieChart;

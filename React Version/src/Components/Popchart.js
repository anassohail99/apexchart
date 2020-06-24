import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        Chart: {
          background: "#f4f4f4",
          foreColor: "#333"
        },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7"]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ["#f44336"]
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: "Apex Charts Practice Just Demo Data inputs",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "20px"
          }
        }
      },
      series: {
        name: "Population",
        data: [2323, 5667, 8342, 3580, 3539, 9065, 2344]
      }
    };
  }
  onClick = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal
          }
        }
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <Chart
          options={this.state.options}
          series={[this.state.series]}
          type="bar"
          height="450"
          width="100%"
        />
        <button onClick={this.onClick}>horizontal</button>
      </React.Fragment>
    );
  }
}

export default PopChart;

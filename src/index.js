// Chart options
const options = {
  chart: {
    height: 450,
    type: "bar",
    background: "f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "Population",
      data: [2323, 5667, 8342, 3580, 3539, 9065, 2344]
    }
  ],
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
};

// Init Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// render chart
chart.render();

// Event method example
document.querySelector("button").addEventListener("click", () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  });
});

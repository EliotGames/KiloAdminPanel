const graphicTooltips = () => {
  return {
    label: tooltipItem => `${tooltipItem.yLabel} grams`
  };
};

export default {
  generateData: function(data, limit) {
    const predictionDaysCount = 4;
    const actualData = data.map(item => item.value);


    return canvas => {
      const ctx = canvas.getContext("2d");
      const chartColor = "#FFFFFF";
      const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, chartColor);

      const gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

      return {
        labels: [
          "2 DEC",
          "3 DEC",
          "4 DEC",
          "5 DEC",
          "6 DEC",
          "7 DEC",
          "8 DEC",
          "9 DEC",
          "10 DEC",
          "11 DEC",
          "12 DEC",
          "13 DEC",
          "14 DEC",
          "15 DEC",
          "16 DEC",
          "17 DEC"
        ],
        datasets: [
          {
            label: "Current usage",
            borderColor: chartColor,
            pointBackgroundColor: "#2c2c2c",
            pointHoverBackgroundColor: "#2c2c2c",
            pointBorderWidth: 1,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 2,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            pointRadius: [, , , , , , , , , , , 5],
            data: actualData
          },
          {
            label: "Limit",
            pointBorderColor: "transparent",
            borderColor: "#faa14f88",
            backgroundColor: "transparent",
            borderWidth: 2,
            tooltips: false,
            borderDash: [10, 5],
            data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
          },
          {
            label: "Preticted usage",
            borderColor: "#fff",
            backgroundColor: "transparent",
            borderWidth: 2,
            borderDash: [10, 5],
            pointRadius: [, , , , , , , , , , , 0, 0, 5, 0, 0],
            pointBorderColor: "#faa14f",
            pointBackgroundColor: "#faa14f",
            pointHoverRadius: 8,
            fill: true,
            data: [, , , , , , , , , , , 2200, 1650, 1150, 600, 100]
          },
          {
            label: "Recommended date for the supplement",
            borderColor: "orange",
            backgroundColor: "orange"
          }
        ]
      };
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      callbacks: graphicTooltips()
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: true
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)"
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }
      ]
    },
    // vertical line
    annotation: {
      drawTime: "afterDatasetsDraw",
      annotations: [
        {
          drawTime: "afterDraw",
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "15 DEC",
          borderColor: "orange",
          borderWidth: 2
        }
      ]
    }
  }
};

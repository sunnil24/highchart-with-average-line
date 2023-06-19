import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  // Sample data for the chart
  const data = [5, 8, 3, 12, 6, 10];

  // Calculate the average value
  const average = data.reduce((sum, value) => sum + value, 0) / data.length;

  // Configuration options for the chart
  const options = {
    chart: {
      type: 'column', // Set to 'column' for vertical bars
    },
    title: {
      text: 'Bar Chart with Dotted Lines',
    },
    xAxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
      title: {
        text: 'Category',
      },
    },
    yAxis: {
      title: {
        text: 'Value',
      },
      plotLines: [
        {
          value: 8, // The value where the line will appear
          color: 'blue', // Line color
          width: 2, // Line width
          zIndex: 4, // Line zIndex
          dashStyle: 'dash',
          label: {
            align: 'left', // Label alignment
            x: -10, // Label x position
            y: -25,
            color: 'blue',
            text: '<span style="text-align: left; color: blue">Average<br>$500</span>', //
            textAlign: 'left', // Label text alignment
          },
        },
      ],
    },
    plotOptions: {
      column: {
        animation: false,
      },
    },
    series: [
      {
        name: 'Data',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;

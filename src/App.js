import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const data = [5, 8, 3, 12, 6, 10];

  // logic which will calculate the average value
  const averageValue =
    data.reduce((sum, value) => sum + value, 0) / data.length;

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bar Chart with dashed average line',
    },
    xAxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
      title: {
        text: '* Average amount throughout the past 12 months',
        align: 'left',
        left: '10px',
      },
    },
    yAxis: {
      title: {
        text: 'Value',
      },
      opposite: true,
      // to draw dashed line
      plotLines: [
        {
          value: averageValue,
          color: 'blue',
          width: 2,
          zIndex: 4,
          dashStyle: 'dash',
          label: {
            align: 'left',
            x: -10,
            y: -25,
            color: 'blue',
            text: `<span style="text-align: left; color: blue">Average*<br>${averageValue}</span>`, //
            textAlign: 'left',
          },
        },
      ],
    },
    plotOptions: {
      column: {
        animation: false,
      },
    },
    legend: {
      enabled: false, // Set enabled to false
    },
    credits: {
      enabled: false, // Set enabled to false
    },
    series: [
      {
        name: '',
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;

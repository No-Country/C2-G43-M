import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import {} from './barchart.css';
//defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom'; //para que la decripcion este abajo

const BarChart = () => {
  return (
    <div className="line">
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'N° de ventas',
              data: [42, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 3,
              hoverBackgroundColor: 'white',
            },
            {
              //segunda linea
              label: '% de ventas',
              data: [22, 59, 13, 55, 22, 53],
              backgroundColor: [
                'rgba(55, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(55, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(53, 102, 255, 0.2)',
                'rgba(55, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgb(255, 23, 0)',
                'rgb(4, 0, 154)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            },
            {
              //tercera linea
              label: '% Ganancias',
              data: [29, 25, 28, 50, 2, 33],
              backgroundColor: [
                'rgb(255, 142, 0)',
                'rgb(207, 255, 220)',
                'rgba(55, 296, 86, 0.2)',
                'rgba(7, 192, 192, 0.2)',
                'rgba(5, 102, 255, 0.2)',
                'rgba(55, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgb(147, 255, 216)',
                'rgb(6, 255, 0)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
            },
          ],
        }}
        height={400}
        width={800}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

import React, { useState } from 'react';
//import { Chart } from 'chart.js';
import { Radar, Bar, defaults, Line, Pie, Bubble } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../assets/css/dashboard.css';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
defaults.global.legend.position = 'top'; //para que la decripcion este arriba,sino bottom

function CardContainer() {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1');

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };
  //funciones par primer grafixo
  let chartExample1 = {
    data1: (canvas) => {
      let ctx = canvas.getContext('2d');
      //funciones gradient
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
    },
  };

  return (
    <div //ESTILOS DEL CONTENEDOR DE LOS GRAFICOS
      className="dashboard border border-dark"
      style={{
        display: 'block',
        width: 700,
        padding: 30,
        background: '', //para caMbiar el color
      }}
    >
      <h4>Graficos</h4>

      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === '1',
            })}
            onClick={() => {
              toggle('1');
            }}
          >
            Barras
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === '2',
            })}
            onClick={() => {
              toggle('2');
            }}
          >
            Lineas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === '3',
            })}
            onClick={() => {
              toggle('3');
            }}
          >
            Circular
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === '4',
            })}
            onClick={() => {
              toggle('4');
            }}
          >
            Radar
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: currentActiveTab === '5',
            })}
            onClick={() => {
              toggle('5');
            }}
          >
            Burbuja
          </NavLink>
        </NavItem>
      </Nav>
      {/*COMIENZO DE GRAFICO DE BARRAS */}
      <TabContent activeTab={currentActiveTab} className="border border-dark">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div>
                {/*BLOQUE DE CONFIGURACION */}
                <div>
                  <Bar
                    data={{
                      labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'Green',
                        'Purple',
                        'Orange',
                      ],
                      datasets: [
                        {
                          label: 'N° de ventas',
                          fill: true /*
                          //backgroundColor: 'gradientStroke',
                          borderColor: '#1f8ef1',
                          borderWidth: 2,
                          borderDash: [],
                          borderDashOffset: 0.0,
                          pointBackgroundColor: '#1f8ef1',
                          pointBorderColor: 'rgba(255,255,255,0)',
                          pointHoverBackgroundColor: '#1f8ef1',
                          pointBorderWidth: 20,
                          pointHoverRadius: 4,
                          pointHoverBorderWidth: 15,
                          pointRadius: 4,*/,

                          data: [
                            100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,
                          ],
                          backgroundColor: [
                            'rgb(255, 23, 0)',
                            'rgb(4, 0, 154)',
                            'rgb(251, 255, 0)',
                            'rgb(6, 255, 0)',
                            'rgb(154, 6, 128)',
                            'rgb(255, 142, 0)',
                          ],
                        },
                        {
                          //segunda linea
                          label: '% de ventas',
                          data: [22, 29, 13, 55, 22, 13],
                          backgroundColor: [
                            'rgba(55, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(55, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(53, 102, 255, 0.2)',
                            'rgba(55, 159, 64, 0.2)',
                          ],
                        },
                      ],
                    }}
                    height={400}
                    width={600}
                    options={{
                      //animacion
                      animations: {
                        backgroundColor: {
                          type: 'color',
                          duration: 2000,
                          easing: 'linear',
                          to: 'blue',
                          from: 'red',
                          loop: true,
                        },
                      },
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
              </div>
            </Col>
          </Row>
        </TabPane>
        {/*COMIENZO DE GRAFICO DE LINEAS/*/}
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="line">
                <Line
                  data={{
                    labels: [
                      'Red',
                      'Blue',
                      'Yellow',
                      'Green',
                      'Purple',
                      'Orange',
                    ],
                    datasets: [
                      {
                        label: 'N° de ventas',
                        data: [12, 19, 3, 5, 2, 3],
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
                        data: [22, 29, 13, 55, 22, 13],
                        backgroundColor: [
                          'rgba(55, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(55, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(53, 102, 255, 0.2)',
                          'rgba(55, 159, 64, 0.2)',
                        ],
                      },
                    ],
                  }}
                  height={400}
                  width={600}
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
            </Col>
          </Row>
        </TabPane>
        {/*COMIENZO DE GRAFICO REDONDO */}
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div>
                <div className="line">
                  <Pie
                    data={{
                      labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'Green',
                        'Purple',
                        'Orange',
                      ],
                      datasets: [
                        {
                          label: 'N° de ventas',
                          data: [12, 19, 3, 5, 2, 3],
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
                      ],
                    }}
                    height={400}
                    width={636}
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
              </div>
            </Col>
          </Row>
        </TabPane>
        {/*COMIENZO DE GRAFICO  RADAR */}
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <div>
                <div className="line">
                  <Radar
                    data={{
                      labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'Green',
                        'Purple',
                        'Orange',
                      ],
                      datasets: [
                        {
                          label: 'N° de ventas',
                          data: [12, 19, 3, 5, 2, 3],
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
                          data: [22, 29, 13, 55, 22, 13],
                          backgroundColor: [
                            'rgba(55, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(55, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(53, 102, 255, 0.2)',
                            'rgba(55, 159, 64, 0.2)',
                          ],
                        },
                      ],
                    }}
                    height={400}
                    width={636}
                    options={{
                      //animacion
                      animations: {
                        backgroundColor: {
                          type: 'color',
                          duration: 1000,
                          easing: 'linear',
                          to: 'red',
                          from: 'blue',
                          loop: true,
                        },

                        /* tension: {
                          duration: 1000,
                          easing: 'linear',
                          from: 1,
                          to: 0,
                          loop: true,
                        },*/
                      },
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
              </div>
            </Col>
          </Row>
        </TabPane>
        {/*COMIENZO GRAFICO BURBUJA */}
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
              <div>
                <div className="line">
                  <Bubble
                    data={{
                      labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'Green',
                        'Purple',
                        'Orange',
                      ],
                      datasets: [
                        {
                          label: 'N° de ventas',
                          data: [
                            {
                              x: 20,
                              y: 30,
                              r: 15,
                            },
                            {
                              x: 40,
                              y: 10,
                              r: 10,
                            },
                            {
                              x: 29,
                              y: 20,
                              r: 15,
                            },
                            {
                              x: 50,
                              y: 20,
                              r: 10,
                            },
                          ],
                          backgroundColor: 'rgb(255, 23, 0)',
                        },
                      ],
                    }}
                    height={400}
                    width={636}
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
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default CardContainer;

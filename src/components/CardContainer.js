import React, { useState } from 'react';
import { Radar, Bar, defaults, Line, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
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
defaults.global.legend.position = 'bottom'; //para que la decripcion este abajo

function CardContainer() {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState('1');

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  return (
    <div
      className="border border-dark"
      style={{
        display: 'block',
        width: 700,
        padding: 30,
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
      </Nav>
      {/*COMIENZO DE GRAFICO DE BARRAS */}
      <TabContent activeTab={currentActiveTab} className="border border-dark">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div>
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
                          label: '# of votes',
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
                        label: '# of votes',
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
                          label: '# of votes',
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
                          label: '# of votes',
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
      </TabContent>
    </div>
  );
}

export default CardContainer;

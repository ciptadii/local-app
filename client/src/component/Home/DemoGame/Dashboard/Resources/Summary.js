import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Spin,
} from 'antd';

import { Line } from '../../../../../../node_modules/react-chartjs-2';

export class Summary extends Component {
  state = {
    current: 'Summary',
    submenu: 'Resources',
    chartData: {},
    isLoading: true
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/ciptadii/jsonserver/db')
      .then(response => response.json())
      .then(data => this.setState({ chartData: data, isLoading: false }))
  }

  // default props chart
  static defaultProps = {
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {
    const { chartData } = this.state;

    return (
      <React.Fragment>
        <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '40px' }}>
            <Row>
              <Col span={12}>
                <li>
                  <Card title="Total sink by currency" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'Conversion rate',
                              data: chartData.conversionRate,
                              backgroundColor: '#36a2eb',
                              borderColor: '#36a2eb',
                              fill: false
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: true,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                callback: function (value, index, values) {
                                  return '$' + value;
                                }
                              }
                            }]
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="Total source by currency" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'ARPDAU',
                              data: chartData.ARPDAU,
                              backgroundColor: '#36a2eb',
                              borderColor: '#36a2eb',
                              fill: false
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: true,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                callback: function (value, index, values) {
                                  return '$' + value;
                                }
                              }
                            }]
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row> <br />
            <Row>
              <Col span={12}>
                <li>
                  <Card title="Number of transaction by currency sink" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'ARPPU',
                              data: chartData.revenue,
                              backgroundColor: '#36a2eb',
                              borderColor: '#36a2eb',
                              fill: false
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: true,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                callback: function (value, index, values) {
                                  return '$' + value;
                                }
                              }
                            }]
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
              <Col span={12}>
                <li>
                  <Card title="Number of transactions by currency source" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'DAU',
                              data: chartData.revenue,
                              backgroundColor: '#36a2eb',
                              borderColor: '#36a2eb',
                              fill: false
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: true,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                callback: function (value, index, values) {
                                  return '$' + value;
                                }
                              }
                            }]
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row> <br />
            <Row>
              <Col span={24}>
                <li>
                  <Card title="Total flow by currency" style={{ width: '1149.600px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'Coins',
                              data: chartData.revenue,
                              backgroundColor: '#36a2eb',
                              borderColor: '#36a2eb',
                              fill: false
                            }
                          ]
                        }}
                        options={{
                          maintainAspectRatio: true,
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                callback: function (value, index, values) {
                                  return '$' + value;
                                }
                              }
                            }]
                          }
                        }}
                      />
                    </Spin>
                  </Card>
                </li>
              </Col>
            </Row>
          </ul>
      </React.Fragment>
    )
  }
}

export default Summary;

import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Spin
} from 'antd';

import { Line, Bar } from '../../../../../../node_modules/react-chartjs-2';

class Monetization_behaviour extends Component {
  state = {
    chartData: {},
    isLoading: true,
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
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
              <Col span={12}>
                <li>
                  <Card size="small" title="Paying users by item type" style={{ width: '564px', margin: 'auto' }}>
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'Revenue per transaction',
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
                  <Card size="small" title="Paying users by cart type" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Line
                        data={{
                          labels: chartData.thisWeek,
                          datasets: [
                            {
                              label: 'Transaction',
                              data: chartData.transactions,
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

            <br />
            
            <Row>
              <Col span={12}>
                <li>
                  <Card size="small" title="Paying users by item id" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card size="small" title="Revenue by cart type" style={{ width: '564px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}>
                      <Bar
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
            </Row> 
            
            <br />
            
            <Row>
              <Col span={12}>
                <li>
                  <Card size="small" title="Revenue by item type" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card size="small" title="Revenue by item id" style={{ width: '564px', margin: 'auto' }} >
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
            </Row>

            <br />
            
            <Row>
              <Col span={12}>
                <li>
                  <Card size="small" title="ARPPU by item type" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card size="small" title="ARPPU by item id" style={{ width: '564px', margin: 'auto' }} >
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
            </Row>
          </ul>
      </React.Fragment>
    )
  }
}

export default Monetization_behaviour;

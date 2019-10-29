import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Spin
} from 'antd';

import { Line, Bar } from '../../../../../../node_modules/react-chartjs-2';

export class Lives extends Component {
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
            <Col span={24}>
              <li>
                <Card size="small" title="Total flow by item type" style={{ margin: 'auto' }} >
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

          <br />

          <Row>
            <Col span={12}>
              <li>
                <Card size="small" title="Sink by item type" style={{ margin: 'auto' }}>
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
                <Card size="small" title="Source by item type" style={{ margin: 'auto' }} >
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
                <Card size="small" title="Sink by item id" style={{ margin: 'auto' }} >
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
                <Card size="small" title="Source by item id" style={{ margin: 'auto' }} >
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
                <Card size="small" title="Sink transactions" style={{ margin: 'auto' }} >
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
                <Card size="small" title="Source transactions" style={{ margin: 'auto' }} >
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

export default Lives

import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Spin,
  Table
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
    
    // wait data
    if(this.state.isLoading){
      return(
        <p>wait</p>
      )
    } 
    const date = chartData.thisWeek;
    const revenue = chartData.revenue;
    const transactions = chartData.transactions;
    const conversionRate = chartData.conversionRate;
    const ARPDAU = chartData.ARPDAU;

    // Table
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Revenue per transaction',
        dataIndex: 'revenue',
        key: 'revenue',
      },
      {
        title: 'Transactions',
        dataIndex: 'transactions',
        key: 'transactions',
      },
      {
        title: 'Conversion rate',
        dataIndex: 'conversion',
        key: 'conversion',
      },
      {
        title: 'ARPDAU',
        dataIndex: 'arpdau',
        key: 'arpdau',
      },
      // {
      //   title: 'ARPPU',
      //   dataIndex: 'arppu',
      //   key: 'arppu',
      // },
      // {
      //   title: 'DAU',
      //   dataIndex: 'dau',
      //   key: 'dau',
      // }
    ];

    const data = [
      {
        key: '1',
        date: date[0],
        revenue: "$" + revenue[0],
        transactions: "$" + transactions[0],
        conversion: conversionRate[0] + "%",
        arpdau: "$" + ARPDAU[0]
      },
      {
        key: '2',
        date: date[1],
        revenue: "$" + revenue[1],
        transactions: "$" + transactions[1],
        conversion: conversionRate[1] + "%",
        arpdau: "$" + ARPDAU[1]
      },
      {
        key: '3',
        date: date[2],
        revenue: "$" + revenue[2],
        transactions: "$" + transactions[2],
        conversion: conversionRate[2] + "%",
        arpdau: "$" + ARPDAU[2]
      },
      {
        key: '4',
        date: date[3],
        revenue: "$" + revenue[3],
        transactions: "$" + transactions[3],
        conversion: conversionRate[3] + "%",
        arpdau: "$" + ARPDAU[3]
      },
      {
        key: '5',
        date: date[4],
        revenue: "$" + revenue[4],
        transactions: "$" + transactions[4],
        conversion: conversionRate[4] + "%",
        arpdau: "$" + ARPDAU[4]
      },
      {
        key: '6',
        date: "Total",
        revenue: "$" + ( revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4] ),
        transactions: "$" + ( transactions[0] + transactions[1] + transactions[2] + transactions[3] + transactions[4] ),
        conversion: ( conversionRate[0] + conversionRate[1] + conversionRate[2] + conversionRate[3] + conversionRate[4] ).toFixed(2) + "%",
        arpdau: "$" + ( ARPDAU[0] + ARPDAU[1] + ARPDAU[2] + ARPDAU[3] + ARPDAU[4] )
      }
    ];

    return (
      <React.Fragment>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
              <Col span={12}>
                <li>
                  <Card title="Revenue" style={{ width: '564px', margin: 'auto' }}>
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
                  <Card title="Transactions" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card title="Conversion rate" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card title="ARPDAU" style={{ width: '564px', margin: 'auto' }} >
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
            </Row> <br />
            <Row>
              <Col span={12}>
                <li>
                  <Card title="ARPPU" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card title="Paying user" style={{ width: '564px', margin: 'auto' }} >
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
                  <Card title="Revenue per item" style={{ width: '1149.600px', margin: 'auto' }} >
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
          </ul> <br />
          <div style={{ paddingBottom: '30px' }}>
            <Spin spinning={this.state.isLoading}>
              <Table columns={columns} dataSource={data} style={{ width: '1149.600px', margin: 'auto', background: 'white' }} />
            </Spin>
            <div style={{ width: '101.21px', height: '40px', margin: 'auto', paddingTop:'6px', paddingBottom: '6px' }}>
              <Button type="primary" icon="download" size='large'>
                Export
              </Button>
            </div>
            <h1> this is behaviour </h1>
          </div>
      </React.Fragment>
    )
  }
}

export default Monetization_behaviour;

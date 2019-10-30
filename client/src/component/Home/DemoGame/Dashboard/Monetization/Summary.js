import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Button,
  Spin,
  Table,
  Icon
} from 'antd';

import { Line, Bar } from '../../../../../../node_modules/react-chartjs-2';

class Summary extends Component {
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
    if (this.state.isLoading) {
      return (
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
        render: text => <a href="fake">{text}</a>,
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
        revenue: "$" + (revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]),
        transactions: "$" + (transactions[0] + transactions[1] + transactions[2] + transactions[3] + transactions[4]),
        conversion: (conversionRate[0] + conversionRate[1] + conversionRate[2] + conversionRate[3] + conversionRate[4]).toFixed(2) + "%",
        arpdau: "$" + (ARPDAU[0] + ARPDAU[1] + ARPDAU[2] + ARPDAU[3] + ARPDAU[4])
      }
    ];

    return (
      <React.Fragment>
        {/* <ul style={{ listStyle: 'none', paddingLeft: 0 }}> */}
        <Row gutter={[16, 16]}>
          <Col span={12}>
            {/* <li> */}
            {/* <Card size="small" title="Revenue" style={{ width: '564px', margin: 'auto' }}> */}
            <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
              <div style={{ minHeight: '55px', margin: '0px 14px', borderBottom: '1px solid #f3f2f2', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '178.133px', height: '38px', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '15px' }}><b>Revenue <Icon type="info-circle" theme="filled" style={{ color: '#dddbda' }} /></b></div>
                  <div style={{ fontSize: '12px' }}>Revenue per transaction (SUM)</div>
                </div>
                <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                  <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                        <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                        <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                      </div>
                      <div>
                        <span> $sum </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Spin spinning={this.state.isLoading}>
                <Line
                  style={{ margin: 'auto' }}
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </div>
            {/* </Card> */}
            {/* </li> */}
          </Col>
          <Col span={12}>
            {/* <li> */}
            <Card size="small" title="Transactions" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
        </Row>

        <br />

        <Row>
          <Col span={12}>
            {/* <li> */}
            <Card size="small" title="Conversion rate" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
          <Col span={12}>
            {/* <li> */}
            <Card size="small" title="ARPDAU" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
        </Row>

        <br />

        <Row>
          <Col span={12}>
            {/* <li> */}
            <Card size="small" title="ARPPU" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
          <Col span={12}>
            {/* <li> */}
            <Card size="small" title="Paying user" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
        </Row> <br />
        <Row>
          <Col span={24}>
            {/* <li> */}
            <Card size="small" title="Revenue per item" style={{ margin: 'auto' }} >
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
                          fontSize: 10,
                          callback: function (value, index, values) {
                            return '$' + value;
                          }
                        }
                      }],
                      xAxes: [{
                        ticks: {
                          fontSize: 10
                        }
                      }]
                    }
                  }}
                />
              </Spin>
            </Card>
            {/* </li> */}
          </Col>
        </Row>
        {/* </ul> */}

        <br />

        <div style={{ paddingBottom: '30px' }}>
          <Spin spinning={this.state.isLoading}>
            <Table columns={columns} dataSource={data} style={{ margin: 'auto', background: 'white' }} />
          </Spin>
          <div style={{ width: '101.21px', height: '40px', margin: 'auto', paddingTop: '6px', paddingBottom: '6px' }}>
            <Button type="primary" icon="download" size='large'>
              Export
              </Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Summary;

import React, { Component } from 'react';
import {
  Row,
  Col,
  Spin,
  Icon
} from 'antd';

import { Line } from '../../../../../../node_modules/react-chartjs-2';

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

    // wait data
    if (this.state.isLoading) {
      return (
        <p>wait</p>
      )
    }
    const revenue = chartData.revenue;

    return (
      <React.Fragment>
        <div style={{ margin: '0px 0px 40px' }}>
          {/* <ul style={{ listStyle: 'none', paddingLeft: 0 }}> */}
          <Row>
            <Col span={24}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Total flow by item type
                        </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Flow (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              </div>
              {/* </li> */}
            </Col>
          </Row>

          <br />

          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Sink by item type
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>sink (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              {/* </li> */}
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Source by item type
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>source (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              </div>
              {/* </li> */}
            </Col>
          </Row>

          <br />

          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Sink by item id
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>sink (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              </div>
              {/* </li> */}
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Source by item id
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>source (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              {/* </li> */}
            </Col>
          </Row>

          <br />

          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Sink transactions
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>sink (COUNT)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              </div>
              {/* </li> */}
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Source transactions
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>source (COUNT)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Sum </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Mean </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> Count </span></div>
                        </div>
                        <div style={{ color: '#2b2826', fontSize: '18px', fontWeight: 500, minWidth: '66px', textAlign: 'right' }}>
                          <span className='total'> ${(revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]).toFixed(2)} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderRadius: '3px', cursor: 'pointer', fontSize: '14px', padding: '2px', position: 'absolute', right: '2px', top: '2px' }}>
                    <Icon type="arrows-alt" />
                  </div>
                </div>
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
              </div>
              {/* </li> */}
            </Col>
          </Row>
          {/* </ul> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Lives

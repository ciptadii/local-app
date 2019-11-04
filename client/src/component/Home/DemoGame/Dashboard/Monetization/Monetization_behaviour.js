import React, { Component } from 'react';
import {
  Row,
  Col,
  Spin,
  Icon,
  Popover
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

    // Data Popover
    const PopoverTitle = <span style={{ fontSize: '10px', color: '#AAA' }}>METRIC DEFINITION</span>;
    const PopoverContent =
      [
        <div style={{ fontSize: '12px', color: '#262626' }}>
          <p>
            <b>SUM:</b> Total Revenue<br />
            <b>MEAN:</b> Avg. revenue per transaction.<br />
            <b>COUNT:</b> Total Transaction
          </p>
        </div>,
        <div style={{ fontSize: '12px', color: '#262626' }}>
          <p>The count of your daily users<br />
            who spent money on that day</p>
        </div>,
        <div style={{ fontSize: '12px', color: '#262626' }}>
          <p>Average revenue per paying<br />
            user</p>
        </div>
      ];

    return (
      <React.Fragment>
        {/* <ul style={{ listStyle: 'none', paddingLeft: 0 }}> */}
        <div style={{ margin: '0px 0px 40px' }}>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        Paying users by item type
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[1]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Paying users (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
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
                        Paying users by cart type
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[1]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Paying users (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
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
                        Paying users by item id
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[1]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Paying users (SUM)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
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
                        Revenue by cart type
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[0]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Revenue per transaction (SUM)</div>
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
                        Revenue by item type
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[0]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Revenue per transaction (SUM)</div>
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
                        Revenue by item id
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[0]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>Revenue per transaction (SUM)</div>
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

          <br />

          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              {/* <li> */}
              <div style={{ background: '#FFF', border: '1px solid #ddd', borderRadius: '5px', position: 'relative' }}>
                <div style={{ alignItems: 'center', borderBottom: '1px solid #f3f2f2', display: 'flex', justifyContent: 'space-between', minHeight: '55px', margin: '0px 14px' }}>
                  <div style={{ alignItems: 'center', display: 'flex' }}>
                    <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', height: '38px', justifyContent: 'space-between' }}>
                      <div style={{ color: '#2b2826', display: 'flex', fontSize: '15px', fontWeight: 500 }}>
                        ARPPU by item type
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[2]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>ARPPU (MEAN)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
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
                        ARPPU by item id
                      <div>
                          <Popover placement="rightTop" title={PopoverTitle} content={PopoverContent[2]} trigger="click">
                            <Icon type="info-circle" theme="filled" style={{ color: '#dddbda', cursor: 'pointer', marginLeft: '8px' }} />
                          </Popover>
                        </div>
                      </div>
                      <div style={{ color: '#969492', fontSize: '12px', lineHeight: '16px' }}>ARPPU (MEAN)</div>
                    </div>
                  </div>
                  <div style={{ alignItems: 'flex-end', display: 'flex', height: '38px' }}>
                    <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', minWidth: '86px', padding: '0 8px' }}>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
                          <div style={{ color: '#969492', fontSize: '12px', marginLeft: '6px', cursor: 'pointer' }}><span> . </span></div>
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
        </div>
        {/* </ul> */}
      </React.Fragment >
    )
  }
}

export default Monetization_behaviour;

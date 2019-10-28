import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import {
  Layout,
  Menu,
  Icon,
  Button,
  DatePicker
} from 'antd';
import moment from 'moment';
// import { Line } from '../../../../../../node_modules/react-chartjs-2';

import Summary from './Summary';
import Coins from './Coins';
import Lives from './Lives';
import Spins from './Spins';

// Menu Header
const { Header } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export class Monetization extends Component {
  state = {
    current: 'Summary',
    submenu: 'Resources',
    // chartData: {},
    // isLoading: true
  };

  // componentDidMount() {
  //   fetch('https://my-json-server.typicode.com/ciptadii/jsonserver/db')
  //     .then(response => response.json())
  //     .then(data => this.setState({ chartData: data, isLoading: false }))
  // }

  // handle click header
  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  // default props chart
  // static defaultProps = {
  //   displayLegend: true,
  //   legendPosition: 'top'
  // }

  render() {
    // const { chartData } = this.state;
    const { path, url } = this.props.match;

    return (
      <React.Fragment>
        <div>
          <Header style={{ padding: 0, position: 'fixed', zIndex: 100, width: '1319.200px' }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ width: '1319.200px' }}>
              <SubMenu
                key="sub1"
                title={
                  this.state.submenu
                }
              >
                <Menu.Item key="Overview">
                  Overview
                </Menu.Item>
                <Menu.Item key="Engagement">
                  Engagement
                </Menu.Item>
                <Menu.Item key="Benchmarks">
                  Benchmarks
                </Menu.Item>
                <Menu.Item key="Monetization">
                  Monetization
                  <Link to={"/game/1782/dashboard/show/monetization"} />
                </Menu.Item>
                <Menu.Item key="Resources">
                  Resources
                  <Link to={`${url}`} />
                </Menu.Item>
                <Menu.Item key="Progression">
                  Progression
                </Menu.Item>
                <Menu.Item key="Quality">
                  Quality
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="Summary">
                Summary
                <Link to={`${url}`} />
              </Menu.Item>
              <Menu.Item key="Coins">
                Coins
                <Link to={`${url}/Coins`} />
              </Menu.Item>
              <Menu.Item key="Lives">
                Lives
                <Link to={`${url}/Lives`} />
              </Menu.Item>
              <Menu.Item key="Spins">
                Spins
                <Link to={`${url}/Spins`} />
              </Menu.Item>
              <Icon type="appstore" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginLeft: 20, marginRight: 20 }} />
              <Icon type="stock" style={{ fontSize: '18px', float: 'right', marginTop: 15 }} />
              <Icon type="lock" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20, marginLeft: 20 }} />
            </Menu>
            <Menu>
              <div className="demo">
                <div style={{ paddingLeft: '20px', paddingRight: '20px', clear: 'both', whiteSpace: 'nowrap', width: '1319.200px' }}>
                  <div>
                    <RangePicker
                      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                      format={dateFormat}
                    />
                    <span> <Button><Icon type="plus" /> FILTERS</Button> </span>
                  </div>
                </div>
              </div>
            </Menu>
          </Header>
          <div style={{ width: '1279.200px', height: '90px' }} />
        </div>

        <div style={{ width: '1279.200px', height: '40px' }} />

        <div style={{ marginLeft: '72px', marginRight: '72px' }}>
          <Switch>
            <Route exact path={`${path}`} component={Summary} />
            <Route path={`${path}/Coins`} component={Coins} />
            <Route path={`${path}/Lives`} component={Lives} />
            <Route path={`${path}/Spins`} component={Spins} />
          </Switch>
          {/* <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '40px' }}>
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
          </ul> */}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Monetization);

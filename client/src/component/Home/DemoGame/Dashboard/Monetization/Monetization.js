import React, { Component } from 'react';
import { 
  Route, 
  Link, 
  Switch,
  withRouter
} from "react-router-dom";
import {
  // Card,
  // Row,
  // Col,
  Layout,
  Menu,
  Icon,
  Button,
  // Spin,
  // Table,
  DatePicker,
  Cascader
} from 'antd';
import moment from 'moment';
// import { Line, Bar } from 'react-chartjs-2';

import Summary from './Summary';
import Monetization_behaviour from './Monetization_behaviour';

// Menu Header
const { Header } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

// Cascader data
const options = [
  {
    value: 'noSplit',
    label: [<Icon type="close-square" />, <b> NO SPLIT</b>]
  },
  {
    value: 'advancedSplit',
    label: [<Icon type="column-width" />, <b> ADVANCED SPLIT</b>]
  },
  {
    value: 'adFilters',
    label: 'Top Ad filters'
  },
  {
    value: 'adGroupFilters',
    label: 'Top Ad Group filters'
  },
  {
    value: 'topCampaign',
    label: 'Top Campaign filters'
  },
  {
    value: 'topKeyword',
    label: 'Top Keyword filters'
  },
  {
    value: 'topPublishers',
    label: 'Top Publishers filters'
  }

];

export class Monetization extends Component {
  state = {
    current: 'Summary',
    submenu: 'Monetization',
    // chartData: {},
    // isLoading: true,
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
    const { path, url } = this.props.match;
    // const { chartData } = this.state;

    // // wait data
    // if(this.state.isLoading){
    //   return(
    //     <p>wait</p>
    //   )
    // } 
    // const date = chartData.thisWeek;
    // const revenue = chartData.revenue;
    // const transactions = chartData.transactions;
    // const conversionRate = chartData.conversionRate;
    // const ARPDAU = chartData.ARPDAU;

    // const dataLoaded = [];
    // if(chartData.thisWeek){
    //   chartData.thisWeek.forEach((item, key) => {
    //     dataLoaded.push({
    //       key,
    //       date: item,
    //       revenue: 32,
    //       transactions: 'New York No. 1 Lake Park',
    //       conversion: 'nice',
    //       arpdau: 'good',
    //       arppu: 'excelent',
    //       dau: 'bad'
    //     })
    //   })
    // }console.log(dataLoaded);


    // Cascade
    function onChange(value) {
      console.log(value);
    }

    // Table
    // const columns = [
    //   {
    //     title: 'Date',
    //     dataIndex: 'date',
    //     key: 'date',
    //     render: text => <a>{text}</a>,
    //   },
    //   {
    //     title: 'Revenue per transaction',
    //     dataIndex: 'revenue',
    //     key: 'revenue',
    //   },
    //   {
    //     title: 'Transactions',
    //     dataIndex: 'transactions',
    //     key: 'transactions',
    //   },
    //   {
    //     title: 'Conversion rate',
    //     dataIndex: 'conversion',
    //     key: 'conversion',
    //   },
    //   {
    //     title: 'ARPDAU',
    //     dataIndex: 'arpdau',
    //     key: 'arpdau',
    //   },
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
    // ];

    // const data = [
    //   {
    //     key: '1',
    //     date: date[0],
    //     revenue: "$" + revenue[0],
    //     transactions: "$" + transactions[0],
    //     conversion: conversionRate[0] + "%",
    //     arpdau: "$" + ARPDAU[0]
    //   },
    //   {
    //     key: '2',
    //     date: date[1],
    //     revenue: "$" + revenue[1],
    //     transactions: "$" + transactions[1],
    //     conversion: conversionRate[1] + "%",
    //     arpdau: "$" + ARPDAU[1]
    //   },
    //   {
    //     key: '3',
    //     date: date[2],
    //     revenue: "$" + revenue[2],
    //     transactions: "$" + transactions[2],
    //     conversion: conversionRate[2] + "%",
    //     arpdau: "$" + ARPDAU[2]
    //   },
    //   {
    //     key: '4',
    //     date: date[3],
    //     revenue: "$" + revenue[3],
    //     transactions: "$" + transactions[3],
    //     conversion: conversionRate[3] + "%",
    //     arpdau: "$" + ARPDAU[3]
    //   },
    //   {
    //     key: '5',
    //     date: date[4],
    //     revenue: "$" + revenue[4],
    //     transactions: "$" + transactions[4],
    //     conversion: conversionRate[4] + "%",
    //     arpdau: "$" + ARPDAU[4]
    //   },
    //   {
    //     key: '6',
    //     date: "Total",
    //     revenue: "$" + ( revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4] ),
    //     transactions: "$" + ( transactions[0] + transactions[1] + transactions[2] + transactions[3] + transactions[4] ),
    //     conversion: ( conversionRate[0] + conversionRate[1] + conversionRate[2] + conversionRate[3] + conversionRate[4] ).toFixed(2) + "%",
    //     arpdau: "$" + ( ARPDAU[0] + ARPDAU[1] + ARPDAU[2] + ARPDAU[3] + ARPDAU[4] )
    //   }
    // ];

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
                  <Link to={`${url}`} />
                </Menu.Item>
                <Menu.Item key="Resources">
                  Resources
                  <Link to={"/game/1782/dashboard/show/resources"} />
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
              <Menu.Item key="Purchase">
                Purchase behaviour
                <Link to={`${url}/behaviour`} />
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
                    <span style={{ float: 'right' }}>
                      <span style={{ paddingRight: '10px' }}>SPLIT</span>
                      <Cascader options={options} onChange={onChange} placeholder="Please select" />
                    </span>
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
            <Route path={`${url}/behaviour`} component={Monetization_behaviour} />
          </Switch>
          {/* <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
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
          </div> */}
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Monetization);
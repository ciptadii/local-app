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
  DatePicker,
  Cascader
} from 'antd';
import moment from 'moment';

import Summary from './Summary';
import Monetization_behaviour from './Monetization_behaviour';

// Menu Header
const { Header, Content } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const {  RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

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
    submenu: 'Monetization'
  };

  // handle click header
  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { path, url } = this.props.match;

    // Cascade
    function onChange(value) {
      console.log(value);
    }

    return (
      <React.Fragment>
        <div style={{ width: '100%' }}>
          <Header style={{ padding: 0, position: 'fixed', zIndex: 100, width: '87%' }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
                <div style={{ paddingLeft: '20px', paddingRight: '20px', clear: 'both', whiteSpace: 'nowrap', width: '100%' }}>
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
          <div style={{ width: '100%', height: '90px' }} />
        </div>

        <div style={{ width: '100%', height: '40px' }} />

        <Content style={{ marginLeft: '72px', marginRight: '72px' }}>
          <Switch>
            <Route exact path={`${path}`} component={Summary} />
            <Route path={`${url}/behaviour`} component={Monetization_behaviour} />
          </Switch>
        </Content>
      </React.Fragment>
    )
  }
}

export default withRouter(Monetization);
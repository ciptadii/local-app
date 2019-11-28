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
  Select
} from 'antd';
import moment from 'moment';

import Summary from './Summary';
import Monetization_behaviour from './Monetization_behaviour';

// Menu Header
const { Header, Content } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

// Select
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

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
                      <Select
                        defaultValue="no-split" 
                        style={{ width: 200 }} 
                        onChange={handleChange}
                      >
                        <Option value="no-split"><Icon type="close-square" /><b> NO SPLIT</b></Option>
                        <Option value="advanced-split"><Icon type="column-width" /><b> ADVANCED SPLIT</b></Option>
                        <Option value="ad">Top Ad filters</Option>
                        <Option value="ad-group">Top Ad Group filters</Option>
                        <Option value="campaign">Top Campaign filters</Option>
                        <Option value="keyword">Top Keyword filters</Option>
                        <Option value="publishers">Top Publishers filters</Option>
                        <Option value="site">Top Site filters</Option>
                        <Option value="build">Top Build filters</Option>
                        <Option value="cart-type">Top Cart type filters</Option>
                        <Option value="converting-users">Top Converting Users filters</Option>
                        <Option value="country">Top Country filters</Option>
                        <Option value="custom1">Top Custom 1 filters</Option>
                        <Option value="custom2">Top Custom 2 filters</Option>
                        <Option value="custom3">Top Custom 3 filters</Option>
                        <Option value="device">Top Device filters</Option>
                        <Option value="os-version">Top OS Version filters</Option>
                        <Option value="platform">Top Platform filters</Option>
                        <Option value="receipt-status">Top Receipt Status filters</Option>
                      </Select>
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
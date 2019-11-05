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

import Summary from './Summary';
import Coins from './Coins';
import Lives from './Lives';
import Spins from './Spins';

// Menu Header
const { Header, Content } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

export class Monetization extends Component {
  state = {
    current: 'Summary',
    submenu: 'Resources'
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
        <div>
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
                <div style={{ paddingLeft: '20px', paddingRight: '20px', clear: 'both', whiteSpace: 'nowrap', width: '100%' }}>
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
          <div style={{ width: '100%', height: '90px' }} />
        </div>

        <div style={{ width: '100%', height: '40px' }} />

        <Content style={{ marginLeft: '72px', marginRight: '72px' }}>
          <Switch>
            <Route exact path={`${path}`} component={Summary} />
            <Route path={`${path}/Coins`} component={Coins} />
            <Route path={`${path}/Lives`} component={Lives} />
            <Route path={`${path}/Spins`} component={Spins} />
          </Switch>
        </Content>
      </React.Fragment>
    )
  }
}

export default withRouter(Monetization);

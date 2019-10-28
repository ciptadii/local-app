import React from 'react';
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
  Avatar, 
  Dropdown, 
  Button, 
  Input 
} from 'antd';

import Monetization from '../DemoGame/Dashboard/Monetization/Monetization';
import Resources from './Dashboard/Resources/Resources';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

class DemoGame extends React.Component {
  state = {
    collapsed: false,
    visible: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // handle click menu
  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const { path, url } = this.props.match;

    // menu dropdown header
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="0">
          <Search
            placeholder="Search for game..."
            onSearch={value => console.log(value)}
            style={{ width: '174px' }}
          />
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/"><Icon type="home" theme="twoTone" /> <span> Home</span></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="">
            <Avatar
              src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg"
              style={{ width: '18px', height: '18px' }}
            /> 
            <span> Demo game</span>
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{
              overflow: 'auto',
              position: 'fixed',
              height: '100vh',
              left: 0,
              zIndex: 1
            }}>

            <Button type='link' style={{ width: '200px', height: '50px', padding: 0 }}>
              <Dropdown 
                overlay={menu} trigger={['click']}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
              >
                <div className="logo" style={{ padding: '4px 8px', borderBottom: '1px white solid', height: '50px' }}>
                  <Avatar
                    src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg"
                    style={{ marginBottom: '25px' }}
                  />
                  <div style={{ display: 'inline-block', textAlign: 'left', width: '140px', paddingLeft: '10px', color: 'white' }}>
                    <span><b>Demo Game</b></span> <br />
                    <span style={{ fontSize: '12px' }}>GameAnalytics</span>
                  </div>
                  <div style={{ display: 'inline-block', float: 'right', marginTop: '10px', width: '9px' }}>
                    <Icon type="down" style={{ color: 'white', margin: 'auto', fontSize: '9px' }} />
                  </div>
                </div>
              </Dropdown>
            </Button>

            <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
              {/* <Menu.Item key="realtime">
                <Icon type="search" />
                <span>Realtime</span>
              </Menu.Item> */}
              <SubMenu
                key="dashboard"
                title={
                  <span>
                    <Icon type="dashboard" />
                    <span>Dashboards</span>
                  </span>
                }
              >
                <Menu.Item key="overview"><Icon type="dashboard" />Overview</Menu.Item>
                <Menu.Item key="engagement"><Icon type="deployment-unit" />Engagement</Menu.Item>
                <Menu.Item key="benchmarks"><Icon type="deployment-unit" />Benchmarks</Menu.Item>
                <Menu.Item key="monetization"><Icon type="deployment-unit" />
                  Monetization
                  <Link to={`${url}/show/monetization`} />
                </Menu.Item>
                <Menu.Item key="resources"><Icon type="deployment-unit" />
                  Resources
                  <Link to={`${url}/show/resources`} />
                </Menu.Item>
                <Menu.Item key="progression"><Icon type="deployment-unit" />Progression</Menu.Item>
                <Menu.Item key="quality"><Icon type="deployment-unit" />Quality</Menu.Item>
              </SubMenu>
              <Menu.Item key="explore">
                <Icon type="search" />
                <span>Explore</span>
              </Menu.Item>
              <Menu.Item key="funnels">
                <Icon type="funnel-plot" />
                <span>Funnels</span>
              </Menu.Item>
              <Menu.Item key="development">
                <Icon type="deployment-unit" />
                <span>Cohorts</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ marginLeft: '200px' }}>
            <Content>
              <Switch>
                <Route path={`${path}/show/monetization`} component={Monetization} />
                <Route path={`${path}/show/resources`} component={Resources} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default withRouter(DemoGame);
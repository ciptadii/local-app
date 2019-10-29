import React from 'react';
import {
  Icon,
  Button,
  Avatar,
  PageHeader,
  Input,
  List,
  Menu,
  Dropdown
} from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const { Search } = Input;

// data list game
const data = [
  'Demo Game',
];

class Home extends React.Component {
  state = {
    visible: false,
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  handleClick = e => {
    const nextId = this.state.panels.length + 1
    this.setState({
      panels: this.state.panels.concat([nextId])
    });
  };

  render() {

    // menu dropdown header list
    const menuHeader = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="0">
          Add game
        </Menu.Item>
        <Menu.Item key="1">
          Settings
        </Menu.Item>
        <Menu.Item key="2">
          Archive
        </Menu.Item>
      </Menu>
    );

    const menuList = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="0">
          Settings
        </Menu.Item>
        <Menu.Item key="1">
          Hide
        </Menu.Item>
        <Menu.Item key="2">
          Archive
        </Menu.Item>
      </Menu>
    );

    return (
      <React.Fragment>
        <Navbar />
        <div style={{ width: '1040px', margin: 'auto' }}>
          <div className="PageHeader">
            <PageHeader title="Games"
              style={{ width: 710, paddingLeft: 0, paddingRight: 0, float: 'left' }} />
            <Search
              placeholder="Search App or Developer"
              onSearch={value => console.log(value)}
              style={{ width: 330, paddingTop: 24, paddingBottom: 24, float: 'right' }}
              enterButton
            />
            <Button
              type='link'
              style={{ float: 'right' }}>
              < h4>
                <Icon type="plus-circle" theme="twoTone" /> Member
              </h4>
            </Button>
            <Button
              type='link'
              style={{ float: 'right' }}>
              <h4>
                <Icon type="plus-circle" theme="twoTone" /> Developer
              </h4>
            </Button>
            <Button
              onClick={this.handleClick.bind(this)}
              type='link'
              style={{ float: 'right' }}>
              < h4>
                <Icon type="plus-circle" theme="twoTone" /> App
              </h4>
            </Button>
          </div>
          <div className="Container">
            <List
              size="large"
              header={
                <div>
                  <div style={{ paddingRight: '12px', width: '155px', display: 'inline-block' }}>
                    <h2 style={{ margin: '0px' }}>GameAnalytics</h2>
                  </div>
                  <Dropdown
                    overlay={menuHeader}
                  >
                    <Button type='link' style={{ padding: '0px 12px', paddingRight: '0px', float: 'right', border: 0, height: '31.2px' }}>
                      <Icon type="more" style={{ fontSize: '17px', color: 'black' }} />
                    </Button>
                  </Dropdown>
                  <Button style={{ padding: '0px 12px', float: 'right', height: '31.2px' }}>
                    <b>Archive</b>
                  </Button>
                </div>
              }
              bordered
              dataSource={data}
              renderItem={item =>
                <List.Item style={{ padding: '12px 0px' }}>
                  <div style={{ display: 'inline-block', width: '42px', height: '50px', margin: '0px 4px' }}>
                    <div style={{ width: '28.8px', padding: '4px', margin: '10.6px auto' }}>
                      <Button type='link' style={{ border: 0, color: 'black', padding: 0, width: '18px', height: '18px' }}>
                        <Icon type="pushpin" style={{ fontSize: '18px' }} />
                      </Button>
                    </div>
                  </div >
                  <div style={{ width: '470px', height: '50px' }}>
                    <div style={{ display: 'inline-block' }}>
                      <Avatar shape="square" size={50} icon="user" />
                    </div>
                    <div style={{ padding: '0px 0px 0px 12px', display: 'inline-block' }}>
                      <Button type="link" ><Link to="/game/1782/dashboard"><b>{item}</b></Link></Button>
                    </div>
                  </div>
                  <a 
                    href='/game/1782/dashboard' 
                    style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                    <b>DAU</b>
                  </a>
                  <a 
                    href='/game/1782/dashboard' 
                    style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                    <b>New users</b>
                  </a>
                  <a 
                    href='/game/1782/dashboard' 
                    style={{ width: '161px', height: '50px', borderLeft: '1px solid #f3f2f2', textAlign: 'center' }}>
                    <b>ARPDAU</b>
                  </a>
                  <Dropdown
                    overlay={menuList}
                  >
                    <Button type='link' style={{ padding: '0px 12px', paddingRight: '0px', float: 'right', border: 0, height: '31.2px' }}>
                      <Icon type="more" style={{ fontSize: '17px', color: 'black' }} />
                    </Button>
                  </Dropdown>
                </List.Item>}
              style={{ background: 'white' }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
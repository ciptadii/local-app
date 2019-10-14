import React from 'react';
import { Icon, Button, Avatar, PageHeader, Input, Collapse, Select } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const { Search } = Input;
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <Icon
    type="more"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Home extends React.Component {
  state = {
    expandIconPosition: 'left',
    panels: []
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
    const { expandIconPosition } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <div className="Header">
          <div className="PageHeader">
            <PageHeader title="Game"
              style={{ width: 710, paddingLeft: 0, paddingRight: 0, float: 'left' }} />
            <Search placeholder="Search App or Developer" onSearch={value => console.log(value)} style={{ width: 330, paddingTop: 24, paddingBottom: 24, float: 'right' }} enterButton />
            <Button type='link' style={{ float: 'right' }}>< h4><Icon type="plus-circle" theme="twoTone" /> Member</h4></Button>
            <Button type='link' style={{ float: 'right' }}>< h4><Icon type="plus-circle" theme="twoTone" /> Developer</h4></Button>
            <Button onClick={this.handleClick.bind(this)} type='link' style={{ float: 'right' }}>< h4><Icon type="plus-circle" theme="twoTone" /> App</h4></Button>
          </div>
        </div>
        <div>
          <Collapse defaultActiveKey={['1', '2']} onChange={callback} expandIconPosition={expandIconPosition} style={{ width: '70%', margin: 'auto', marginTop: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }} >
            <Panel header="Loonix" key="1" extra={genExtra()} >
              <Avatar shape="square" size={64} icon="user" />
              <Button type="link" ><Link to="/game/1782/Dashboard"><h3 style={{ color: 'black' }}>Game Name</h3></Link></Button>
              <Icon type="more" style={{ float: 'right', marginTop: '25px' }} />
              <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px' }} />
              <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px' }} />
              <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px' }} />
            </Panel>
          </Collapse><br />
        </div>
        <div >
          <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition={expandIconPosition} style={{ width: '70%', margin: 'auto', marginTop: '30px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
            <Panel header="GameTester" key="1" extra={genExtra()}>
              <Avatar shape="square" size={64} icon="user" />
              <Button type="link" ><Link to="/">< h3 style={{ color: 'black' }}>Game Name</h3></Link></Button>
              {
                this.state.panels.map((panelId) => (
                  <Panel key={panelId} id={panelId} />)
                )}
            </Panel>
            
          </Collapse>
          <Select value={expandIconPosition} onChange={this.onPositionChange} style={{ float: 'right', marginRight: '50%', marginTop: '20px' }} >
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
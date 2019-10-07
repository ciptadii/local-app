import React, { Component } from "react";
import { Card } from 'antd';

class TodoItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    const todoEntries = this.props.onClick;
    const listItems = todoEntries.map(this.createTasks);
 
    return (
        <Card style={{ width: '70%', margin: 'auto', marginBottom: '15px', marginTop: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
        {listItems}
        </Card >
    );
  }
};
 
export default TodoItems;
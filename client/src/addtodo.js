import React, { Component } from 'react';
import { Form, Input } from 'antd';

export class AddTodo extends Component {
    state = {
        title: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <Form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <Input 
                    type="text" 
                    name="title"
                    style={{ padding: '5px'}}
                    placeholder="Add Application" 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <Input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style= {{flex: '1'}}
                />
            </Form>
        )
    }
}

export default AddTodo;

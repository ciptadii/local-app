import React, { Component } from 'react';
import { Button, Card } from 'antd';

export class TodoItem extends Component {
    render() {
        const { id, title } = this.props.todo;
        return (
            <Card>
                    <Button type="link" style={{fontWeight: 'bold', color: 'black'}}>{title}</Button>
                    <Button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right', fontWeight: 'bold'}}>
                        Archive
                    </Button>
            </Card>
        )
    }
}


export default TodoItem;
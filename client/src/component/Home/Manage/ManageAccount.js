import React from 'react';
import { Form, Input, Button, Card, PageHeader } from 'antd';
import Navbar from '../../Navbar/Navbar';

class ManageAccount extends React.Component {
    state = {
      confirmDirty: true,
      autoCompleteResult: [],
      expandIconPosition: 'left',
    };
    
      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    logoutHandler =(e) => {
      this.props.history.push('/login')
  };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <React.Fragment>
            <Navbar/>
                <PageHeader  title="Manage Accoount"
                    style ={{width: 710, paddingLeft: 200, paddingRight: 0 ,float: 'left'}}/>
            <div className='continerAccount'>
                <Card bordered={false} style={{ textAlign: 'center', width: 600, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                        rules: [
                            {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                            },
                            {
                            required: true,
                            message: 'Please input your E-mail!',
                            },
                        ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                        rules: [
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                            {
                            validator: this.validateToNextPassword,
                            },
                        ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                        rules: [
                            {
                            required: true,
                            message: 'Please confirm your password!',
                            },
                            {
                            validator: this.compareToFirstPassword,
                            },
                        ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Save
                        </Button>
                    </Form.Item>
                    </Form>
                </Card>
            </div>
        </React.Fragment>    
      );
    }
  }
  
  export default Form.create()(ManageAccount);
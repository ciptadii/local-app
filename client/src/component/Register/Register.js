import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Input, Icon, Button, Card, Avatar } from 'antd';
import { register } from '../UserFunctions'

  class Register extends React.Component {
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {
          email: this.state.email,
          password: this.state.password
        }

        register(newUser)
          .then(_res => {
          this.props.history.push('/Login')
        })

        this.props.form.validateFields((err, setFieldsValue) => {
          if (!err) {
            console.log('Received values of form: ', setFieldsValue);
          }
        });
      }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
      <div className='continer'>
        <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg" 
          style={{margin: '30px', marginLeft: '270px', textAlign: 'center'}} />
        <Card bordered={false}  style={{ width: 600, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Item style={{ textAlign: 'center',}}><h2>Register</h2></Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your Email!' }],
            })(
              <Input 
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
              />
            )}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
            <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
            />
            )}
          </Form.Item>
          <Form.Item className="Form-Register">
              <Button type="primary" htmlType="submit" className="Button-Register" >
                Register
              </Button>
              <Button type="link" className="btn btn-lg btn-primary btn-block" > <Link to="/login"> <Icon type="user"/> Already have a account? </Link></Button>
          </Form.Item>
        </Form>
        </Card>
      </div>
      );
    }
  }
  
const HorizontalRegisterForm = Form.create({ name: 'register' })(Register)
export default HorizontalRegisterForm;
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Card, Avatar } from 'antd';
import { login } from '../UserFunctions'

class Login extends Component{
  constructor() {
    super();

    this.state = {
        username: '',
        password: '',
        errors: {}
  };

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    
    login(user).then(res => {
      if (res) {
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (   
    <div className='continer' >
      <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg" 
        style={{margin: '30px', marginLeft: '170px', textAlign: 'center'}} />
      <Card bordered={false} style={{ textAlign: 'center', width: 400, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
        <Form noValidate onSubmit={this.onSubmit} className="login-form">
          <Form.Item style={{ textAlign: 'center'}} className={'form-group'}><h1>Login</h1></Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
              />

          </Form.Item>
          <Form.Item className={'form-group'}>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in</Button>
            <Form.Item>
              <Button type="link" ><Link to="/Forget"> Forgot your password <Icon type="question"/></Link></Button>
            </Form.Item>
            You don't have an account? <Link to="/Register"> <Icon type="user"/> SIGN UP for FREE</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;

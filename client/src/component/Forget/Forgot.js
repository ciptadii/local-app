import React from 'react';
import { Form, Icon, Input, Card, Avatar, Button, } from 'antd';
import { Link } from 'react-router-dom';
class Forgot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { email: '' },
      errors: {},
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  showModal = () => {
    this.setState({
      visible: true,

    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async () => {
    const { data } = this.state;
    await this.props
      .attemptSendResetPasswordLink(data.email)
      .then(() => this.setState({ submited: true }))
      .catch(error => {
        if (error.response && error.response.status === 400) {
          const errors = { ...this.state.errors };
          errors.email = error.response.data.message;
          this.setState({ errors });
        }
      });
  };

  render() {
    const { username, submitted } = this.state;
    
    return (
      <div className='continer' >
        <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg"
          style={{ margin: '30px', marginLeft: '170px' }} />
          <Card bordered={false} style={{ width: 400, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
            {!this.state.submited && (
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item style={{ textAlign: 'center' }} className={'form-group' + (submitted && !username ? ' has-error' : '')}><h1>Forget Password</h1></Form.Item>
                <Form.Item>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item style={{ textAlign: 'right' }} className={'form-group'}>
                  <Button type="link" ><Link to="/Login"> Back to Login </Link></Button>
                </Form.Item>
                <Form.Item style={{ textAlign: 'center' }}>
                  <Button type="primary"  >
                    Send Email
              </Button>
                </Form.Item>
              </Form>
            )}
          </Card>
      </div>
    );
  }
}

export default Forgot;

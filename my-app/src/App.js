import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Card} from 'react-bootstrap'
import { Form, Input,Button,Checkbox } from 'antd';
import './FA/css/all.min.css'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }
  
  

  render() {
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
    
         <div className ="container">
              <div class="row">
                <div class="col-md-4 offset-4">
                  <div className = "card ">
                      <div className = "card-text text-center">
                        <img src="../images/logo-dark.png"/>
                        <p>Sign in to continue to Stexo.</p>
                      </div>
                      <Form>
                      <div className = "username">
                      <Form.Item className="label_one"
        label="Username"
        name="username"
        rules={[{ message: 'Please input your username!' }]}
      >
      <Input placeholder="Username"/>
      </Form.Item>

      <Form.Item className="label_two"
      label="Password"
      name="password"
      rules={[{  message: 'Please input your password!' }]}
      >
      <Input  placeholder="Password" type="password" className="password"/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <div className="button">
      <Form.Item {...tailLayout}>
        <Button className="text-white"  htmlType="button">
          Log In
        </Button>
      </Form.Item>
      </div>
      </div>
      </Form>
                  
                    <div className="display-tex">
                        <div className="oneText"> 
                              <i className="fas fa-lock"></i>
                              <span>Forgot your password?</span>
                        </div>
                        <div className="twoText">
                              <span>Create an account</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
      
    )
  }
}

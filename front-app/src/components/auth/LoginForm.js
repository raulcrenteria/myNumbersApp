import React, {Component} from 'react';
import './LogStyles.css';
import { Form, Icon, Input, Button } from 'antd';
import {Link} from 'react-router-dom'
import {login} from '../services/Auth'
const FormItem = Form.Item;

class LoginForm extends Component {

    handleSubmit = (e) => {
        console.log(this.props.data)
        e.preventDefault();
       
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onLogin()
              
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        const {handleText, data} = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" >
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Ingresa tú email!' }],
                    })(
                        <Input
                            name={'email'}
                            onChange={handleText}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Ingresa tú contraseña!' }],
                    })(
                        <Input
                            name={'password'}
                            onChange={handleText}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button ant-btn-primary" size="large" style={{borderColor:'#72c6cd', backgroundColor:'#72c6cd'}}>
                        Log in
                    </Button>
                </FormItem>

                <span>¿No tienes cuenta? Registrate <Link to='/signup'>aqui</Link> </span>
            </Form>
        );
    }
}

const Log = Form.create()(LoginForm);

export default Log;
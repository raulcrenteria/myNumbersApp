import React, {Component} from 'react';
import './LogStyles.css';
import { Form, Icon, Input, Button } from 'antd';
import {Link} from 'react-router-dom'
import {singup} from '../services/Auth'
const FormItem = Form.Item;

class SignupForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("data:" ,this.props.data)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onRegister()
                


            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        const {handleText, data,onRegister} = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" >
            <FormItem>
                    {getFieldDecorator('Nombre', {
                        rules: [{ required: true, message: 'Ingresa tú email!' }],
                    })(
                        <Input
                            name={'firstName'}
                            onChange={handleText}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nombre"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('Apellido Paterno', {
                        rules: [{ required: true, message: 'Ingresa tú email!' }],
                    })(
                        <Input
                            name={'firstLastName'}
                            onChange={handleText}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Apellido Paterno"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('RFC', {
                        rules: [{ required: true, message: 'Ingresa tú email!' }],
                    })(
                        <Input
                            name={'rfc'}
                            onChange={handleText}
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="RFC"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Ingresa tú email!' }],
                    })(
                        <Input
                            name={'email'}
                            onChange={handleText}
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                    {getFieldDecorator('confirmPassword', {
                        rules: [{ required: true, message: 'Ingresa tú contraseña!' }],
                    })(
                        <Input
                            name={'confirmPassword'}
                            onChange={handleText}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Confirm Password"
                            size="large" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button ant-btn-primary" size="large" style={{borderColor:'#72c6cd', backgroundColor:'#72c6cd'}}>
                        Registrate
                    </Button>
                </FormItem>
                
                <span>¿Ya tienes cuenta? <Link to='/login'>Inicia sesión</Link> </span>
            </Form>
        );
    }
}

const Signup = Form.create()(SignupForm);

export default Signup;
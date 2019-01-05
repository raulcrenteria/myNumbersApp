import React, {Component} from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'
import {login,singup} from '../services/Auth'
import './LogStyles.css';
import {Card} from 'antd'

import {Link} from 'react-router-dom'
import {message} from 'antd';


class LoginContainer extends Component {

    state={
      data:{}
    };

    handleText=(e)=>{
         let data = this.state.data;
         let field = e.target.name;
         data[field] = e.target.value;
         this.setState({data});

    };

   
    onRegister=()=>{
        let {data}=this.state
        singup(data,this.props.history)
        message.info('Registro Exitoso');
        this.setState({data:{}})
    }
    onLogin=()=>{
        let {data}=this.state
        login(data,this.props.history)
        message.info('Bienvenido');
        this.setState({data:{}})
        console.log("aqui",data)
    }

    render() {
        const { pathname } = this.props.location
        let {data} = this.state;
        return (
            <div className="login">
                <Card>

                
                <div className="header">

                    <span className="title">My Numbers</span>
                </div>
                <div>
                {
          pathname === '/login' ?
          
            <LoginForm
                    data={data}
                    onLogin={this.onLogin}
                    handleText={this.handleText}
            />
     
          
            :

           <SignupForm  handleText={this.handleText} data={data} onRegister={this.onRegister}  />

           
        }
                    
                </div>
                
                </Card>
             
            </div>
        )
    }
}

export default LoginContainer;
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginContainer from './components/auth/LoginContainer'
import Signup from './components/auth/SignupForm'
import MainPage from './components/home/MainPage';

export const Routes =()=>(

    <Switch>

        
        <Route  path='/home' component={MainPage} />
        <Route  path='/login' component={LoginContainer  }/>
        <Route path='/signup' component={LoginContainer}/>
        <Redirect from="/" exact to="/home/profile" />
        
        
    </Switch>
);
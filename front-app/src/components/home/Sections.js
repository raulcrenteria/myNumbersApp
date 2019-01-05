import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import BalanceContainer from '../balances/BalanceContainer';
import Resumen from '../balances/Resumen';


const Sections =()=>{
    return(
        <div className={'admin-sections'}>
            <Switch>
            <Route exact path={'/home/balance/:id'} component={BalanceContainer}/>
            <Route exact path={'/home/resumen/:id'} component={Resumen}/>
                <Route exact path={'/home/profile'} component={ProfileContainer}/>
                
            </Switch>
        </div>
    )
    
};

export default Sections;

//
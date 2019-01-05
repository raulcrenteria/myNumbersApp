import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';
import BalanceContainer from '../balances/BalanceContainer';


const Sections =()=>{
    return(
        <div className={'admin-sections'}>
            <Switch>
            <Route path={'/home/balance/:id'} component={BalanceContainer}/>
                <Route exact path={'/home/profile'} component={ProfileContainer}/>
                
            </Switch>
        </div>
    )
    
};

export default Sections;

//
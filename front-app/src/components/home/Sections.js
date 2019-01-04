import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ProfileContainer from '../profile/ProfileContainer';


const Sections =()=>{
    return(
        <div className={'admin-sections'}>
            <Switch>
                <Route path={'/'} component={ProfileContainer}/>
            </Switch>
        </div>
    )
    
};

export default Sections;
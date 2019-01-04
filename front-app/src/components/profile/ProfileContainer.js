import React, {Component} from 'react';
import {Avatar} from 'antd'
import {CardProfileData} from './CardProfileData';
import {CardNegocio} from './CardNegocio';
import {} from '../services/Company'
import axios from 'axios'
import {base_url} from '../services/base_url'
class ProfileContainer extends Component {
    state={
        user:{
            
        },
        editVisble:false,
        createVisible:false,
        companys:[]
    }

    readCompany=(user)=>{
        axios.get(`${base_url}api/negocio/`,user._id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })
    }
    componentWillMount(){
        const userData = JSON.parse(localStorage.getItem('user'));
        if(userData){
            this.setState({user: userData})
            this.readCompany(userData)
        }
    }

    editOpen=()=>{
        let {editVisble} = this.state
        editVisble =! editVisble
        this.setState({editVisble})
    }
    openCreate=()=>{
        let {createVisible} = this.state
        createVisible =! createVisible
        this.setState({createVisible})
    }

    render(){
        let {user,editVisble,createVisible} = this.state
        return(
            <div >
                
            <CardProfileData editVisble={editVisble} openCancel={this.editOpen} user={user}/>
            <CardNegocio createVisible={createVisible} openCancel={this.openCreate}/>

            </div>
        )
    }
}

export default ProfileContainer;
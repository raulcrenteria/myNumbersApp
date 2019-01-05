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
        companys:[],
        data:{}
    }

    readCompany=(user,negocio)=>{
        if(negocio){
            let {companys}=this.state
            companys.push(negocio)
            this.setState({negocio})
        }else{
            axios.get(`${base_url}api/negocio/${user._id}`)
            .then(res => {
                this.setState({companys:res.data.negocios})
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            })
        }
        
    }

    //user Edit
    editUser=(data)=>{
        let {user}=this.state
        axios.patch(`${base_url}api/auth/${user._id}`,data)
            .then(res => {
                localStorage.removeItem('user')
                localStorage.setItem("user", JSON.stringify(res.data.user))
                this.setState({user:res.data.user})
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

    handleText=(e)=>{
        let data = this.state.data;
        let field = e.target.name;
        data[field] = e.target.value;
        this.setState({data});

   };
   sendToNegocio=(data)=>{
       console.log("que es: ",data)
       this.props.history.push(`/home/balance/${data._id}`)
   }
    render(){
        let {user,editVisble,createVisible,companys} = this.state
        return(
            <div >
                
            <CardProfileData editVisble={editVisble} openCancel={this.editOpen} user={user} editUser={this.editUser}/>
            <CardNegocio createVisible={createVisible} sendToNegocio={this.sendToNegocio}openCancel={this.openCreate} readCompany={this.readCompany} companys={companys}/>

            </div>
        )
    }
}

export default ProfileContainer;
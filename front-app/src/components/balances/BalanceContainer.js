import React, {Component} from 'react';
import { Collapse } from 'antd';

import axios from 'axios'
import {base_url} from '../services/base_url'
import {readCompanys} from '../services/Company'
import Activo from './ActivoForm';
import Pasivo from './PasivoForm';
import Capital from './CapitalForm';
const Panel = Collapse.Panel;
class BalanceContainer extends Component {
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
            readCompanys(user._id)
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
    render(){
        let {user,editVisble,createVisible,companys} = this.state
        let _id = this.props.match.params;
        console.log("que es", _id)
        return(
            <div >
                 <Collapse defaultActiveKey={['1']} >
                    <Panel header="Activo" key="1">
                        <Activo id={_id}/>
                    </Panel>
                    <Panel header="Pasivo" key="2">
                        <Pasivo id={_id}/>
                    </Panel>
                    <Panel header="Capital" key="3" >
                        <Capital id={_id}/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default BalanceContainer;
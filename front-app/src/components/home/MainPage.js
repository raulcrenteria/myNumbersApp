import React, {Component} from 'react';
import { Layout, message} from 'antd';

import LeftSide from "./Drawer";
//import Sections from "./Sections";
import Navbar from "../navbar/Navbar";
import Sections  from "./Sections" 
import {readActivo} from "../services/Activo"
import {readCompanys} from '../services/Company'
//import MainLoader from "../common/Main Loader";

const { Header, Sider, Content } = Layout;




class MainPage extends Component {

    rootSubmenuKeys = ['sub1', 'sub2','sub3', 'sub4', 'sub5'];


    state = {
        collapsed: false,
        user:{},
        openKeys: [],
        companys:[],
        activos:[]
    };




    //user Edit

    componentWillMount(){
        const userToken = (localStorage.getItem('token'));
        const userData = JSON.parse(localStorage.getItem('user'));
        if(!userToken){
            this.props.history.push('/login');
        }else{
            this.setState({user:userData})
            console.log(userData)
            readCompanys(userData._id)
            .then(res => {
                
                this.setState({companys:res.data.negocio})
                console.log("respuesta",res)
            })
            .catch(err => {
                console.error(err);
            })
            


        }
    }


    toggle = () => {
        this.setState({
                        collapsed: !this.state.collapsed,
    });
};
logOut = () => {
    localStorage.clear()
    message.info('Hasta luego');
    this.props.history.push('/login');
};

onOpenChange = (openKeys) => {
    
        this.setState({ openKeys });
    
}

getBalance=(data)=>{
    console.log("getBalance",data)
    readActivo(data._id)
            .then(res => {
                
                this.setState({activos:res.data.activo})
                console.log("respuesta",res)
            })
            .catch(err => {
                console.error(err);
            })
}


render() {
    let{companys,activos}=this.state
    return (
    
        <Layout className={'leftside'}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                <div className="logo" >{!this.state.collapsed?'RANCHOADMIN':'ADMIN'}</div>
            <LeftSide activos={activos}getBalance={this.getBalance} onOpenChange={this.onOpenChange}  openKeys={this.state.openKeys} companys={companys}/>
            </Sider>
            <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            <Navbar
                user={this.state.user}
                logOut={this.logOut}
                collapsed={this.state.collapsed}
                toggle={this.toggle}/>
            </Header>
            <Content style={{ margin: '1%', padding: '1%', background: '#f0f2f5', minHeight: '90vh' }}>
                <Sections/>
            </Content>
            </Layout>
        </Layout>
);
}
}

export default MainPage;
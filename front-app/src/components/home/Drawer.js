import React from 'react';
import {Icon, Menu} from "antd";
//import {Link} from 'react-router-dom';
//import {paths} from './Sections';

const SubMenu = Menu.SubMenu;

const LeftSide = ({onOpenChange, user, openKeys}) => {

    return (

        <Menu theme="dark"
    mode="inline"
    openKeys={openKeys}
    defaultSelectedKeys={[]}
    defaultOpenKeys={[]}
    onOpenChange={onOpenChange}
    >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Negocios</span></span>}>
            <SubMenu key="sub2" title="La michoanca">
              <SubMenu key="sub3" title="Balance Genera">
              <SubMenu key="sub4" title="2001">
                  <Menu.Item key="1">Enero</Menu.Item>
                    <Menu.Item key="2">Febreo</Menu.Item>
              </SubMenu>
              </SubMenu>
              <SubMenu key="sub5" title="Estado de Resultados">
                  <Menu.Item key="1">Enero</Menu.Item>
                    <Menu.Item key="2">Febreo</Menu.Item>
              </SubMenu>
              
            </SubMenu>
        </SubMenu>

          
        </Menu>
  )
};

export default LeftSide;
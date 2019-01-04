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
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Balances</span></span>}>
            <Menu.Item key="1">Balance 1</Menu.Item>
            <Menu.Item key="2">Balance 2</Menu.Item>
           
        </SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
  )
};

export default LeftSide;
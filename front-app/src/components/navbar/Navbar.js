import React from 'react';
import {Icon, Menu} from 'antd';
import './navbar.css'

const SubMenu = Menu.SubMenu;




const Navbar=({logOut, user, collapsed, toggle, firstName})=> (
            <div className={'nav'}>
                <span>
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                </span>
                <span>
                    <Menu
                        mode="horizontal">
                        <SubMenu key={'sub1'} title={<span>Hola, {user.firstName}</span>}>
                        <Menu.Item>
                               <span>
                                    <Icon type="user" />
                                <span>Perfil</span>
                               </span>
                            </Menu.Item>
                            <Menu.Item>
                               <span onClick={logOut}>
                                    <Icon type="logout" />
                                <span>Cerrar Sesión</span>
                               </span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </span>
            </div>
        );


export default Navbar;
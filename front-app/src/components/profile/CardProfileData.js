import React, {Component} from 'react';
import {
    Card,Row, Col,Button
  } from 'antd';
import "./profile.css"
import ModalProfile from './ModalProfile';

    export const CardProfileData = ({user,editVisble,openCancel}) =>(
        <div>
        <ModalProfile open={editVisble} cancel={openCancel}/>
         <Card className="cardDataPrfile" title="Datos Personales" bordered={false} extra={<Button   className="Btn-Card-ProfileEdit" ghost onClick={openCancel}>Editar</Button>} >
    
         <Row gutter={24}>
                <Col span={8} >
                <span className="TitleCardProfile">Nombre:</span>
                <p>{user.firstName}</p>
                </Col>

                <Col span={8} >
                <span className="TitleCardProfile">Apellido Paterno:</span>
                <p>{user.firstLastName}</p>
                </Col>
   
                <Col span={8} >
                <span className="TitleCardProfile">Apellido Materno:</span>
                <p>{user.secondLastName ? user.secondLastName:"-------"}</p>
                </Col>
  
                <Col span={8} >
                <span className="TitleCardProfile">Fecha de nacimiento:</span>
                <p>{user.birthday ? user.birthday : "-------"}</p>
                </Col>
      
                <Col span={8} >
                <span className="TitleCardProfile">RFC:</span>
                <p>{user.rfc ? user.rfc : "-------"}</p>
                </Col>
   
                <Col span={8} >
                <span className="TitleCardProfile">CURP:</span>
                <p>{user.curp ? user.curp : "-------"}</p>
                </Col>
       
                <Col span={8} >
                <span className="TitleCardProfile">Telefono:</span>
                <p>{user.phoneNumber ? user.phoneNumber : "-------"}</p>
                </Col>
      
                <Col span={8} >
                <span className="TitleCardProfile">Email:</span>
                <p>{user.email ? user.email :"-------"}</p>
                </Col>
        </Row>

        </Card>
    </div>
    )
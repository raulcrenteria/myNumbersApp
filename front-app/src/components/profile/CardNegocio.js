import React, {Component} from 'react';
import { Card, Icon,Row,Col,Button } from 'antd';
import ModalNuevoNegocio from './ModalNuevoNeogcio'
import "./profile.css"

const { Meta } = Card;

    export const CardNegocio = ({createVisible,openCancel,negocios,readCompany,companys})=>(
            <div style={{marginTop:10}}>
                <ModalNuevoNegocio open={createVisible} cancel={openCancel} readCompany={readCompany}/>
                <Card className="cardDataPrfile" title="Negocios" extra={<Button   className="Btn-Card-ProfileEdit" ghost onClick={openCancel}>Nuevo</Button>}>
                <Row gutter={16}>
             {companys.map((data,i)=>
                    <Col span={8} key={i}>
                    <Card
                            style={{ width: 300, marginTop:10, marginBottom:10 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[ <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                            <Meta
                            
                            title={data.nombre}
                            />
                            </Card>
                    </Col>    
                )}
                
            </Row>
                </Card> 
            </div>
          
        )

import React, {Component} from 'react';
import { Card, Icon,Row,Col,Button } from 'antd';
import ModalNuevoNegocio from './ModalNuevoNeogcio'
import "./profile.css"

const { Meta } = Card;

    export const CardNegocio = ({sendToNegocio,createVisible,openCancel,negocios,readCompany,companys})=>(
            <div style={{marginTop:10}}>
                <ModalNuevoNegocio open={createVisible} cancel={openCancel} readCompany={readCompany}/>
                <Card className="cardDataPrfile" title="Negocios" extra={<Button   className="Btn-Card-ProfileEdit" ghost onClick={openCancel}>Nuevo</Button>}>
                <Row gutter={16} style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
             {companys ? companys.map((data,i)=>
                    <Col span={8} key={i}>
                    <Card   
                            onClick={()=>sendToNegocio(data)}
                            style={{ width: 300, marginTop:10, marginBottom:10 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            actions={[ <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                            <Meta
                            
                            title={data.nombre}
                            />
                            </Card>
                    </Col>       
                )
            :
            <Card
                            style={{ width: 300, marginTop:10, marginBottom:10 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            >
                            <Meta
                            
                            title="Agrega un nuevo negocio"
                            />
            </Card>
            }
                
            </Row>
                </Card> 
            </div>
          
        )

import React, {Component} from 'react';
import {
    Form, Row, Col, Input, Modal,Button,DatePicker
  } from 'antd';
import axios from 'axios'
import {base_url} from '../services/base_url'
const FormItem = Form.Item;

class ModalNuevoNegocio extends Component {
    state={
        data:{},
        editVisble:false
    }

    handleText=(e)=>{
        let {data} = this.state;
        let field = e.target.name;
        data[field] = e.target.value;
        this.setState({data});
        console.log(data)
        

   };

    createNegocio = (e)=>{
        const user = JSON.parse(localStorage.getItem('user'))
        let {data} = this.state
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if(err){
            console.log('Received values of form: ', err);
          }else{
              console.log("reacara")
            data['_owner']=user._id
            axios.post(`${base_url}api/negocio/new`, data)
                .then(res => {
                    console.log("agregada",res)
                    this.props.cancel()
                    this.props.readCompany(user._id,res.data.newNegocio)
                    
                })
                .catch(err => {
                    console.error(err);
                })
            console.log('Received values of form: ', values);
            
          }
           
        });
        console.log("data",this.state.data)
        //this.props.cancel()
  
    }
 
    
    render(){
        const { getFieldDecorator } = this.props.form;
        let {user}= this.state;
       
        return(
            <div>
                  <Modal
                        
                        visible={this.props.open}
                        title="Nuevo negocio"
                        okText="Create"
                        onCancel={this.props.cancel}
                        footer={null}
                        >
                    <Form
                    className="ant-advanced-search-form"
                   onSubmit={this.createNegocio}
                    >
                        <FormItem label={'Nombre'}>
                                {getFieldDecorator(`nombre`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!'
                                }],
                                
                                })(
                                <Input 
                                    name="nombre"
                                    onChange={this.handleText}
                                />
                                )}
                            </FormItem>
                            <FormItem label={'Giro'}>
                                {getFieldDecorator(`giro`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!'
                                }],
                                
                                })(
                                <Input 
                                    name="giro"
                                    onChange={this.handleText}
                                />
                                )}
                            </FormItem>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Enviar</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.props.cancel}>
                                     Cancelar
                            </Button>
                        </Col>
                        
                    </Row>
                </Form>
                    </Modal>
            </div>
        )
    }
}
const Negocio = Form.create()(ModalNuevoNegocio);

export default Negocio;
import React, {Component} from 'react';
import {
    Form, Row, Col, Input, Modal,Button,DatePicker
  } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;

class ModalProfile extends Component {
    state={
        user:{
            firstName:"Dylna",
            firstLastName:"Torres",
            secondLastName:"Cruz",
            birthday:"1992-10-22",
            rfc:"",
            curp:"",
            phoneNumber:"0123456789",
            email:"dyl@gmail.com",
        },
        editVisble:false
    }

    handleText=(e)=>{
        let {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
        console.log(user)
        

   };

    editPofile = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
          
        });
        console.log(this.state.user)
        //this.props.cancel()
  
    }
 
    
    render(){
        const { getFieldDecorator } = this.props.form;
        let {user}= this.state;
        const dateFormat = 'YYYY/MM/DD';
        return(
            <div>
                  <Modal
                        
                        visible={this.props.open}
                        title="Editar perfil"
                        okText="Create"
                        footer={null}
                        onCancel={this.props.cancel}
                        >
                    <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.editPofile}
                    >
        
                    <Row gutter={24}>
                        <Col span={8} >
                            <FormItem label={'Nombre'}>
                                {getFieldDecorator(`firstName`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!'
                                }],
                                
                                })(
                                <Input 
                                    name="firstName"
                                    onChange={this.handleText}
                                />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'Apellido P.'}>
                                {getFieldDecorator(`firstLastName`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.firstLastName
                                })(
                                <Input 
                                    name="firstLastName"
                                    placeholder="Panchita"
                                    onChange={this.handleText}
                                 />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'Apellido M.'}>
                                {getFieldDecorator(`secondLastName`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.secondLastName
                                })(
                                <Input 
                                    name="secondLastName"
                                    placeholder="Panchita" 
                                    onChange={this.handleText}    
                                />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'Fecha de naciemiento'}>
                                {getFieldDecorator(`birthday`, {
                                rules: [{ type: 'object', required: true, message: 'Campo requerido!' }],
                                })(
                                    <DatePicker defaultValue={moment(user.birthday, dateFormat)} format={dateFormat}
                                    
                                    />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'RFC'}>
                                {getFieldDecorator(`rfc`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.rfc
                                })(
                                <Input 
                                    name="RFC"
                                    placeholder="Panchita"
                                    onChange={this.handleText}
                                 />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'CURP'}>
                                {getFieldDecorator(`curp`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.curp
                                })(
                                <Input
                                    name="CURP"
                                    placeholder="Panchita" 
                                    onChange={this.handleText}
                                />
                                )}
                            </FormItem>
                        </Col>                        <Col span={8} >
                            <FormItem label={'Telefono'}>
                                {getFieldDecorator(`phoneNumber`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.phoneNumber
                                })(
                                <Input
                                    name="phoneNumber"
                                    placeholder="Panchita"
                                    onChange={this.handleText}
                                 />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8} >
                            <FormItem label={'email'}>
                                {getFieldDecorator(`email`, {
                                rules: [{
                                    required: true,
                                    message: 'Campo requerido!',
                                }],
                                initialValue:user.email
                                })(
                                <Input 
                                    name="email"
                                    placeholder="Panchita"
                                    onChange={this.handleText}
                                 />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
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
const Profile = Form.create()(ModalProfile);

export default Profile;
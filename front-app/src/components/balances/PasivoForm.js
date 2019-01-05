import React, {Component} from 'react';
import {newPasivo} from '../services/Activo'
import { Form, Icon, Input, Button ,Checkbox,message} from 'antd';

const FormItem = Form.Item;

class PasivoForm extends Component {
        state={
           btnData:[
             {  
                id:1,
                name:'proveedoresCxpCP',
                placeH:'Proveedores',
                activo:true,
                checked:"checked"
            },
            {
                id:2,
                name:'deudasFinCP',
                activo:true,
                placeH:'DeudasFin',
                checked:"checked"
                
            },
            {
                id:3,
                name:'bonosyPapelesCP',
                activo:true,
                placeH:'Bonos papeles',
                checked:"checked"
            },
            {
                id:4,
                name:'otrosCredConCosto',
                activo:true,
                placeH:'Otros creditos',
                checked:"checked"
            },
            {
                id:5,
                name:'totalProvisionesCP',
                activo:true,
                placeH:'Total provisiones',
                checked:"checked"
            },
             {
                id:6,
                name:'pasivoPorImpuestosCorr',
                activo:true,
                placeH:'Pasivo por Impuestos',
                checked:"checked"
            },
            {
                id:7,
                name:'proveedoresCxpLP',
                activo:true,
                placeH:'Proveedores Lp',
                checked:"checked"
            },
            {
                id:8,
                name:'deudasFinLP',
                activo:true,
                placeH:'Deudas Fin',
                checked:"checked"
                
            },{
                id:9,
                name:'bonosLP',
                activo:true,
                placeH:'Bonos Lp',
                checked:"checked"
                
            },
             {
                id:10,
                name: "acreedoresVariosLP",
                activo:true,
                placeH:'Acreedores',
                checked:"checked"
            } ,
            {
               id:11,
               name: "provisionesLP",
               activo:true,
               placeH:'Provisiones Lp',
               checked:"checked"
           } ,
           {
              id:12,
              name: "impuestosDiferidos",
              activo:true,
              placeH:'Impuestos Diferidos',
              checked:"checked"
          } 
           ],
           data:{},
           result:0
           
        }

        handleSubmit = (e) => {
           let {data,btnData}=this.state
            e.preventDefault();
           data['_negocio']=this.props.id.id
           console.log("que es",data)
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.sum()
                    this.props.form.resetFields()
                    this.setState({data:{}})
                   newPasivo(data).then(r=>{
                    console.log("exito",r)
                    message.info('Pasivo Guardado')}
                    
                      
                ).catch(err=>
                    {console.log(err.response.data.msg)
                        message.info(err.response.data.msg)
                    }
                )
                }
            });
        };
        handleText=(e)=>{
            let {data} = this.state;
            let field = e.target.name;
            data[field] = parseInt(e.target.value);
            this.setState({data});

       };
        sum=()=> {
            let obj = this.state.data
            let result = Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
            this.setState({result})
            
      }
       activar=(e)=>{
           let {btnData,data}= this.state
           btnData.find(data=> data.name === e.target.name).activo = !e.target.checked
           
            this.setState({btnData})
           
       }
       
        render(){
            const { getFieldDecorator } = this.props.form;
            const {handleText,activar,sum} = this;
            let {btnData} =this.state
            
            
        return (
           <div>
                <Form onSubmit={this.handleSubmit}  >
                   {btnData.map((data,i)=>
                    <FormItem key={i}>
                        <Checkbox key={data.id} defaultChecked={false} name={data.name} onChange={activar} />
                        {getFieldDecorator(data.placeH)(
                            
                            <Input
                                name={data.name}
                                onChange={handleText}
                                placeholder={data.placeH}
                                style={{width:"50%",marginLeft:10}}
                                disabled={data.activo}
                                onKeyPress={()=>sum()}
                                />
                        )}
                    </FormItem>
                    
                    
                )} 
                <span >Resultado: ${this.state.result}</span>
                
                
                <FormItem style={{marginTop:20}}>
                        <Button type="primary" htmlType="submit"  size="large" style={{borderColor:'#72c6cd', backgroundColor:'#72c6cd' ,width:"50%"}}>
                            Registrar
                        </Button>
                    </FormItem>
                 </Form>
               
           </div>
        );
    }
}

const Pasivo = Form.create()(PasivoForm);

export default Pasivo;
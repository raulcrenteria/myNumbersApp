import React, {Component} from 'react';
import {newActivo} from '../services/Activo'
import { Form, Icon, Input, Button ,Checkbox,message} from 'antd';

const FormItem = Form.Item;

class ActivoForm extends Component {
        state={
           btnData:[
             {  
                id:1,
                name:'efectivo',
                placeH:'Efectivo',
                activo:true,
                checked:"checked"
            },
            {
                id:2,
                name:'clientesdxcCP',
                activo:true,
                placeH:'Clientes CP',
                checked:"checked"
                
            },
            {
                id:3,
                name:'activoNoFinCorr',
                activo:true,
                placeH:'Activo',
                checked:"checked"
            },
            {
                id:4,
                name:'inventariosCorrientes',
                activo:true,
                placeH:'Inventario Corritentes',
                checked:"checked"
            },
            {
                id:5,
                name:'clientesdxcLP',
                activo:true,
                placeH:'Clientes LP',
                checked:"checked"
            },
             {
                id:6,
                name:'activoFinNoCorr',
                activo:true,
                placeH:'Activo Fin',
                checked:"checked"
            },
            {
                id:7,
                name:'inversiones',
                activo:true,
                placeH:'Inversiones',
                checked:"checked"
            },
            {
                id:8,
                name:'propiedadesPlantasEquipo',
                activo:true,
                placeH:'Prioridades Plantas',
                checked:"checked"
                
            },{
                id:9,
                name:'propiedadDeInversiones',
                activo:true,
                placeH:'Proiedad de Inversiones',
                checked:"checked"
                
            },
             {
                id:10,
                name: "impuestosDiferidos",
                activo:true,
                placeH:'Impuestos diferidos',
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
                   newActivo(data).then(r=>{
                    console.log("exito",r)
                    message.info('Activo Guardado')}
                    
                      
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

const Activo = Form.create()(ActivoForm);

export default Activo;
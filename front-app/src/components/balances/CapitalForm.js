import React, {Component} from 'react';
import {newCapital} from '../services/Activo'
import { Form, Icon, Input, Button ,Checkbox,message} from 'antd';

const FormItem = Form.Item;

class CapitalForm extends Component {
        state={
           btnData:[
             {  
                id:1,
                name:'capital',
                placeH:'Capital',
                activo:true,
                checked:"checked"
            },
            {
                id:2,
                name:'utEjAnterior',
                activo:true,
                placeH:'Anterior',
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
                   newCapital(data).then(r=>{
                    console.log("exito",r)
                    message.info('Capital Guardado')}
                    
                      
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

const Capital = Form.create()(CapitalForm);

export default Capital;
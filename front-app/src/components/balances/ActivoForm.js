import React, {Component} from 'react';

import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class ActivoForm extends Component {
        state={
           data:[] 
        }
        render(){
        return (
           <div></div>
        );
    }
}

const Activo = Form.create()(ActivoForm);

export default Activo;
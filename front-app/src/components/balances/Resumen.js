import React, {Component} from 'react';
import {Card,Row,Col} from 'antd'
import {readActivo,readPasivo,readCapital} from '../services/Activo'

const { Meta } = Card;
class Resumen extends Component {
    state={

        activos:{},
        pasivo:{},
        capital:{}
    }
    componentWillMount(){
        this.activo()            
    }

    activo=()=>{
        let otro = this.props.match.params
        readActivo(otro.id).then(res => {
                
            this.setState({activos:res.data.activo[0]})
            console.log("respuesta 2",res)
        }).catch(err => {
            console.error(err);
        })
        readPasivo(otro.id).then(res => {
                
            this.setState({pasivo:res.data.pasivo[0]})
            console.log("respuesta 2",res)
        }).catch(err => {
            console.error(err);
        })
        readCapital(otro.id).then(res => {
                
            this.setState({capital:res.data.capital[0]})
            console.log("respuesta 2",res)
        }).catch(err => {
            console.error(err);
        })
    }

    render(){
        let{activos,capital,pasivo}=this.state
        console.log("que",activos)
        return(
            <div style={{marginTop:10}}>
         
            <Card className="cardDataPrfile" title="Balance">
            <Row gutter={16} >
            <Col span={8} >
                <Card style={{ width: 300, marginTop:10, marginBottom:10 }}
                    title="Activo"
                >
                            
                    
                    <p>activoNoFinCorr: {activos.activoNoFinCorr}</p>
                    <p>clientes:{activos.clientesdxcCP}</p>
                    <p>clientes: {activos.clientesdxcLP}</p>
                    <p>efectivo: {activos.efectivo}</p>
                    <p>impuestosDiferidos: {activos.impuestosDiferidos}</p>
                    <p>inventariosCorrientes: {activos.inventariosCorrientes}</p>
                    <p>inversiones: {activos.inversiones}</p>
                    <p>propiedadDeInversiones: {activos.propiedadDeInversiones}</p>
                   <p> propiedadesPlantasEquipo: {activos.propiedadesPlantasEquipo}</p>
                    <p>sumaActivo: {activos.sumaActivo}</p>

                </Card>
                </Col>
                <Col span={8}>

                 <Card style={{ width: 300, marginTop:10, marginBottom:10 }}
                    title="Pasivo"
                >
                            
                    <p>acreedoresVariosLP: {pasivo.acreedoresVariosLP}</p>
                    <p>bonosLP: {pasivo.bonosLP}</p>
                    <p>bonosyPapelesCP:{pasivo.bonosyPapelesCP}</p>
                    <p>deudasFinCP: {pasivo.deudasFinCP}</p>
                    <p>deudasFinLP: {pasivo.deudasFinLP}</p>
                    <p>impuestosDiferidos: {pasivo.impuestosDiferidos}</p>
                    <p>otrosCredConCosto: {pasivo.otrosCredConCosto}</p>
                    <p>pasivoPorImpuestosCorr: {pasivo.pasivoPorImpuestosCorr}</p>
                    <p>proveedoresCxpCP: {pasivo.proveedoresCxpCP}</p>
                   <p> provisionesLP: {pasivo.provisionesLP}</p>
                   <p> totalProvisionesCP: {pasivo.totalProvisionesCP}</p>
                   <p> sumaPasivo: {pasivo.sumaPasivo}</p>

                </Card>
                </Col>
                <Col span={8}>
                 <Card style={{ width: 300, marginTop:10, marginBottom:10 }}
                    title="Capital"
                >
                
                    <p>capital: {capital.capital}</p>
                   <p> utEjAnterior: {capital.utEjAnterior}</p>
                    <p>sumaCapital: {capital.sumaCapital}</p>
                    
                </Card>
                
         
                
                </Col>
            
        </Row>
            </Card> 
        </div>
        )
    }
}

export default Resumen;
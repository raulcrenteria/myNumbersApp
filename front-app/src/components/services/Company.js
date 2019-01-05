import axios from 'axios'
import {base_url} from './base_url'
export const createCompany = (data) =>{
    axios.post(`${base_url}api/negocio/new`, data)
    .then(res => {
        console.log(res)
        
    })
    .catch(err => {
        console.error(err);
    })
}


export const updateCompany = ()=>{

}

export const deleteCompany = ()=>{

}
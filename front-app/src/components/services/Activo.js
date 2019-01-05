import axios from 'axios'
import {base_url} from './base_url'

export const readActivo = (data)=>{
    return axios.get(`${base_url}api/activo/${data}` )
}
export const readPasivo = (data)=>{
    return axios.get(`${base_url}api/pasivo/${data}` )
}
export const readCapital = (data)=>{
    return axios.get(`${base_url}api/capital/${data}` )
}

export const newActivo = (data)=>{
    return axios.post(`${base_url}api/activo/new`, data)
}
export const newPasivo = (data)=>{
    return axios.post(`${base_url}api/pasivo/new`, data)
}
export const newCapital = (data)=>{
    return axios.post(`${base_url}api/capital/new`, data)
}
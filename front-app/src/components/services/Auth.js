import axios from 'axios';
import {base_url} from './base_url'


export const login = (auth, history) => {
    axios.post(`${base_url}api/auth/login`, auth)
        .then(res => {
            console.log(res)
            
            localStorage.setItem("user", JSON.stringify(res.data.user))
            localStorage.setItem("token", res.data.token);
            history.push("/")
        })
        .catch(err => {
            console.error(err);
        })
};

export const singup = (auth, history) => {
    axios.post(`${base_url}api/auth/register`, auth)
        .then(res => {
            console.log("exitoso")
            history.push("/login")
        })
        .catch(err => {
            console.error(err);
        })
};

import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({

    // baseURL:'http://localhost:3000',
    // baseURL:'http://www.devilc.cn:3000',
       baseURL:'http://175.24.198.84:3000',
    timeout:10000,
    responseType:'json',
    withCredentials:true,
    // strictSSL: false,
    method:'get',
    headers:{
        'Content-Type':'application/json'
    },

})

export default Axios
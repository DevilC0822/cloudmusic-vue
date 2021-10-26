import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({

    baseURL:'http://localhost:3000',
    // baseURL:'http://www.devilc.cn:3000',

    timeout:10000,
    responseType:'json',
    withCredentials:true,
    // strictSSL: false

})

export default Axios
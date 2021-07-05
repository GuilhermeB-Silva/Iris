import axios from 'axios';
import { parseCookies} from 'nookies'

const cookies = parseCookies()


export const api = axios.create({
    baseURL:'https://api-iris.defyit.com.br/v1',
    headers:{
        Authorization: `Bearer ${cookies['authiris']}`
    }

})
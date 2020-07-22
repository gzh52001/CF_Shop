import request from '../utils/request';

const BASE_URL = '';

export default {
    pointsList(){
        const req= request({
        url:"http://10.3.141.126:2020" + '/good/goodslist',
        method:'get',
        });
        return req;
    },
}
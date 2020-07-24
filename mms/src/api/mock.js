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
    plusList(){
        const req= request({
        url:"http://10.3.141.126:2020" + '/user/getlist',
        method:'get',
        });
        return req;
    },
    checkname(username, password) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/user/checkname',
            params: {
                name: username,
                psw: password,
            },
            method: 'get',
        });
        return req;
    },

    reg(username, password) {
        const req = request.post("http://10.3.141.126:2020" + '/user/reg',
            {
                name: username,
                psw: password,
            });
        return req;
    }
}
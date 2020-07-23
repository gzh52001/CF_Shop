import request from '../utils/request';
import Login from '../pages/Login/login';

const BASE_URL = '';

export default {
    pointsList() {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/goodslist',
            method: 'get',
        });
        return req;
    },
    cartlist(uid) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/orders',
            params: {
                uid: uid
            },
            method: 'get',
        });
        return req;
    },
    Login(username, password) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/user/login',
            params: {
                name: username,
                psw: password,
            },
            method: 'get',
        });
        return req;
    },

    // checkname(username, password) {
    //     const req = request({
    //         url: "http://10.3.141.126:2020" + '/user/checkname',
    //         params: {
    //             name: username,
    //             psw: password,
    //         },
    //         method: 'get',
    //     });
    //     return req;
    // },

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
        // const req = request({
        //     url: "http://10.3.141.126:2020" + '/user/reg',
        //     params: {
        //         name: username,
        //         psw: password,
        //     },
        //     method: 'post',
        // });
        const req = request.post("http://10.3.141.126:2020" + '/user/reg', 
        {
            name: username,
            psw: password,
        });
        return req;
    }
}
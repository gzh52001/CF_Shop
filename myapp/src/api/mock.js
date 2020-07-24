import request from '../utils/request';
// import Login from '../pages/Login/login';

const BASE_URL = '';

export default {
    pointsList() {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/goodslist',
            method: 'get',
        });
        return req;
    },
    cartslist(uid) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/shopping/'+uid,
            // params: {
            //     uid: uid
            // },
            method: 'get',
        });
        return req;
    },

    private(uid) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/private/'+uid,
            method: 'get',
        });
        return req;
    },

  


    detailslist(cid) {
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/Details/'+cid,
            // params: {
            //     uid: uid
            // },
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
    },




    pushadd(user_id,good_name,iMallId,iMallQty,iOriPrice,sProfileImg) {
        const req = request.post("http://10.3.141.126:2020" + '/good/addlist', 
        {
            user_id:user_id,
            iMallQty:iMallQty,
            good_name:good_name,
            iMallId:iMallId,
            sProfileImg:sProfileImg,
            iOriPrice:iOriPrice,
        });
        return req;
    },
    // remo(uid,iMallId) {
    //     console.log(uid,iMallId)
    //     const req = request.delete("http://10.3.141.126:2020" + '/good/dele', 
    //     {
    //         uid:uid,
    //         iMallId:iMallId,
    //     });
    //     return req;
    // }
    remo(uid,iMallId) {
        console.log(uid,iMallId)
        const req = request({
            url: "http://10.3.141.126:2020" + '/good/dele',
            data: {
            uid:uid,
            iMallId:iMallId,
            },
            method: 'delete',
        });
        return req;
    },
}
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
   detailslist(cid){
       const req = request({
           url:"http://10.3.141.126:2020" + '/good/Details/'+cid,
        //    params:{
        //     cid:cid
        //    },
           method:'get',
       });
       return req;
   },
   cartslist(cid){
       const req = request({
           url:"http://10.3.141.126:2020" + '/good/shopping/'+cid,
        //    params:{
        //     cid:cid
        //    },
           method:'get',
       });
       return req;
   }
}
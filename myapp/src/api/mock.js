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
   },
   clickadd(user_id,good_name,iMallId,iMallQty,iOriPrice){
       const req = request.post(
           "http://10.3.141.126:2020" + '/good/addlist/',
           {
            user_id:user_id,
            good_name: good_name,
            iMallId: iMallId,
            iMallQty: iMallQty,
            iOriPrice: iOriPrice,
           },
       );
       return req;
   }


}
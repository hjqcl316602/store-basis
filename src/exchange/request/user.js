/**
 * created by 41587 on 2019/9/28
 */
import axios from "./instance";
import config from "../config";

/**
 * 时间：2019/9/22 ,
 * 描述：获取未处理订单
 * params :{
         pageNo:
 * }
 */
export let updatePassword = params =>
  axios.post(config.http + "/uc/approve/update/transaction/password", params);

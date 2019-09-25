import axios from "./instance";
import config from "../config";

/**
 * 时间：2019/9/22 ,
 * 描述：登录
 * params :{
         pageNo: 1 // 页数
         pageSize: 10 // 每页数量
         advertiseType: 1 // 1-买入 0-卖出
        unit: ttm // 币种类型
 * }
 */
export let getAdvertise = params =>
  axios.post(config.http + "/otc/advertise/page-by-unit", params);

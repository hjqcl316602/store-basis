import Vue from "vue";
import {
  iconHeadNormal,
  iconAli,
  iconWx,
  iconUnion,
  iconCard,
  iconPolymer
} from "../image";

// 广告类型
let advertTypes = [
  {
    text: "银联",
    icon: iconCard,
    value: 1
  },
  {
    text: "微信",
    icon: iconWx,
    value: 2
  },
  {
    text: "支付宝",
    icon: iconAli,
    value: 3
  },
  {
    text: "云闪付",
    icon: iconUnion,
    value: 4
  },
  {
    text: "聚合码",
    icon: iconPolymer,
    value: 5
  }
];
function getAdvertTypes(target, type = "value") {
  if (!["value", "text"].includes(type))
    throw new Error("The second argument must be in ['value','text'].");
  let find = advertTypes.find(ele => {
    return ele[type] === target;
  });
  return find || {};
}
// 交易类型
let transactionTypes = [
  {
    text: "在线出售",
    value: 1
  },
  {
    text: "在线购买",
    value: 0
  }
];
function getTransactionTypes(target, type = "value") {
  if (!["value", "text"].includes(type))
    throw new Error("The second argument must be in ['value','text'].");
  let find = transactionTypes.find(ele => {
    return ele[type] === target;
  });
  return find || {};
}
// 广告状态类型
let advertStatusTypes = [
  {
    text: "上架中",
    value: 0
  },
  {
    text: "待上架",
    value: 1
  }
];
function getAdvertStatusTypes(target, type = "value") {
  if (!["value", "text"].includes(type))
    throw new Error("The second argument must be in ['value','text'].");
  let find = advertStatusTypes.find(ele => {
    return ele[type] === target;
  });
  return find || {};
}
let accountStatusTypes = [
  {
    text: "已开启",
    value: 1
  },
  {
    text: "待开启",
    value: 0
  }
];
function getAccountStatusTypes(target, type = "value") {
  if (!["value", "text"].includes(type))
    throw new Error("The second argument must be in ['value','text'].");
  let find = accountStatusTypes.find(ele => {
    return ele[type] === target;
  });
  return find || {};
}

Vue.prototype.$getAdvertTypes = getAdvertTypes;
Vue.prototype.$getTransactionTypes = getTransactionTypes;
Vue.prototype.$getAdvertStatusTypes = getAdvertStatusTypes;
Vue.prototype.$getAccountStatusTypes = getAccountStatusTypes;
export {
  advertTypes,
  getAdvertTypes,
  transactionTypes,
  getTransactionTypes,
  advertStatusTypes,
  getAdvertStatusTypes,
  accountStatusTypes,
  getAccountStatusTypes
};

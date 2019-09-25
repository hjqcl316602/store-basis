const login = r =>
  require.ensure([], () => r(require("../view/login.vue")), "login");
const home = r =>
  require.ensure([], () => r(require("../view/home.vue")), "home");
const user = r =>
  require.ensure([], () => r(require("../view/user.vue")), "user");
const order = r =>
  require.ensure([], () => r(require("../view/order.vue")), "order");
const orderWithdraw = r =>
  require.ensure(
    [],
    () => r(require("../view/order-withdraw.vue")),
    "orderWithdraw"
  );
const orderRecharge = r =>
  require.ensure(
    [],
    () => r(require("../view/order-recharge.vue")),
    "orderRecharge"
  );
const orderCustom = r =>
  require.ensure(
    [],
    () => r(require("../view/order-custom.vue")),
    "orderCustom"
  );
const record = r =>
  require.ensure([], () => r(require("../view/record.vue")), "record");
const money = r =>
  require.ensure([], () => r(require("../view/money.vue")), "money");
const advert = r =>
  require.ensure([], () => r(require("../view/advert.vue")), "advert");
const account = r =>
  require.ensure([], () => r(require("../view/account.vue")), "account");
const transfer = r =>
  require.ensure([], () => r(require("../view/transfer.vue")), "transfer");
const confirm = r =>
  require.ensure([], () => r(require("../view/confirm.vue")), "confirm");
const routes = [
  { path: "*", redirect: "/home", meta: { hide: true } },
  { path: "/", redirect: "/home", meta: { hide: true } },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { title: "登录" }
  },
  {
    path: "/home",
    name: "home",
    component: home,
    meta: { title: "首页" }
  },
  {
    path: "/user",
    name: "user",
    component: user,
    meta: { title: "个人中心" }
  },
  {
    path: "/order",
    name: "order",
    component: order,
    meta: { title: "我的订单" }
  },
  {
    path: "/order-withdraw",
    name: "orderWithdraw",
    component: orderWithdraw,
    meta: { title: "买入订单" }
  },
  {
    path: "/order-recharge",
    name: "orderRecharge",
    component: orderRecharge,
    meta: { title: "卖出订单" }
  },
  {
    path: "/order-custom",
    name: "orderCustom",
    component: orderCustom,
    meta: { title: "申述订单" }
  },
  {
    path: "/advert",
    name: "advert",
    component: advert,
    meta: { title: "我的广告" }
  },
  {
    path: "/account",
    name: "account",
    component: account,
    meta: { title: "我的账号" }
  },
  {
    path: "/money",
    name: "money",
    component: money,
    meta: { title: "我的钱包" }
  },
  {
    path: "/record",
    name: "record",
    component: record,
    meta: { title: "资产流水" }
  },
  {
    path: "/transfer",
    name: "transfer",
    component: transfer,
    meta: { title: "转账" }
  },
  {
    path: "/confirm",
    name: "confirm",
    component: confirm,
    meta: { title: "信息确认" }
  }
];
export default routes;

let basis = {};

let member = localStorage.getItem("member");
let loginCacheType = localStorage.getItem("login/cache/type");
let orderNoticeType = localStorage.getItem("order/notice/type");
basis.state = {
  member: member ? JSON.parse(member) : {},
  order: {
    tradding: {},
    notice: {
      type: orderNoticeType || 1
    }
  },
  login: {
    cache: {
      type: loginCacheType || 2
    }
  }
};

basis.mutations = {
  ["set/member"](state, value) {
    localStorage.setItem("member", JSON.stringify(value));
    state.member = value;
  },
  ["set/order/traddding"](state, value) {
    state.order.tradding = value;
  },
  ["set/login/cache/type"](state, value) {
    localStorage.setItem("login/cache/type", value);
    state.login.cache.type = value;
  },
  ["set/order/notice/type"](state, value) {
    localStorage.setItem("order/notice/type", value);
    state.order.notice.type = value;
  }
};
basis.actions = {};
basis.getters = {};

export default basis;

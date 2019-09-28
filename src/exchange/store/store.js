let basis = {};

let member = localStorage.getItem("member");
let loginCacheType = localStorage.getItem("login/cache/type");
let orderNoticeType = localStorage.getItem("order/notice/type");
let orderTabType = localStorage.getItem("order/tab/type");
basis.state = {
  member: member ? JSON.parse(member) : {},
  order: {
    tradding: {},
    notice: {
      type: orderNoticeType || 1
    },
    tab: {
      type: orderTabType || "3"
    }
  },
  login: {
    cache: {
      type: loginCacheType || 1
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
  },
  ["set/order/tab/type"](state, value) {
    localStorage.setItem("order/tab/type", value);
    state.order.tab.type = value;
  }
};
basis.actions = {};
basis.getters = {};

export default basis;

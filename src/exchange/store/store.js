let basis = {};

basis.state = {
  name: "The app is a vue project!",
  member: {}
};

basis.mutations = {
  ["change/name"](state, name) {
    state.name = name;
  },
  ["set/user/member"](state, value) {
    localStorage.setItem("app/user/member", JSON.stringify(value));
    state.member = value;
  }
};
basis.actions = {};
basis.getters = {};

export default basis;

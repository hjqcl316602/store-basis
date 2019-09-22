<script>
import { loginCheck } from "./request/login";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  computed: mapState({
    name: "name"
  }),
  methods: {
    loginCheck() {
      loginCheck().then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          this.$store.commit("set/user/member", data["data"]);

          localStorage.setItem(
            "app/service/token",
            data["data"] ? data["data"]["token"] : ""
          );
        } else {
          this.$message.danger(data["message"]);
        }
      });
    }
  },
  created() {
    this.loginCheck();
  },
  mounted() {}
};
</script>

<template>
  <div class="">
    <router-view />
  </div>
</template>

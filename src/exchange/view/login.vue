<script>
import { loginIn } from "../request/login";
import { mapState } from "vuex";
export default {
  name: "vv-login",
  data() {
    return {
      params: {
        username: localStorage.getItem("login/username"),
        password: localStorage.getItem("login/password")
      }
    };
  },
  props: {},
  computed: mapState({
    member: "member",
    loginCacheType: state => state.login.cache.type
  }),
  methods: {
    loginIn() {
      loginIn(this.params).then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          let message = data.data;
          if (this.loginCacheType == 1) {
            localStorage.setItem("login/username", this.params.username);
          }
          if (this.loginCacheType == 2) {
            localStorage.setItem("login/username", this.params.username);
            localStorage.setItem("login/password", this.params.password);
          }
          if (this.loginCacheType == 3) {
            localStorage.removeItem("login/username");
            localStorage.removeItem("login/password");
          }

          if (message != null) {
            let token = message.token;
            this.$store.commit("set/member", message);
            localStorage.setItem("service/token", token);
            this.$message.success("恭喜您，登录成功");
            let redirect = localStorage.getItem("login/redirect");
            localStorage.removeItem("login/redirect");
            setTimeout(() => {
              if (redirect && redirect.indexOf("login") === -1) {
                //window.location.href = redirect;
                this.$router.replace(redirect.split("#")[1]);
              } else {
                this.$router.replace("/user");
              }
            }, 1500);
          } else {
            this.$message.danger("获取登录信息失败，请重试");
          }
        } else {
          this.$message.danger(data["message"]);
        }
      });
    }
  },
  mounted() {}
};
</script>

<template>
  <div class="vv-login vv-view is-view--cover is-view--white vi-center">
    <div style="width:250px">
      <div class="vi-text-align--center vi-margin-bottom--large">
        <span class="vi-font-size--larger vi-font-weight--bold">
          欢迎登录TTM
        </span>
      </div>
      <div class="vi-margin-bottom--large">
        <div class="vi-border is-border--bottom is-border--thiner">
          <div class="vi-margin-bottom vi-input is-input--larger">
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
            >
              <i class="iconfont icon-zhanghao" style="color:#999"></i>
            </div>
            <input
              type="text"
              class=""
              placeholder="请输入您的手机号码..."
              v-model="params.username"
            />
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
              v-if="params.username"
              @click="params.username = ''"
            >
              <i class="iconfont icon-shanchu" style="color:#999"></i>
            </div>
          </div>
        </div>
        <div
          class="vi-margin-bottom vi-border is-border--bottom is-border--thiner"
        >
          <div class="vi-input is-input--larger">
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
            >
              <i class="iconfont icon-mima" style="color:#999"></i>
            </div>
            <input
              type="password"
              class=""
              placeholder="请输入您的密码..."
              v-model="params.password"
            />
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
              v-if="params.password"
              @click="params.password = ''"
            >
              <i class="iconfont icon-shanchu" style="color:#999"></i>
            </div>
          </div>
        </div>
        <div
          class=" vi-border is-border--bottom is-border--thiner"
          v-if="false"
        >
          <div class="vi-input is-input--larger">
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
            >
              <i class="iconfont icon-yanzhengma" style="color:#999"></i>
            </div>
            <input type="text" class="" placeholder="请输入验证码..." />
            <div
              style="line-height: 44px"
              class="vi-padding-right vi-padding-left"
            >
              <i class="iconfont icon-shanchu" style="color:#999"></i>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          class="vi-btn is-btn--hollow is-btn--primary is-btn--thiner is-btn--long"
          @click="loginIn"
        >
          登录
        </div>
      </div>
    </div>
  </div>
</template>

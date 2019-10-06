<script>
import { loginOut } from "../request/login";
import { mapState } from "vuex";
let loginCacheTypes = [
  { text: "账号", value: 1 },
  { text: "账号和密码", value: 2 },
  { text: "均不", value: 3 }
];
let orderNoticeTypes = [{ text: "是", value: 1 }, { text: "否", value: 2 }];
export default {
  name: "",
  data() {
    return {
      action: {
        login: {
          show: false,
          options: loginCacheTypes
        },
        notice: {
          show: false,
          options: orderNoticeTypes
        }
      }
    };
  },
  props: {},
  computed: mapState({
    loginCacheType: state => state.login.cache.type,
    orderNoticeType: state => state.order.notice.type
  }),
  methods: {
    loginOut() {
      loginOut().then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          this.$store.commit("set/member", null);
          this.$message.success("退出成功");
          setTimeout(() => {
            this.$router.replace("/login");
          }, 1500);
        } else {
          this.$message.danger(data["message"]);
        }
      });
    },
    selectLogin(item) {
      this.$store.commit("set/login/cache/type", item.value);
    },
    getLoginCacheText(value) {
      let find = loginCacheTypes.find(ele => {
        return ele.value === Number(value);
      });
      return find.text;
    },
    selectNotice(item) {
      this.$store.commit("set/order/notice/type", item.value);
    },
    getOrderNoticeText(value) {
      let find = orderNoticeTypes.find(ele => {
        return ele.value === Number(value);
      });
      return find.text;
    }
  },
  mounted() {}
};
</script>

<template>
  <div class="">
    <vui-action
      :options="action.login.options"
      v-model="action.login.show"
      @select="selectLogin"
    ></vui-action>
    <vui-action
      :options="action.notice.options"
      v-model="action.notice.show"
      @select="selectNotice"
    ></vui-action>
    <div class="vv-panel ">
      <div
        class="vi-border is-border--bottom is-border--thiner vi-flex vi-justify-content--space-between vi-padding-left--large vi-padding-right--large"
        @click="action.login.show = true"
        style="line-height: 48px"
      >
        <div>
          <span class="">登录信息记住方式</span>
        </div>
        <div>
          <span>{{ getLoginCacheText(loginCacheType) }}</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div
        class="vi-border is-border--bottom is-border--thiner vi-flex vi-justify-content--space-between vi-padding-left--large vi-padding-right--large"
        @click="action.notice.show = true"
        style="line-height: 48px"
      >
        <div>
          <span class="">订单语音提醒</span>
        </div>
        <div>
          <span>{{ getOrderNoticeText(orderNoticeType) }}</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div
        class="vi-border is-border--bottom is-border--thiner vi-flex vi-justify-content--space-between vi-padding-left--large vi-padding-right--large"
        style="line-height: 48px"
        @click="$router.push('/password')"
      >
        <div>
          <span class="">资金密码</span>
        </div>
        <div>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </div>

    <div
      class="vi-btn is-btn--pack is-btn--white is-btn--long is-btn--larger"
      @click="loginOut"
    >
      退出登录
    </div>
  </div>
</template>

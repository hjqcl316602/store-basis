<script>
import { loginOut } from "../request/login";
import { mapState, mapMutations } from "vuex";
let loginCacheTypes = [
  { text: "账号", value: 1 },
  { text: "账号和密码", value: 2 },
  { text: "均不", value: 3 }
];
let orderNoticeDuration = [
  { text: "5秒", value: 5 * 1000 },
  { text: "10秒", value: 10 * 1000 },
  { text: "20秒", value: 20 * 1000 },
  { text: "30秒", value: 30 * 1000 },
  { text: "1分", value: 60 * 1000 },
  { text: "从不", value: "" }
];
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
          options: orderNoticeDuration
        }
      }
    };
  },
  props: {},
  computed: mapState({
    loginCacheType: state => state.login.cache.type,
    orderNoticeDuration: state => state.order.notice.duration
  }),
  methods: {
    ...mapMutations({
      setLoginCacheType: "set/login/cache/type",
      setOrderNoticeDuration: "set/order/notice/duration",
      setMember: "set/member"
    }),
    loginOut() {
      loginOut().then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          this.setMember(null);
          this.$message.success("退出成功");
          setTimeout(() => {
            this.$router.replace("/login");
          }, 1500);
        } else {
          this.$message.danger(data["message"]);
        }
      });
    },
    getLoginCacheText(value) {
      let find = loginCacheTypes.find(ele => {
        return ele.value === Number(value);
      });
      return find && find.text;
    },
    getOrderNoticeText(value) {
      let find = orderNoticeDuration.find(ele => {
        return ele.value === Number(value);
      });
      return find ? find.text : "从不";
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
      @select="item => setLoginCacheType(item.value)"
      :is-cancel="false"
    ></vui-action>
    <vui-action
      :options="action.notice.options"
      v-model="action.notice.show"
      @select="item => setOrderNoticeDuration(item.value)"
      :is-cancel="false"
    ></vui-action>
    <div class="vv-panel">
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
          <span class="">订单语音提醒间隔</span>
        </div>
        <div>
          <span>{{ getOrderNoticeText(orderNoticeDuration) }}</span>
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

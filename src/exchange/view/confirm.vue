<script>
import { deleteAccount, toggleAccount } from "../request";
export default {
  name: "",
  data() {
    return {
      params: {
        id: "",
        jyPassword: "",
        type: "",
        target: "",
        checked: 0
      }
    };
  },
  props: {},
  computed: {
    title() {
      let title = "";
      if (this.params.target === "del-account") {
        title = "删除账号";
      }
      if (this.params.target === "toggle-account") {
        if (this.params.checked === 0) {
          title = "开启账号";
        } else {
          title = "关闭账号";
        }
      }
      return title;
    }
  },
  methods: {
    init() {
      this.params = Object.assign(this.params, this.$route.query);
      console.log(this.params);
    },
    sure() {
      if (this.params.target === "del-account") {
        this.deleteAccount();
      }
      if (this.params.target === "toggle-account") {
        this.toggleAccount();
      }
    },
    deleteAccount() {
      if (!this.params.jyPassword) {
        this.$message.danger("请输入资金密码");
        return;
      }
      deleteAccount({
        id: this.params.id,
        jyPassword: this.params.jyPassword
      }).then(res => {
        let data = res["data"];
        if (data.code === 0) {
          this.$message.success("账号删除成功");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    toggleAccount() {
      if (!this.params.jyPassword) {
        this.$message.danger("请输入资金密码");
        return;
      }
      toggleAccount({
        id: this.params.id,
        jyPassword: this.params.jyPassword,
        checked: Math.abs(this.params.checked - 1),
        type: this.params.type
      }).then(res => {
        let data = res["data"];
        if (data.code === 0) {
          this.$message.success("账号切换成功");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else {
          this.$message.danger(data.message);
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<template>
  <div class="vv-confirm vv-panel " style="min-height: 100vh">
    <div class="vi-padding--large">
      <div class="vi-text-align--center vi-margin-bottom--large">
        <span class="vi-font-weight--bold vi-font-size--large">
          {{ title }}
        </span>
      </div>
      <div class="vi-border is-border--bottom is-border--thiner">
        <div class="  vi-input is-input--larger">
          <div
            style="line-height: 44px;width:80px"
            class="vi-padding-right vi-padding-left vi-text-align--right"
          >
            <span class="vi-font-weight--bold">密码</span>
          </div>
          <input
            type="password"
            class=""
            placeholder="请输入您的资金密码"
            v-model="params.jyPassword"
          />
          <div
            style="line-height: 44px"
            class="vi-padding-right vi-padding-left"
            v-if="params.jyPassword"
            @click="params.jyPassword = ''"
          >
            <i class="iconfont icon-shanchu" style="color:#999"></i>
          </div>
        </div>
      </div>
      <div class="vi-margin-top--large">
        <div
          class="vi-btn is-btn--primary is-btn--pack is-btn--long"
          @click="sure"
        >
          确定
        </div>
      </div>
    </div>
  </div>
</template>

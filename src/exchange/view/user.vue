<script>
import { loginOut } from "../request/login";

let iconHeadEmpty = require("../image/icon-head-normal.png");
export default {
  name: "vv-user",
  data() {
    return {
      icon: {
        headEmpty: iconHeadEmpty
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    loginOut() {
      loginOut()
        .then(res => {
          let data = res["data"];
          if (data["code"] === 0) {
            this.$store.commit("set/user/member", data["data"]);
            this.$message.success("退出成功");
            setTimeout(() => {
              this.$router.replace("/login");
            }, 1500);
          } else {
            this.$message.danger(data["message"]);
          }
        })
        .catch(err => {});
    }
  },
  mounted() {}
};
</script>

<template>
  <div class="vv-user">
    <div>
      <div class="vv-panel vi-padding--large vi-margin-bottom--large">
        <div class="vi-flex  vi-align-items--center">
          <div class="vv-head  ">
            <vui-image
              width="100%"
              height="100%"
              fill-type="min"
              :src="icon.headEmpty"
            >
              <div slot="error">
                <span>失败</span>
              </div>
            </vui-image>
          </div>
          <div class="vi-margin-left">
            <span>huangjunquan</span>
          </div>
        </div>
      </div>
      <div class="vv-panel vi-margin-bottom--large">
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/order-withdraw')"
        >
          <div>
            <vui-tag label="0">
              <span class="">
                买入订单
              </span>
            </vui-tag>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/order-recharge')"
        >
          <div>
            <span class="">
              卖出订单
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center  "
          @click="$router.push('/order-custom')"
        >
          <div>
            <span class="">
              申述订单
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
      <div class="vv-panel vi-margin-bottom--large">
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/advert')"
        >
          <div>
            <span class="">
              我的广告
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/order')"
        >
          <div>
            <span class="">
              我的订单
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/account')"
        >
          <div>
            <span class="">
              我的账号
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/money')"
        >
          <div>
            <span class="">
              我的钱包
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center "
          @click="$router.push('/record')"
        >
          <div>
            <span class="">
              资产流水
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
      <div class="vv-panel">
        <div
          class="vi-padding--large vi-flex vi-justify-content--space-between vi-align-items--center "
          @click="$router.push('/record')"
        >
          <div>
            <span class=""> 设置 </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="vv-footer vi-border is-border--top is-border--thiner">
      <div class="vv-tabbar is-tabbar--white">
        <div class="vv-tabbar-child " @click="$router.replace('/home')">
          <i class="iconfont icon-shouye vv-tabbar-icon"></i>
          <span class="vv-tabbar-text">首页</span>
        </div>
        <div class="vv-tabbar-child is-tabbar--active">
          <i class="iconfont icon-zhanghao vv-tabbar-icon"></i>
          <span class="vv-tabbar-text">个人中心</span>
        </div>
      </div>
    </div>
  </div>
</template>

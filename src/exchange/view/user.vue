<script>
import { loginOut } from "../request/login";
import { mapState } from "vuex";
import { iconHeadNormal } from "../image";
import { getTraddingOrder } from "../request/order";

export default {
  name: "vv-user",
  data() {
    return {
      icon: {
        headEmpty: iconHeadNormal
      }
    };
  },
  props: {},
  computed: mapState({
    member: state => state.member || {},
    orderTradding: state => state.order.tradding
  }),
  methods: {
    init() {
      this.getTraddingOrder();
    },
    getTraddingOrder() {
      getTraddingOrder().then(res => {
        let data = res.data;
        if (data.code === 0) {
          let message = data.data;
          this.$store.commit("set/order/traddding", message);
        } else {
          this.$message.danger(data["message"]);
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
  <div class="vv-user">
    <div>
      <div class="vv-panel vi-padding--large vi-margin-bottom--large">
        <div
          class="vi-flex vi-justify-content--space-between vi-align-items--center"
          @click="$router.push('/set')"
        >
          <div class="vi-flex  vi-align-items--center">
            <div class="vv-head  ">
              <vui-image
                width="100%"
                height="100%"
                fill-type="min"
                :src="member.avatar"
              >
                <div slot="error">
                  <img :src="icon.headEmpty" alt="" class="vi-cover" />
                </div>
              </vui-image>
            </div>
            <div class="vi-margin-left">
              <span class="vi-font-weight--bold vi-color--primary">
                {{ member.username }} | {{ member.realName }}
              </span>
            </div>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
      <div class="vv-panel vi-margin-bottom--large">
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          style="line-height: 48px"
          @click="$router.push('/order/withdraw')"
        >
          <div>
            <template v-if="orderTradding.sell > 0">
              <vui-tag
                :label="orderTradding.sell"
                direction="right-center"
                class="vi-padding-right--large"
              >
                <span class="vi-font-size--medium">
                  卖出订单
                </span>
              </vui-tag>
            </template>
            <template v-else>
              <span class="vi-font-size--medium">
                卖出订单
              </span>
            </template>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/order/recharge')"
          style="line-height: 48px"
        >
          <div>
            <template v-if="orderTradding.buy > 0">
              <vui-tag
                :label="orderTradding.buy"
                direction="right-center"
                class="vi-padding-right--large"
              >
                <span class="vi-font-size--medium">
                  买入订单
                </span>
              </vui-tag>
            </template>
            <template v-else>
              <span class="vi-font-size--medium">
                买入订单
              </span>
            </template>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between   "
          @click="$router.push('/order/custom')"
          style="line-height: 48px"
        >
          <div>
            <template v-if="orderTradding.appeal > 0">
              <vui-tag
                :label="orderTradding.appeal"
                direction="right-center"
                class="vi-padding-right--large"
              >
                <span class="vi-font-size--medium">
                  申述订单
                </span>
              </vui-tag>
            </template>
            <template v-else>
              <span class="vi-font-size--medium">
                申述订单
              </span>
            </template>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
      <div class="vv-panel vi-margin-bottom--large">
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/advert')"
          style="line-height: 48px"
        >
          <div>
            <span class="vi-font-size--medium">
              我的广告
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          style="line-height: 48px"
          @click="$router.push('/order-list')"
        >
          <div>
            <span class="vi-font-size--medium">
              我的订单
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/account')"
          style="line-height: 48px"
        >
          <div>
            <span class="vi-font-size--medium">
              我的账号
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  vi-border is-border--bottom is-border--thiner"
          @click="$router.push('/money')"
          style="line-height: 48px"
        >
          <div>
            <span class="vi-font-size--medium">
              我的钱包
            </span>
          </div>
          <div>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div
          class="vi-padding-right--large vi-padding-left--large vi-flex vi-justify-content--space-between  "
          @click="$router.push('/record')"
          style="line-height: 48px"
        >
          <div>
            <span class="vi-font-size--medium">
              我的流水
            </span>
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

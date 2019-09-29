<script>
import formater from "../../../package/es/dater/formater";
import { loginOut } from "../request/login";
import { getWithdraw } from "../request";
import { mapState } from "vuex";
import {
  iconHeadNormal,
  scenic1,
  scenic2,
  scenic3,
  scenic4,
  scenic5,
  scenic6,
  scenic7,
  scenic8,
  scenic9,
  scenic10
} from "../image";
import { getTraddingOrder } from "../request/order";
let headImages = [
  scenic1,
  scenic2,
  scenic3,
  scenic4,
  scenic5,
  scenic6,
  scenic7,
  scenic8,
  scenic9,
  scenic10
];
export default {
  name: "vv-user",
  data() {
    return {
      icon: {
        headEmpty: headImages[Math.round(Math.random() * 9)]
      },
      withdraw: {
        today: 0,
        total: 0
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
      this.getWithdraw();
      this.getWithdraw("today");
    },
    check(type) {
      let object = {};
      if (type === "today") {
        object.startTime = formater(new Date(), "yyyy-MM-dd");
        object.endTime = formater(
          new Date(+new Date() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd"
        );
      }
      this.$router.push({
        path: "/record",
        query: object
      });
    },
    getWithdraw(type = "total") {
      let object = {};
      if (type === "today") {
        object.startTime = formater(new Date(), "yyyy-MM-dd");
        object.endTime = formater(
          new Date(+new Date() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd"
        );
      }
      getWithdraw(object).then(res => {
        let data = res.data;
        if (data.code === 0) {
          let message = data.data;
          this.withdraw[type] = Number(message.amount || 0).toFixed(2);
        } else {
          this.$message.danger(data["message"]);
        }
      });
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
  <div class="vv-user vv-panel" style="min-height: 100vh;">
    <div>
      <div class="vv-panel vi-border is-border--bottom is-border--thiner">
        <div
          class="vi-padding--large vi-padding-bottom--larger vi-padding-top--larger vi-border is-border--bottom is-border--thiner"
        >
          <div
            class="vi-flex vi-justify-content--space-between vi-align-items--center "
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
                  <div slot="error" class="vi-cover">
                    <img :src="icon.headEmpty" alt="" class="vi-cover" />
                  </div>
                </vui-image>
              </div>
              <div class="vi-margin-left">
                <div style="line-height: 24px">
                  <span
                    class="vi-font-weight--bold vi-color--primary vi-font-size--large"
                  >
                    {{ member.username }}
                  </span>
                </div>
                <div style="line-height: 24px">
                  <span class="vi-color--light">
                    {{ member.realName }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <i class="iconfont icon-jiantou vi-color--light"></i>
            </div>
          </div>
        </div>
        <div class="vi-flex">
          <div class="vi-span--12  " @click="check('today')">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner vi-center"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 28px">
                  <span class="vi-color--light">今日收款</span>
                </div>
                <div style="line-height: 28px">
                  <span class="">￥ </span>
                  <span class="vi-font-weight--bold " style="font-size: 24px">
                    {{ withdraw.today || 0 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="vi-span--12  " @click="check('total')">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner vi-center"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 28px">
                  <span class="vi-color--light">全部收款</span>
                </div>
                <div style="line-height: 28px">
                  <span class="">￥ </span>
                  <span class="vi-font-weight--bold " style="font-size: 24px">
                    {{ withdraw.total || 0 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="vv-panel vi-flex vi-border is-border--bottom is-border--thiner"
      >
        <div class="vi-span--8" @click="$router.push('/order/withdraw')">
          <div
            class="vv-track"
            :class="{ 'is-track--active': orderTradding.sell > 0 }"
          >
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 28px">
                  <i
                    class="iconfont icon-chuku vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 28px">
                  <span class="vi-color--light vi-font-size--smaller">
                    卖出订单
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-span--8" @click="$router.push('/order/recharge')">
          <div
            class="vv-track"
            :class="{ 'is-track--active': orderTradding.buy > 0 }"
          >
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 28px">
                  <i
                    class="iconfont icon-ruku vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 28px">
                  <span class="vi-color--light vi-font-size--smaller">
                    买入订单
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-span--8" @click="$router.push('/order/custom')">
          <div
            class="vv-track"
            :class="{ 'is-track--active': orderTradding.appeal > 0 }"
          >
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 28px">
                  <i
                    class="iconfont icon-jingyingyichang vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 28px">
                  <span class="vi-color--light vi-font-size--smaller">
                    申诉订单
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="vv-panel vi-flex vi-border is-border--bottom is-border--thiner"
      >
        <div class="vi-flex--1" @click="$router.push('/advert')">
          <div class="">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 18px">
                  <i
                    class="iconfont icon-guanggao vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 18px">
                  <span class="vi-color--light vi-font-size--smaller">
                    广告
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-flex--1" @click="$router.push('/order-list')">
          <div class=" ">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 18px">
                  <i
                    class="iconfont icon-dingdan3 vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 18px">
                  <span class="vi-color--light vi-font-size--smaller">
                    订单
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-flex--1" @click="$router.push('/account')">
          <div class=" ">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 18px">
                  <i
                    class="iconfont icon-jingyingyichang vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 18px">
                  <span class="vi-color--light vi-font-size--smaller">
                    账号
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-flex--1" @click="$router.push('/money')">
          <div class="">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 18px">
                  <i
                    class="iconfont icon-qianbao vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 18px">
                  <span class="vi-color--light vi-font-size--smaller">
                    钱包
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vi-flex--1" @click="$router.push('/record')" v-if="false">
          <div class="">
            <div
              class="vi-padding--large vi-border is-border--right is-border--thiner"
            >
              <div class="vi-text-align--center">
                <div style="line-height: 18px">
                  <i
                    class="iconfont icon-dingdangdaizijinliushui vi-font-size--large vi-color--primary"
                  ></i>
                </div>
                <div style="line-height: 18px">
                  <span class="vi-color--light vi-font-size--smaller">
                    流水
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vv-panel vi-margin-bottom--large" v-if="false">
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
      <div class="vv-panel vi-margin-bottom--large" v-if="false">
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
          v-if="false"
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
        <div class="vv-tabbar-child " @click="$router.replace('/buy')">
          <i class="iconfont icon-mairu vv-tabbar-icon"></i>
          <span class="vv-tabbar-text">买入</span>
        </div>
        <div class="vv-tabbar-child " @click="$router.replace('/sell')">
          <i class="iconfont icon-maichu vv-tabbar-icon"></i>
          <span class="vv-tabbar-text">卖出</span>
        </div>
        <div class="vv-tabbar-child is-tabbar--active">
          <i class="iconfont icon-wode1 vv-tabbar-icon"></i>
          <span class="vv-tabbar-text">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

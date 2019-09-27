<script>
import {
  getWidthdrawOrder,
  getRechargeOrder,
  getAppealOrder
} from "../request/order";
import {
  iconHeadNormal,
  iconAli,
  iconWx,
  iconUnion,
  iconCard,
  iconPolymer
} from "../image";

let types = [
  {
    text: "银联",
    icon: iconCard,
    value: 1
  },
  {
    text: "微信",
    icon: iconWx,
    value: 2
  },
  {
    text: "支付宝",
    icon: iconAli,
    value: 3
  },
  {
    text: "云闪付",
    icon: iconUnion,
    value: 4
  },
  {
    text: "聚合码",
    icon: iconPolymer,
    value: 5
  }
];
const DURATION = 10 * 1000;
export default {
  name: "vv-order",
  data() {
    return {
      params: {
        type: "",
        list: []
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      this.params.type = this.$route.params.type;
      if (this.params.type === "withdraw") {
        this.getWidthdrawOrder();
      } else if (this.params.type === "recharge") {
        this.getRechargeOrder();
      } else if (this.params.type === "custom") {
        this.getAppealOrder();
      }
    },
    setTimer() {
      this._timer = setInterval(() => {
        this.init();
      }, DURATION);
    },
    clearTimer() {
      clearInterval(this._timer);
      this._timer = null;
    },
    getWidthdrawOrder() {
      getWidthdrawOrder().then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.params.list = data.data;
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    getRechargeOrder() {
      getRechargeOrder().then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.params.list = data.data;
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    getAppealOrder() {
      getAppealOrder().then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.params.list = data.data;
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    selectOrder(item) {
      this.$router.push({
        path: "/order-detail",
        query: {
          orderSn: item.orderSn,
          type: this.params.type
        }
      });
    },
    dataFormat(value, Millisecond = true) {
      if (Number(value) < 0) return 0;
      value = Millisecond ? value : value * 1000;

      const MINUTE = 60 * 1000;
      let minutes = Math.floor(value / MINUTE);
      let seconds = Math.floor((value - minutes * MINUTE) / 1000);

      return minutes === 0 && seconds === 0
        ? "已过期"
        : minutes === 0
        ? `${seconds}秒`
        : `${minutes}分 ${seconds}秒`;
    },
    getType(type) {
      return (
        types.find(ele => {
          return ele["text"] === type;
        }) || {}
      );
    }
  },
  mounted() {
    this.init();
    this.setTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  }
};
</script>

<template>
  <div class="vv-order-withdraw">
    <div v-if="params.list.length > 0">
      <div
        class="vv-panel vi-padding--large vi-border is-border--bottom is-border--thiner"
        v-for="(item, index) in params.list"
        :key="index"
        @click="selectOrder(item)"
      >
        <div
          class="vi-flex vi-justify-content--space-between"
          style="line-height: 36px"
        >
          <vui-image
            height="24px"
            width="40px"
            fill-type="height"
            align-type="left"
            :src="getType(item.payMode)['icon']"
          >
          </vui-image>
          <span
            class="vi-color--primary vi-font-size--large vi-font-weight--bold"
          >
            {{ item.money }}
          </span>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              订单号
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ item.orderSn }}
            </span>
          </div>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
          v-if="item.unit"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              币种
            </span>
          </div>
          <div class="">
            <span class="">
              {{ item.unit }}
            </span>
          </div>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              交易对象
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ params.type !== "withdraw" ? item.customerName : item.name }}
            </span>
          </div>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
          v-if="item.amount"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              数量
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ item.amount }}
            </span>
          </div>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
          v-if="item.price"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              单价
            </span>
          </div>
          <div class=" ">
            <span class=""> {{ item.price }} CNY </span>
          </div>
        </div>

        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              时间
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ item.createTime }}
            </span>
          </div>
        </div>
        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
          v-if="item.leftTime"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              过期时间
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ dataFormat(item.leftTime, false) }}
            </span>
          </div>
        </div>
        <div
          class="vi-flex  vi-justify-content--space-between"
          style="line-height: 28px"
          v-if="item.payRemark"
        >
          <div class="vi-padding-right--large vi-text-align--right ">
            <span class="vi-color--gray">
              备注
            </span>
          </div>
          <div class=" ">
            <span class="">
              {{ item.payRemark || "--" }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="vi-padding--large vi-center" style="height: 100vh" v-else>
      <div class="vi-text-align--center">
        <div class="vi-margin-bottom">
          <i
            class="iconfont icon-meiyoudingdan-01 vi-color--gray vi-font-size--large"
          ></i>
        </div>
        <div>
          <span class="vi-color--gray">
            暂无{{
              params.type === "withdraw"
                ? "卖出"
                : params.type === "recharge"
                ? "买入"
                : "申诉"
            }}订单
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

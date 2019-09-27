<script>
import { deleteAccount, toggleAccount } from "../request";
import { release } from "../request/order";
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
export default {
  name: "",
  data() {
    return {
      params: {
        id: "",
        jyPassword: "",
        type: "",
        target: "",
        handler: "",
        checked: 0,
        money: 0,
        name: ""
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      this.params = Object.assign(this.params, this.$route.query);
      console.log(this.params);
    },
    sure() {
      if (this.params.target === "account") {
        if (this.params.handler === "toggle") {
          this.toggleAccount();
        } else if (this.params.handler === "del") {
          this.deleteAccount();
        }
      } else if (this.params.target === "order") {
        if (this.params.handler === "confirm") {
          this.release();
        }
      }
    },
    release() {
      if (!this.params.jyPassword) {
        this.$message.danger("请输入资金密码");
        return;
      }
      release({
        orderSn: this.params.id,
        jyPassword: this.params.jyPassword
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.$message.success(data.message);
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        } else {
          this.$message.danger(data.message);
        }
      });
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
    },
    getType(type) {
      return (
        types.find(ele => {
          return ele["value"] === type;
        }) || {}
      );
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
        <template v-if="params.target === 'order'">
          <template v-if="params.handler === 'confirm'">
            <div
              class="vi-font-weight--bold vi-font-size--large vi-margin-bottom--large"
            >
              订单放行
            </div>
            <div class="vi-margin-bottom">
              <div class="vi-margin-bottom vi-center">
                <vui-image
                  height="24px"
                  width="40px"
                  fill-type="height"
                  align-type="center"
                  :src="getType(params.type)['icon']"
                >
                </vui-image>
              </div>
              <div class="vi-margin-bottom">
                <span>
                  ￥
                </span>
                <span class="vi-font-weight--bold" style="font-size: 24px">
                  {{ params.money }}
                </span>
              </div>
              <div>
                <span class="vi-color--light">{{ params.id }}</span>
              </div>
            </div>
            <div>
              <span class="vi-color--danger vi-font-weight--bold">
                请谨慎放行，放行后不可追回
              </span>
            </div>
          </template>
        </template>
        <template v-if="params.target === 'account'">
          <div class="vi-margin-bottom--large">
            <template v-if="params.handler === 'toggle'">
              <template v-if="params.checked === 0">
                <div class="vi-font-weight--bold vi-font-size--large">
                  开启账号
                </div>
              </template>
              <template v-else>
                <div class="vi-font-weight--bold vi-font-size--large">
                  关闭账号
                </div>
              </template>
            </template>
            <template v-if="params.handler === 'del'">
              <div class="vi-font-weight--bold vi-font-size--large">
                删除账号
              </div>
            </template>
          </div>
          <div class="vi-margin-bottom vi-center">
            <vui-image
              height="24px"
              width="40px"
              fill-type="height"
              align-type="center"
              :src="getType(params.type)['icon']"
            >
            </vui-image>
          </div>
          <div>
            <span class="vi-color--primary">{{ params.name }}</span>
          </div>
        </template>
      </div>
      <div class="vi-border is-border--bottom is-border--thiner">
        <div class=" vi-input is-input--larger is-inre">
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

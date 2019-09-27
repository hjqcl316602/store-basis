<script>
import { getWallet } from "../request";
export default {
  name: "",
  data() {
    return {
      message: {}
    };
  },
  props: {},
  computed: {},
  methods: {
    getWallet() {
      getWallet().then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          let list = data["data"] || [];
          this.message =
            list.find(el => {
              return el.coin && el.coin.name === "TTM";
            }) || {};
        } else {
          this.$message.danger("获取我的钱包失败");
        }
      });
    },
    toTransfer() {
      this.$router.push({
        path: "/transfer",
        query: {
          type: "inner"
        }
      });
    }
  },
  mounted() {
    this.getWallet();
  }
};
</script>

<template>
  <div class="vv-panel vi-padding--large" style="min-height: 100vh">
    <div class="vi-flex vi-margin-bottom" style="line-height: 28px">
      <div
        style="width: 100px"
        class="vi-text-align--right vi-padding-right--large"
      >
        <span class="vi-color--gray">
          币种
        </span>
      </div>
      <div class=" ">
        <span class="">
          {{ message.coin ? message.coin.name : "" }}
        </span>
      </div>
    </div>
    <div class="vi-flex vi-margin-bottom" style="line-height: 28px">
      <div
        style="width: 100px"
        class="vi-text-align--right vi-padding-right--large"
      >
        <span class="vi-color--gray">
          可用
        </span>
      </div>
      <div class=" ">
        <span class=" vi-color--primary">
          {{ message.balance }}
        </span>
      </div>
    </div>
    <div class="vi-flex vi-margin-bottom" style="line-height: 28px">
      <div
        style="width: 100px"
        class="vi-text-align--right vi-padding-right--large"
      >
        <span class="vi-color--gray">
          冻结
        </span>
      </div>
      <div class=" ">
        <span class="">
          {{ message.frozenBalance }}
        </span>
      </div>
    </div>
    <div class="vi-text-align--right">
      <div
        class="vi-btn is-btn--primary is-btn--radius is-btn--hollow is-btn--thiner"
        @click="toTransfer"
      >
        内部转账
      </div>
    </div>
  </div>
</template>

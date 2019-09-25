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
        query: { unit: this.message.coin.name, balance: this.message.balance }
      });
    }
  },
  mounted() {
    this.getWallet();
  }
};
</script>

<template>
  <div class="vv-money">
    <div class="vv-panel">
      <div class="vi-padding--large" @click="action.show = true">
        <div
          class="vi-flex vi-align-items--center vi-justify-content--space-between vi-margin-bottom"
        >
          <div>
            <span class="vi-color--gray">
              币种
            </span>
          </div>
          <div class=" ">
            <span class="vi-font-weight--bold">
              {{ message.coin ? message.coin.name : "" }}
            </span>
          </div>
        </div>
        <div
          class="vi-flex vi-align-items--center vi-justify-content--space-between vi-margin-bottom"
        >
          <div>
            <span class="vi-color--gray">
              可用
            </span>
          </div>
          <div class=" ">
            <span class="vi-font-weight--bold">
              {{ message.balance }}
            </span>
          </div>
        </div>
        <div
          class="vi-flex vi-align-items--center vi-justify-content--space-between vi-margin-bottom"
        >
          <div>
            <span class="vi-color--gray">
              冻结
            </span>
          </div>
          <div class=" ">
            <span class="vi-font-weight--bold">
              {{ message.frozenBalance }}
            </span>
          </div>
        </div>
        <div class="vi-text-align--right">
          <div
            class="vi-btn is-btn--primary is-btn--radius is-btn--smaller is-btn--hollow is-btn--thiner"
            @click="toTransfer"
          >
            内部转账
          </div>
        </div>
      </div>
    </div>
    <vui-swipe-cell v-if="false">
      <div slot="right" class="vi-btn-group" style="height:100%">
        <div
          class="vi-btn is-btn--pack is-btn--primary  "
          style="height:100%;display: flex;align-items: center;padding: 16px"
          @click="
            $router.push({
              path: '/transfer',
              query: { unit: message.coin.name, balance: message.balance }
            })
          "
        >
          <span class="vi-font-weight--bold">内部转账</span>
        </div>
      </div>
    </vui-swipe-cell>
  </div>
</template>

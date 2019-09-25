<script>
import { getTransaction } from "../request";
const recordTypes = [
  {
    value: 0,
    label: "充值"
  },
  {
    value: 1,
    label: "提现"
  },
  {
    value: 2,
    label: "转账"
  },
  {
    value: 3,
    label: "币币交易"
  },
  {
    value: 4,
    label: "法币买入"
  },
  {
    value: 5,
    label: "法币卖出"
  },
  {
    value: 6,
    label: "活动奖励"
  },
  {
    value: 7,
    label: "推广奖励"
  },
  {
    value: 8,
    label: "分红"
  },
  {
    value: 9,
    label: "投票"
  },
  {
    value: 10,
    label: "人工充值"
  },
  {
    value: 11,
    label: "配对"
  },
  {
    value: 12,
    label: "佣金奖励"
  }
];
export default {
  name: "",
  data() {
    return {
      params: {
        pageNo: 1,
        pageSize: 10,
        list: [],
        total: 0,
        load: false
      }
    };
  },
  props: {},
  computed: {
    canLoad() {
      return !this.params.load && this.params.list.length !== this.params.total;
    }
  },
  methods: {
    getTransaction(more = false) {
      if (this.params.load) return false;
      this.params.load = true;
      getTransaction({
        pageNo: this.params.pageNo,
        pageSize: this.params.pageSize
      })
        .then(res => {
          let data = res["data"];
          if (data["code"] === 0) {
            if (more) {
              this.params.list = this.params.list.concat(
                data["data"]["content"]
              );
            } else {
              this.params.list = data["data"]["content"];
            }
            this.params.total = data["data"]["totalElements"] || 0;
            console.log(this.params.total, this.params.list.length);
          } else {
            this.$message.danger("获取流水列表失败");
          }
          this.params.load = false;
        })
        .catch(err => {
          if (more) {
            this.params.pageNo--;
          }
          this.params.load = false;
        });
    },
    loadmore() {
      this.params.pageNo++;
      this.getTransaction(true);
    },
    getRecordType(type) {
      return (
        recordTypes.find(el => {
          return el.value === type;
        }) || {}
      );
    }
  },

  mounted() {
    this.getTransaction();
  }
};
</script>

<template>
  <div class="vv-record">
    <vui-loadmore @load="loadmore" :can-load="canLoad">
      <div
        class="vv-panel vi-border is-border--bottom is-border--thiner"
        v-for="(item, index) in params.list"
        :key="index"
      >
        <div class="vi-padding--large">
          <div
            class="vi-flex vi-justify-content--space-between vi-align-items--center vi-margin-bottom"
          >
            <div>
              <span class="vi-color--gray">
                数量
              </span>
            </div>
            <div class="">
              <span
                class=" vi-font-weight--bold vi-font-size--large "
                :class="{
                  'vi-color--danger': Number(item.amount) < 0,
                  'vi-color--primary': Number(item.amount) >= 0
                }"
              >
                {{ item.amount }}
              </span>
            </div>
          </div>
          <div
            class="vi-flex vi-justify-content--space-between vi-align-items--center vi-margin-bottom"
          >
            <div>
              <span class="vi-color--gray">
                币种
              </span>
            </div>
            <div class="">
              <span class="vi-color--light">
                {{ item["symbol"] }}
              </span>
            </div>
          </div>
          <div
            class="vi-flex vi-justify-content--space-between vi-align-items--center vi-margin-bottom"
          >
            <div>
              <span class="vi-color--gray">
                类型
              </span>
            </div>
            <div class="">
              <span class="vi-color--light">
                {{ getRecordType(item["type"])["label"] }}
              </span>
            </div>
          </div>

          <div
            class="vi-flex vi-justify-content--space-between vi-align-items--center"
          >
            <div>
              <span class="vi-color--gray">
                交易时间
              </span>
            </div>
            <div class="">
              <span class="vi-color--light">
                {{ item.createTime }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        slot="footer"
        v-if="params.total > 5 && params.total === params.list.length"
        class="vi-padding--large vi-text-align--center"
      >
        <span class="vi-color--gray">总共{{ this.params.total }}条流水</span>
      </div>
    </vui-loadmore>
  </div>
</template>

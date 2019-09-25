<script>
import {
  getAdvertiseAll,
  onAdvertise,
  offAdvertise,
  deleteAdvertise
} from "../request/advert";
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
        pageNo: 1,
        pageSize: 10,
        list: [],
        total: 0,
        load: false
      },
      detail: {
        popup: false,
        message: {}
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
    init() {
      this.params.pageNo = 1;
      this.getAdvertiseAll();
    },
    getAdvertiseAll(more = false) {
      if (this.params.load) return false;
      this.params.load = true;
      getAdvertiseAll({
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
            this.params.list = this.params.list.sort((a, b) => {
              return a.status - b.status;
            });
            this.params.total = data["data"]["totalElements"];
            console.log(this.params.total, this.params.list.length);
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
    onAdvertise() {
      onAdvertise({
        id: this.detail.message.id
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.init();
          this.$message.success(data.message);
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    offAdvertise() {
      offAdvertise({
        id: this.detail.message.id
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.init();
          this.$message.success(data.message);
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    deleteAdvertise() {
      deleteAdvertise({
        id: this.detail.message.id
      }).then(res => {
        let data = res.data;
        if (data.code === 0) {
          this.init();
          this.$message.success(data.message);
        } else {
          this.$message.danger(data.message);
        }
      });
    },
    loadmore() {
      this.params.pageNo++;
      this.getAdvertiseAll(true);
    },
    getType(type) {
      return (
        types.find(ele => {
          return ele["text"] === type;
        }) || {}
      );
    },
    handler(type) {
      this.detail.popup = false;
      if (type === "on") {
        this.onAdvertise();
      } else if (type === "off") {
        this.offAdvertise();
      } else if (type === "del") {
        this.deleteAdvertise();
      } else if (type === "update") {
        this.$router.push({
          path: "/advert-edit/update",
          query: { id: this.detail.message.id }
        });
      }
    },
    select(item) {
      this.detail.popup = true;
      this.detail.message = item;
      //localStorage.setItem("advert-detail", JSON.stringify(item));
      //this.$router.push("/advert-detail");
    }
  },

  mounted() {
    this.init();
  }
};
</script>

<template>
  <div class="vv-advert" style="padding-bottom: 50px">
    <vui-popup v-model="detail.popup" type="right">
      <div style="max-width: 80vw">
        <div class="vi-padding--large">
          <div class="vi-margin-bottom--large  ">
            <vui-image
              height="24px"
              width="40px"
              fill-type="height"
              align-type="left"
              :src="getType(detail.message.payMode)['icon']"
            >
            </vui-image>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              状态
            </span>

            <template v-if="detail.message.status === 0">
              <span class="vi-flex--1 vi-font-weight--bold vi-color--danger">
                上架中
              </span>
            </template>
            <template v-else>
              <span class="vi-flex--1 vi-font-weight--bold">
                未上架
              </span>
            </template>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              剩余数量
            </span>
            <span class="vi-flex--1 vi-font-weight--bold vi-color--primary">
              {{ detail.message.remainAmount }}
            </span>
          </div>

          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              支付方式
            </span>
            <span class="vi-flex--1  ">
              {{ detail.message.payMode }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              类型
            </span>
            <span class="vi-flex--1  ">
              {{ detail.message.advertiseType === 1 ? "在线出售" : "在线购买" }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              币种
            </span>
            <span class="vi-flex--1   ">
              {{ detail.message.coin ? detail.message.coin.name : "--" }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              数量
            </span>
            <span class="vi-flex--1  ">
              {{ detail.message.number }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              单价
            </span>
            <span class="vi-flex--1   "> {{ detail.message.price }}CNY </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              限额
            </span>
            <span class="vi-flex--1   ">
              {{ detail.message.minLimit }}~{{ detail.message.maxLimit }}CNY
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              创建时间
            </span>
            <span class="vi-flex--1   ">
              {{ detail.message.createTime }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              更新时间
            </span>
            <span class="vi-flex--1   ">
              {{ detail.message.updateTime }}
            </span>
          </div>
          <div class="vi-margin-bottom--small vi-flex vi-align-items--center">
            <span
              class="vi-color--gray vi-text-align--right vi-padding-right--large"
              style="width:80px"
            >
              编号
            </span>
            <span class="vi-flex--1   ">
              {{ detail.message.id }}
            </span>
          </div>

          <div class="vi-text-align--right">
            <template v-if="detail.message.status === 1">
              <template v-if="detail.message.remainAmount > 0">
                <div
                  class="vi-btn is-btn--hollow is-btn--warning is-btn--thiner is-btn--radius is-btn--smaller"
                  @click="handler('on')"
                >
                  <span>上架</span>
                </div>
              </template>
              <div
                class="vi-btn is-btn--hollow is-btn--primary is-btn--thiner is-btn--radius is-btn--smaller"
                @click="handler('update')"
              >
                <span>修改</span>
              </div>
              <div
                class="vi-btn is-btn--hollow is-btn--danger is-btn--thiner is-btn--radius is-btn--smaller"
                @click="handler('del')"
              >
                <span>删除</span>
              </div>
            </template>
            <template v-else>
              <div
                class="vi-btn is-btn--hollow is-btn--warning is-btn--thiner is-btn--radius is-btn--smaller"
                @click="handler('off')"
              >
                <span>下架</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </vui-popup>
    <vui-loadmore @load="loadmore" :can-load="canLoad">
      <div
        class="vv-panel vi-border is-border--bottom is-border--thiner vi-padding--large"
        v-for="(item, index) in params.list"
        :key="index"
        @click="select(item)"
      >
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <vui-image
              height="24px"
              width="40px"
              fill-type="height"
              align-type="left"
              :src="getType(item.payMode)['icon']"
            >
            </vui-image>
            <span
              class="vi-color--danger vi-font-weight--bold"
              v-if="item.status === 0"
            >
              上架中
            </span>
          </div>
        </div>
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <span class="vi-color--gray">剩余数量</span>
            <span class="vi-font-weight--bold vi-color--primary">
              {{ item.remainAmount }}
            </span>
          </div>
        </div>
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <span class="vi-color--gray">类型</span>
            <span class="vi-color--light">
              {{ item.advertiseType === 1 ? "在线出售" : "在线购买" }}
            </span>
          </div>
        </div>
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <span class="vi-color--gray">币种</span>
            <span class="vi-color--light">
              {{ item.coin ? item.coin.name : "--" }}
            </span>
          </div>
        </div>
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <span class="vi-color--gray">单价</span>
            <span class="vi-color--light"> {{ item.price }}CNY </span>
          </div>
        </div>
        <div class="vi-margin-bottom--small">
          <div class="vi-flex vi-justify-content--space-between">
            <span class="vi-color--gray">限额</span>
            <span class="vi-color--light">
              {{ item.minLimit }}~{{ item.maxLimit }}CNY
            </span>
          </div>
        </div>
        <!--<div class="vi-margin-bottom&#45;&#45;small">-->
        <!--<div class="vi-flex vi-justify-content&#45;&#45;space-between">-->
        <!--<span class="vi-color&#45;&#45;gray">创建时间</span>-->
        <!--<span class="vi-color&#45;&#45;light">{{ item.createTime }}</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="vi-margin-bottom&#45;&#45;small">-->
        <!--<div class="vi-flex vi-justify-content&#45;&#45;space-between">-->
        <!--<span class="vi-color&#45;&#45;gray">更新时间</span>-->
        <!--<span class="vi-color&#45;&#45;light">{{ item.updateTime }}</span>-->
        <!--</div>-->
        <!--</div>-->
      </div>
      <div
        slot="footer"
        v-if="params.total > 5 && params.total === params.list.length"
        class="vi-padding--large vi-text-align--center"
      >
        <span class="vi-color--gray">总共{{ this.params.total }}条广告</span>
      </div>
    </vui-loadmore>

    <div class="vv-footer">
      <div
        class="vi-btn-group   vv-panel vi-border is-border--top is-border--thiner"
      >
        <div
          class="vi-btn is-btn--long is-btn--primary "
          style="line-height: 50px;height:50px"
          @click="$router.push({ path: '/advert-edit/create' })"
        >
          发布广告
        </div>
      </div>
    </div>
  </div>
</template>

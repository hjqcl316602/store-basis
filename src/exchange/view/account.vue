<script>
import { getAccount, deleteAccount } from "../request";
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
  name: "vv-account",
  data() {
    return {
      params: {
        list: []
      },
      detail: {
        show: false,
        message: {}
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      this.getAccount();
    },
    getAccount() {
      getAccount().then(res => {
        let data = res["data"];
        if (data.code === 0) {
          let list = data["data"];
          this.params.list = list
            .filter(item => item["checked"] === 1)
            .sort(function(a, b) {
              return a.type - b.type;
            })
            .concat(
              list
                .filter(item => item["checked"] === 0)
                .sort(function(a, b) {
                  return a.type - b.type;
                })
            );
        } else {
          this.$message.danger(data["message"]);
        }
      });
    },
    getType(type) {
      return (
        types.find(ele => {
          return ele["value"] === type;
        }) || {}
      );
    },

    handler(type) {
      this.$router.push({
        path: "/confirm",
        query: {
          id: this.detail.message.id,
          handler: type,
          target: "account",
          type: this.detail.message.type,
          checked: this.detail.message.checked,
          name:
            this.detail.message.type === 1
              ? this.detail.message.url
              : this.detail.message.name
        }
      });
    },
    selectAcount(item) {
      this.detail.show = true;
      this.detail.message = item;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<template>
  <div class="vv-account">
    <vui-popup v-model="detail.show" type="right">
      <div style="width: 80vw">
        <div class="vi-padding--large">
          <div class="">
            <div class="vi-margin-bottom--large">
              <vui-image
                height="28px"
                width="40px"
                fill-type="height"
                align-type="left"
                :src="getType(detail.message.type)['icon']"
              >
              </vui-image>
            </div>
            <template v-if="detail.message.type === 1">
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                  >卡号</span
                >
                <span class="vi-font-weight--bold vi-color--primary vi-flex--1">
                  {{ detail.message.url }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                  >真实姓名</span
                >
                <span class=" vi-flex--1">
                  {{ detail.message.realName }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  开户行
                </span>
                <span class=" vi-flex--1">
                  {{ detail.message.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                  >简称</span
                >
                <span class=" vi-flex--1">
                  {{ detail.message.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template
              v-if="detail.message.type === 2 || detail.message.type === 4"
            >
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                  >账号</span
                >
                <span class="vi-font-weight--bold vi-color--primary vi-flex--1">
                  {{ detail.message.name }}
                </span>
              </div>
            </template>
            <template v-if="detail.message.type === 3">
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  账号
                </span>
                <span class="vi-font-weight--bold vi-color--primary vi-flex--1">
                  {{ detail.message.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  真实姓名
                </span>
                <span class=" vi-flex--1">
                  {{ detail.message.realName }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  ID号
                </span>
                <span class=" vi-flex--1">
                  {{ detail.message.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="detail.message.type === 5">
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  账号
                </span>
                <span class="vi-font-weight--bold vi-color--primary vi-flex--1">
                  {{ detail.message.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-align-items--center"
                style="line-height: 28px"
              >
                <span
                  class="vi-color--gray vi-text-align--right vi-padding-right--large"
                  style="width:80px"
                >
                  支付方式
                </span>
                <span class=" vi-flex--1">
                  {{ detail.message.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="detail.message.type !== 1">
              <div class="vi-margin-bottom  " style="height:50vh;width:100%;">
                <vui-image
                  :lazy="false"
                  height="100%"
                  width="100%"
                  fill-type="max"
                  align-type="center"
                  :src="detail.message.originUrl"
                  :showDelay="200"
                >
                  <div slot="loading">
                    <vui-loading-round></vui-loading-round>
                  </div>
                </vui-image>
              </div>
            </template>
            <div class="vi-text-align--right">
              <div
                class="vi-btn is-btn--primary is-btn--radius   is-btn--hollow is-btn--thiner"
                v-if="detail.message.checked === 0"
                @click="handler('toggle')"
              >
                开启
              </div>
              <div
                class="vi-btn is-btn--warning is-btn--radius   is-btn--hollow is-btn--thiner"
                v-else
                @click="handler('toggle')"
              >
                关闭
              </div>
              <div
                class="vi-btn is-btn--danger is-btn--radius   is-btn--hollow is-btn--thiner"
                v-if="detail.message.checked === 0"
                @click="handler('del')"
              >
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
    </vui-popup>
    <div
      class="vi-border is-border--bottom is-border--thiner"
      v-for="(item, index) in params.list"
      :key="index"
      @click="selectAcount(item)"
    >
      <div class="vv-panel vi-padding--large">
        <div class=" vi-margin-bottom">
          <div class="">
            <div
              class="vi-flex vi-justify-content--space-between"
              style="line-height: 36px"
            >
              <div class="">
                <vui-image
                  height="28px"
                  width="40px"
                  fill-type="height"
                  align-type="left"
                  :src="getType(item.type)['icon']"
                >
                </vui-image>
              </div>
              <div class="">
                <template v-if="item['checked'] === 1">
                  <span class="vi-font-weight--bold vi-color--danger">
                    已开启
                  </span>
                </template>
              </div>
            </div>
          </div>
          <div class="">
            <template v-if="item.type === 1">
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">卡号</span>
                <span class="vi-font-weight--bold vi-color--primary">
                  {{ item.url }}
                </span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">真实姓名</span>
                <span class="">{{ item.realName }}</span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">开户行</span>
                <span class="">
                  {{ item.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">简称</span>
                <span class="">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="item.type === 2 || item.type === 4">
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">账号</span>
                <span class="vi-font-weight--bold vi-color--primary">
                  {{ item.name }}
                </span>
              </div>
            </template>
            <template v-if="item.type === 3">
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">账号</span>
                <span class="vi-font-weight--bold vi-color--primary">
                  {{ item.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">真实姓名</span>
                <span class="">{{ item.realName }}</span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">ID号</span>
                <span class="">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="item.type === 5">
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray ">账号</span>
                <span class="vi-font-weight--bold vi-color--primary">
                  {{ item.name }}
                </span>
              </div>
              <div
                class=" vi-flex vi-justify-content--space-between"
                style="line-height: 28px"
              >
                <span class="vi-color--gray">支付方式</span>
                <span class="vi-color--light">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
          </div>
        </div>
        <div class="vi-text-align--right" v-if="false">
          <div
            class="vi-btn  is-btn--radius is-btn--smaller is-btn--hollow is-btn--thiner"
            v-if="item.type !== 1"
            @click="preview(item)"
          >
            预览
          </div>
          <div
            class="vi-btn is-btn--primary is-btn--radius is-btn--smaller is-btn--hollow is-btn--thiner"
            v-if="item.checked === 0"
            @click="handler('toggle', item)"
          >
            开启
          </div>
          <div
            class="vi-btn is-btn--warning is-btn--radius is-btn--smaller is-btn--hollow is-btn--thiner"
            v-else
            @click="handler('toggle', item)"
          >
            关闭
          </div>
          <div
            class="vi-btn is-btn--danger is-btn--radius is-btn--smaller is-btn--hollow is-btn--thiner"
            v-if="item.checked === 0"
            @click="handler('del', item)"
          >
            删除
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

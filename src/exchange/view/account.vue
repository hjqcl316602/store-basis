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
      popup: {
        show: false,
        url: ""
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
    preview(item) {
      this.popup.url = item.originUrl;

      if (this.popup.url) {
        this.popup.show = true;
      }
    },
    handler(type, item) {
      this.$router.push({
        path: "/confirm",
        query: {
          id: item.id,
          target: type + "-account",
          type: item.type,
          checked: item.checked
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
  <div class="vv-account">
    <vui-popup v-model="popup.show" type="bottom">
      <div class="vi-padding">
        <div style="height:500px">
          <vui-image
            :lazy="false"
            height="100%"
            width="100%"
            fill-type="max"
            align-type="center"
            :src="popup.url"
            :showDelay="500"
          >
            <div slot="loading">
              <vui-loading-round></vui-loading-round>
            </div>
          </vui-image>
        </div>
      </div>
    </vui-popup>
    <div
      class="vi-margin-bottom"
      v-for="(item, index) in params.list"
      :key="index"
    >
      <div class="vv-panel vi-padding--large">
        <div class=" vi-margin-bottom--large">
          <div class="vi-margin-bottom">
            <div class="vi-flex vi-justify-content--space-between">
              <div class="vi-margin-bottom">
                <vui-image
                  height="24px"
                  width="40px"
                  fill-type="height"
                  align-type="left"
                  :src="getType(item.type)['icon']"
                >
                </vui-image>
              </div>
              <div class="">
                <template v-if="item['checked'] === 1">
                  <i class="iconfont icon-xing vi-color--warning"></i>
                </template>
              </div>
            </div>
          </div>
          <div class="">
            <template v-if="item.type === 1">
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">卡号</span>
                <span class="vi-font-weight--bold">{{ item.url }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">真实姓名</span>
                <span class="vi-color--light">{{ item.realName }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">开户行</span>
                <span class="vi-color--light">{{ item.name }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">简称</span>
                <span class="vi-color--light">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="item.type === 2 || item.type === 4">
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">账号</span>
                <span class="vi-font-weight--bold">{{ item.name }}</span>
              </div>
            </template>
            <template v-if="item.type === 3">
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">账号</span>
                <span class="vi-font-weight--bold">{{ item.name }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">真实姓名</span>
                <span class="vi-color--light">{{ item.realName }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">ID号</span>
                <span class="vi-color--light">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
            <template v-if="item.type === 5">
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">账号</span>
                <span class="vi-font-weight--bold">{{ item.name }}</span>
              </div>
              <div
                class="vi-margin-bottom vi-flex vi-justify-content--space-between"
              >
                <span class="vi-color--gray">支付方式</span>
                <span class="vi-color--light">
                  {{ item.alipayOrMask || "--" }}
                </span>
              </div>
            </template>
          </div>
        </div>
        <div class="  vi-text-align--right">
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
      <vui-swipe-cell v-if="false">
        <div slot="right" class="vi-btn-group vi-flex" style="height: 100%">
          <div
            class="vi-btn is-btn--pack is-btn--primary"
            @click.stop.prevent="handler('toggle', item)"
            style="height: 100%;display: flex;align-items: center"
            v-if="item.checked === 0"
          >
            开启
          </div>
          <div
            class="vi-btn is-btn--pack is-btn--warning"
            @click.stop.prevent="handler('toggle', item)"
            style="height: 100%;display: flex;align-items: center"
            v-else
          >
            关闭
          </div>
          <div
            v-if="item.checked === 0"
            class="vi-btn is-btn--pack is-btn--danger"
            @click.stop.prevent="handler('del', item)"
            style="height: 100%;display: flex;align-items: center"
          >
            删除
          </div>
        </div>
      </vui-swipe-cell>
    </div>
  </div>
</template>

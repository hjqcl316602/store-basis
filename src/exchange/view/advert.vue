<script>
export default {
  name: "vv-advert",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<template>
  <div class="vv-advert" style="padding-bottom: 50px">
    <div
      class="vv-panel vi-border is-border--bottom is-border--thiner vi-padding--large"
      v-for="item in 10"
    >
      <div class="vi-flex ">
        <div class="vi-margin-right--large">
          <i class="iconfont icon-mima"></i>
        </div>
        <div class="vi-flex--1">
          <div class="vi-flex vi-margin-bottom">
            <div class="  vi-padding-right--large">
              <span class="vi-color--gray">
                交易方式
              </span>
            </div>
            <div class="vi-flex--1">
              <span>
                支付宝
              </span>
            </div>
          </div>
          <div class="vi-flex vi-margin-bottom">
            <div class=" vi-padding-right--large">
              <span class="vi-color--gray">
                广告类型
              </span>
            </div>
            <div class="vi-flex--1">
              <span>
                在线出售
              </span>
            </div>
          </div>
          <div class="vi-flex vi-margin-bottom">
            <div class=" vi-padding-right--large">
              <span class="vi-color--gray">
                剩余数量
              </span>
            </div>
            <div class="vi-flex--1">
              <span>
                10000
              </span>
            </div>
          </div>
          <div class="vi-flex vi-margin-bottom">
            <div class=" vi-padding-right--large">
              <span class="vi-color--gray">
                订单限额
              </span>
            </div>
            <div class="vi-flex--1">
              <span>
                100~10000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vv-footer">
      <div
        class="vi-btn-group   vv-panel vi-border is-border--top is-border--thiner"
      >
        <div
          class="vi-btn is-btn--long is-btn--primary "
          style="line-height: 50px;height:50px"
        >
          发布广告
        </div>
      </div>
    </div>
  </div>
</template>

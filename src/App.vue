<template>
  <div id="app">
    <div style="height:400px;background:#fff" class="vi-center">
      <div
        style="height:100px;width:100px;background:transparent"
        class="vi-border-bottom  vi-border--thiner"
      >
        <span class="vi-color--danger vi-margin-left--large">ashj</span>
      </div>
    </div>
    <div class="vi-row--flex vi-row-gutter--larger">
      <div class="vi-span--6">
        <div class="name">
          <div class="vi-row--flex vi-row-gutter--small">
            <div class="vi-span--6">
              <div class="blue"></div>
            </div>
            <div class="vi-span--6">
              <div class="blue"></div>
            </div>
            <div class="vi-span--6">
              <div class="blue"></div>
            </div>
            <div class="vi-span--6">
              <div class="blue"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="vi-span--6">
        <div class="name"></div>
      </div>
      <div class="vi-span--6">
        <div class="name"></div>
      </div>
      <div class="vi-span--6">
        <div class="name"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  mounted() {},
  methods: {
    change() {}
  }
};
</script>

<style>
.name {
  height: 100px;
  background: red;
}
.blue {
  height: 100px;
  background: blue;
}
</style>




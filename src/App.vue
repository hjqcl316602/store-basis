<template>
  <div id="app">
    <div class="main"></div>
    <span class="vc-text">
      {{ $store.state.basis.name }}
    </span>
    <button @click="change">change</button>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  mounted() {},
  methods: {
    change() {
      this.$store.commit("change/name", "huang");
    }
  }
};
</script>

<style>
</style>




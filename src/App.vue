<template>
  <div id="app">
    <div style="height:400px;background:#fff" class="jq-center">
      <div
        style="height:50px;width:100px;"
        class="jq-align-items--center jq-border-top jq-border--thiner jq-border--lighter"
      ></div>
      <div
        style="height:100px;width:100px;background:red"
        class="jq-border-radius--half"
      ></div>
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
</style>




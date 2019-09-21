<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  computed: mapState({
    name: "name"
  }),
  methods: {},
  mounted() {}
};
</script>

<template>
  <div class="">
    <router-view />
  </div>
</template>

<script>
import { loginCheck } from "./request/login";
import { getTraddingOrder } from "./request/order";
import { mapState } from "vuex";
import { orderTradding } from "./assets";

export default {
  name: "",
  data() {
    return {
      audio: {
        src: orderTradding,
        timer: null
      }
    };
  },
  props: {},
  computed: mapState({
    orderNoticeDuration: state => state.order.notice.duration
  }),
  methods: {
    loginCheck() {
      loginCheck().then(res => {
        let data = res["data"];
        if (data["code"] === 0) {
          let message = data.data;
          if (message != null) {
            let token = message.token;
            this.$store.commit("set/member", message);
            localStorage.setItem("service/token", token);
            this.setTimer();
          } else {
            setTimeout(() => {
              this.$router.push("/login");
              localStorage.setItem("login/redirect", window.location.href);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            localStorage.setItem("login/redirect", window.location.href);
            this.$router.push("/login");
          }, 1000);
          this.$message.danger(data.message);
        }
      });
    },
    getTraddingOrder() {
      getTraddingOrder().then(res => {
        let data = res.data;
        if (data.code === 0) {
          let message = data.data;
          let total = message.sell + message.buy + message.appeal;
          if (total > 0) {
            this.playAudio();
          }
          this.$store.commit("set/order/traddding", data["data"]);
        } else {
          this.$message.danger(data["message"]);
        }
      });
    },
    setTimer() {
      this.clearTimer();
      if (
        Number.isNaN(this.orderNoticeDuration - 0) ||
        this.orderNoticeDuration - 0 === 0
      )
        return false;
      this.getTraddingOrder();
      this._timer = setInterval(() => {
        this.getTraddingOrder();
      }, this.orderNoticeDuration - 0);
    },
    clearTimer() {
      clearInterval(this._timer);
      this._timer = null;
    },
    playAudio() {
      var audio = document.getElementById("orderTradding");
      if (audio !== null) {
        try {
          audio.play();
        } catch (error) {
          console.log("音频播放失败");
        }
      }
    }
  },
  watch: {
    orderNoticeDuration(val) {
      this.setTimer();
    }
  },
  created() {
    this.loginCheck();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  mounted() {}
};
</script>

<template>
  <div class="">
    <audio id="orderTradding" :src="audio.src">
      您的浏览器不支持 audio 标签。
    </audio>
    <router-view />
  </div>
</template>

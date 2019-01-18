<template>
  <div class="home">
    <left-control class="leftcrol"></left-control>
    <div class="home-container">
      <head-img class="head-img"></head-img>
      <red-btn class="red-btn" @click.native="onClick" context="转发集福"></red-btn>
    </div>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import redBtn from "@c/red-btn";
import headImg from "@c/head-img";
export default {
  name: "home",
  components: { leftControl, redBtn, headImg },
  methods: {
    onClick () {
      console.log("dianji");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/img/footer.gif") no-repeat center,
    url("../assets/img/bg1.gif") no-repeat center;
  background-size: 100% 100%;
  &-container {
    position: absolute;
    // background-color: rgba(21, 32, 31, 0.3);
    width: 345px;
    height: 275px;
    top: 265px;
    left: 50%;
    transform: translateX(-50%);
  }
  .leftcrol {
    position: absolute;
    right: 0;
    top: 90px;
  }
  .head-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .red-btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

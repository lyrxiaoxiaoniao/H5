<template>
  <div class="openpack">
    <div @click.self="toWeChat" class="openpack-header">
      <left-control @click.native="clickon" class="leftcrol"></left-control>
    </div>
    <div class="openpack-container">
      <div class="content">
        <title-img></title-img>
        <head-img class="head-img"></head-img>
        <text-list></text-list>
      </div>
    </div>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import titleImg from "@c/title-img";
export default {
  name: "openpack",
  components: { leftControl, headImg, textList, titleImg },
  methods: {
    onClick() {
      console.log("dianji");
    },
    toWeChat() {
      this.$router.push("search");
    },
    clickon() {
      console.log(12312312);
    }
  }
};
</script>

<style lang="less" scoped>
.openpack {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/img/footer.gif") no-repeat center,
    url("../assets/bg/bg3.png") no-repeat center;
  // background: url("../assets/img/footer.gif") no-repeat center,
  //   url("../assets/bg/bg3.png") no-repeat center;
  background-size: 100% 100%;
  &-header {
    width: 100%;
    height: 270px;
    .leftcrol {
      position: absolute;
      right: 0;
      top: 80px;
    }
  }
  &-container {
    position: absolute;
    top: 255px;
    width: 100%;
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="forward">
    <div @click.self="toWeChat" class="forward-header">
      <left-control @click.native="clickon"  class="leftcrol"></left-control>
    </div>
    <div class="forward-container">
      <div class="content">
        <title-img></title-img>
        <text-list></text-list>
        <head-img class="head-img"></head-img>
        <red-btn context="我也要许愿"></red-btn>
      </div>
    </div>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import titleImg from "@c/title-img";
import redBtn from "@c/red-btn";
export default {
  name: "forward",
  components: { leftControl, headImg, titleImg,redBtn,textList },
  methods: {
    onClick () {
      console.log("dianji");
    },
    toWeChat () {
      this.$router.push('search')
    },
    clickon () {
      console.log(12312312)
    }
  }
};
</script>

<style lang="less" scoped>
.forward {
   position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/img/footer.gif") no-repeat center,
    url("../assets/bg/bg2.png") no-repeat center;
  background-size: 100% 100%;
  &-header {
    width: 100%;
    height: 270px;
    background-size: 100% 100%;
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
    .content{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>

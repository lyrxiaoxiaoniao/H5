<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header">
      <left-control @click.native="clickon" class="leftcrol"></left-control>
    </div>
    <div class="home-container">
      <div class="content">
        <title-img></title-img>
        <head-img class="head-img"></head-img>
        <text-list></text-list>
        <red-btn class="red-btn" @click.native="onClick" context="查看我的愿望"></red-btn>
      </div>
    </div>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import redBtn from "@c/red-btn";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import titleImg from "@c/title-img";
export default {
  name: "home",
  components: { leftControl, redBtn, headImg, textList, titleImg },
  data() {
    return {};
  },
  mounted() {
  },
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
.home {
  position: relative;
  width: 100%;
  height: 100%;
  &-header {
    width: 100%;
    height: 310px;
    .leftcrol {
      position: absolute;
      right: 0;
      top: 100px;
    }
  }
  &-container {
    position: absolute;
    top: 200px;
    width: 100%;
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
      &-title {
        color: #ffeb8d;
        font-size: 30px;
        .tip {
          font-size: 14px;
          span {
            letter-spacing: 8px;
          }
        }
      }
      .head-img {
        margin-top: 10px;
      }
      .red-btn {
        margin-top: 10px;
      }
    }
  }
}
</style>

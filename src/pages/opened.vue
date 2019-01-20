<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol"></left-control>
    <div class="home-container">
      <div class="content">
        <div class="money">
          <p>红包拆得</p>
          <p class="money-red">￥28.88</p>
        </div>
        <head-img class="head-img"></head-img>
        <red-btn class="red-btn" @click.native="onClick" context="查看我的愿望"></red-btn>
      </div>
    </div>
    <img class="home-bg" src="../assets/bg/bg22.png" alt>
    <div class="home-footer"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import redBtn from "@c/red-btn";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import dialogGuize from "@c/dialog";
import dialogRank from "@c/dialog-rank";
export default {
  components: { leftControl, redBtn, headImg, dialogGuize, dialogRank },
  data() {
    return {
      show: false,
      rankshow: false
    };
  },
  mounted() {
    console.log(document.body.offsetHeight);
  },
  methods: {
    onClick() {},
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
  height: 100%;
  width: 100%;
  overflow: auto;
  background: url("../assets/bg/bg-lline.png") repeat center;
  //   background: url("../assets/bg/bg-line4.png") repeat center;
  background-size: 100%;
  &-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 270px;
  }
  .leftcrol {
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 100;
  }
  &-container {
    position: absolute;
    top: 250px;
    width: 100%;
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
      .money {
        margin-top: 30px;
        color: #ca0100;
        text-align: center;
        &-red {
          line-height: 50px;
          font-size: 28px;
        }
        p {
          margin: 0;
          padding: 0;
        }
      }
      .head-img {
        margin-top: 10px;
      }
      .red-btn {
        margin-top: 50px;
      }
    }
  }
  &-bg {
    width: 100%;
    height: 600px;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: url("../assets/bg/footer.gif") repeat center;
    background-size: 100% 100%;
  }
}
</style>


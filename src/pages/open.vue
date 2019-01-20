<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol"></left-control>
    <div class="home-container">
      <div class="content">
        <title-img></title-img>
        <head-img class="head-img"></head-img>
        <text-list class="text-list"></text-list>
      </div>
    </div>
    <img class="home-bg" src="../assets/bg/bg33.png" alt>
    <div class="open-red" @click="openRed"></div>
    <div class="home-footer" :class="isIphonex?'heightX':''"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import titleImg from "@c/title-img";
import dialogGuize from "@c/dialog";
import dialogRank from "@c/dialog-rank";
export default {
  components: {
    leftControl,
    headImg,
    textList,
    titleImg,
    dialogGuize,
    dialogRank
  },
  data() {
    return {
      show: true,
      rankshow: false
    };
  },
  computed: {
    isIphonex() {
      const height = document.body.offsetHeight;
      return height > 700;
    }
  },
  mounted() {
    console.log(document.body.offsetHeight);
  },
  methods: {
    onClick() {},
    openRed() {
      console.log(1231232);
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
  height: 100%;
  width: 100%;
  overflow: auto;
  background: url("../assets/bg/bg-line.png") repeat center;
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
      .text-list {
        margin-top: 10px;
        width: 280px;
      }
      .red-btn {
        margin-top: 20px;
      }
    }
  }
  .open-red {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 490px;
    left: 50%;
    transform: translateX(-50%);
    // background: #fff;
    z-index: 10;
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
  .heightX {
    height: 150px;
  }
}
</style>


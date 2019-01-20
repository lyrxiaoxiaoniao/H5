<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol" ></left-control>
    <div class="home-container">
      <div class="content">
        <head-img class="head-img"></head-img>
        <input @focus="onFocus" class="select" type="text" placeholder="请选择你的愿望">
        <text-list class="text-list" close></text-list>
      </div>
    </div>
    <div @click="onShare" class="red-btn">转发集福送红包</div>
    <img class="home-bg" src="../assets/bg/bg4.png" alt>
    <div class="home-footer"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="visiable"></dialog-rank>
    <share :shareshow.sync="shareshow"></share>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import dialogGuize from "@c/dialog";
import dialogRank from "@c/dialog-rank";
import share from "@c/share";
export default {
  components: { leftControl, headImg, textList, dialogGuize, dialogRank, share },
  data() {
    return {
      shareshow: false,
      show: false,
      visiable: false
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
    clickon(e) {
      console.log(e);
    },
    onFocus() {
      this.$router.push("search");
    },
    onShare() {
      this.shareshow = !this.shareshow
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
  background: url("../assets/bg/bg-line44.png") repeat center;
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
      .select {
        margin-top: 20px;
        padding: 5px 10px;
        &::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #ae0100;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #ae0100;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #ae0100;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #ae0100;
        }
      }
      .head-img {
        margin-top: 10px;
      }
      .text-list {
        margin-top: 10px;
        width: 200px;
      }
    }
  }
  .red-btn {
    position: absolute;
    width: 170px;
    top: 521px;
    left: 58%;
    background-color: rgba(255, 35, 34, 0.6);
    color: #ffce99;
    text-align: center;
    font-size: 22px;
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
}
</style>


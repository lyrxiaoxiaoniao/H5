<template>
  <div class="forms">
    <div @click.self="toWeChat" class="forms-header">
      <left-control @click.native="clickon" class="leftcrol"></left-control>
    </div>
    <div class="forms-container">
      <div class="content">
        <div class="content-item"><head-img class="head-img"></head-img></div>
        <div class="content-item"><input @focus="onFocus" class="select" type="text" placeholder="请选择你的愿望"></div>
        <div class="content-item"><textList close></textList></div>
        <div class="content-item"><red-btn context="转发集福送红包"></red-btn></div>
      </div>
    </div>
  </div>
</template>

<script>
import leftControl from "@c/left-control";
import headImg from "@c/head-img";
import textList from "@c/text-list";
import redBtn from "@c/red-btn";
export default {
  name: "forms",
  components: { leftControl, headImg, textList ,redBtn},
  mounted() {
    console.log(document.body.offsetWidth, document.body.offsetHeight);
  },
  methods: {
    onClick() {
      console.log("dianji");
    },
    onFocus() {
      this.$router.push("search");
    }
  }
};
</script>

<style lang="less" scoped>
.forms {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/img/footer.gif") no-repeat center,
    url("../assets/bg/bg5.png") no-repeat center;
  // background: url("../assets/img/footer.gif") no-repeat center,
  //   url("../assets/bg/bg4.png") no-repeat center;
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
    display: flex;
    justify-content: center;
    .content {
      width: 250px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
      // border: 3px solid #fff;
      // border-radius: 10px;
      .select {
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
      &-item{
        margin-top: 10px; 
      }
    }
  }
}
</style>

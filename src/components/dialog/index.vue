<template>
  <div v-if="show" class="dialog">
    <div class="dialog-center">
      <div class="dialog-center-content">
        <div class="rule-title">
          活动主题：新春好运来
        </div>
        <div class="red">
          2019年1月24日00:00--2月10日00:00
        </div>
        <div class="rule-item">
          <div class="item-title">1.如何参与许愿集福</div>
          <div class="item-content">用户收到红包后，点击“我也要许愿”，在许下自己的新年愿望后，转发分享链接并邀请好友为新年愿望集福，点赞越多，福气值越高，则有机会获得我们价值888元“红运当头”3D硬金手串！</div>
        </div>
        <div class="rule-item">
          <div class="item-title">2.如何知道自己的排名</div>
          <div class="item-content">福气榜可以查看排名前20名的用户，在活动结束之前都可以有机会争取上榜！</div>
        </div>
        <div class="rule-item">
          <div class="item-title">3.关于奖品“红运当头”</div>
          <div class="item-content">J.PARK珠宝公园以中国锦鲤为设计原型，轮廓玲珑，造型灵动，鱼头上有红色如意纹，寓意鸿运当头，吉祥如意。2019年，转锦鲤不如戴锦鲤，戴上这条红运当头锦鲤，必将如鱼得水，心想事成，收获一年的好运。我们邀请了弘法寺大师为“红运当头”亲自开光，并将获奖者许的新年愿望带去祈福加持，祈福视频将会在公众号公开。</div>
        </div>
        <div class="rule-item">
          <div class="item-title">4.兑奖规则</div>
          <div class="item-content">活动结束后，我们将2月12日在【JPARK珠宝公园】微信公众号公布获奖名单及详细兑奖规则。获奖者在规定时间内，按照兑奖规则进行兑奖。</div>
        </div>
        <div class="rule-footer">本次活动解释权归J.PARK珠宝公园所有</div>
      </div>
      <div @click="onCloneRank" class="dialog-center-btn">朕知道了</div>
      <!-- <div @click="onCloneRank" class="dialog-center-close"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onCloneRank() {
      this.$emit("update:show", false);
    },
    onSubmit() {
      console.log('qweqweqwe')
    }
  }
};
</script>

<style lang="less" scoped>
.dialog {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  &-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 400px;
    background: url("../../assets/bg/rule.png") no-repeat center;
    background-size: 100% 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-content {
      position: absolute;
      bottom: 75px;
      left: 50%;
      transform: translateX(-50%);
      // background: #000;
      box-sizing: border-box;
      padding: 10px;
      width: 220px;
      height: 260px;
      overflow: auto;
    }
    &-btn{
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      // background: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      color: #fff;
      width: 100px;
      height: 40px;
    }
    &-close {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 25px;
      height: 25px;
      background: url("../../assets/bg/icon_del.png") no-repeat center;
      background-size: 100% 100%;
    }
  }
  .rule-title{
    text-align: center;
    // color: #ff4b24;
    font-size: 14px;
    line-height: 28px;
  }
  .red{
    color: #ff4b24;
    font-size: 10px;
    text-align: center;
  }
  .rule-item{
    margin-top: 10px;
    font-size: 10px;
  }
  .rule-footer{
    margin-top: 10px;
    font-size: 10px;
    text-align: center;
  }
  .item-title{
    font-size: 12px;
    color: #ff4b24;
  }
  .item-content{
    line-height: 16px;
  }
}
</style>


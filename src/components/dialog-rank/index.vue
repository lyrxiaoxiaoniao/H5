<template>
  <div v-if="visiable" class="rank">
    <div class="rank-center">
      <div class="rank-center-content">
        <div class="item">
          <!-- <div class="item-img default">4</div> -->
          <div class="item-img one"></div>
          <!-- <div class="item-img two"></div> -->
          <!-- <div class="item-img three"></div> -->
          <img class="item-avator" src="http://placehold.it/30x30/fff/ccc.png">
          <div class="item-text">梦想在哪儿</div>
          <div class="item-piao">159999票</div>
        </div>
      </div>
      <div @click="onCloneRank" class="rank-center-close"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visiable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onCloneRank() {
      this.$emit("update:visiable", false);
    }
  }
};
</script>

<style lang="less" scoped>
.rank {
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
    background: url("../../assets/bg/rank.png") no-repeat center;
    background-size: 100% 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-content {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 250px;
      height: 220px;
      overflow: auto;
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        &-img {
          width: 20px;
          height: 20px;
          line-height: 20px;
          margin-right: 5px;
        }
        &-avator {
          width: 25px;
          height: 25px;
          margin-right: 5px;
        }
        &-text {
          color: #333;
          font-size: 14px;
        }
        &-piao {
          flex: 1;
          text-align: right;
          color: #ff4b24;
          font-size: 14px;
        }
        .default {
          text-align: center;
          color: #fff;
          background-color: #f26b66;
          border-radius: 100%;
        }
        .one {
          background: url("../../assets/bg/icon_1.png") no-repeat center;
          background-size: 100% 100%;
        }
        .two {
          background: url("../../assets/bg/icon_2.png") no-repeat center;
          background-size: 100% 100%;
        }
        .three {
          background: url("../../assets/bg/icon_3.png") no-repeat center;
          background-size: 100% 100%;
        }
      }
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
}
</style>


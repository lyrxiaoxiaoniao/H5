<template>
  <div class="headimg">
    <img v-if="img" :src="img" alt>
    <img v-else src="../../assets/jpark.jpeg" alt>
    <span>{{nickname}}</span>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },

    nickname: {
      type: String,
      default: 'J.PARK珠宝公园'
    }
  }
}
</script>

<style lang="less" scoped>
.headimg {
  width: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  span {
    position: absolute;
    bottom: -5px;
    max-width: 100px;
    overflow: hidden;
    line-height: 18px;
    height: 18px;
    text-align: center;
    background-color: #902525;
    color: #fff;
    font-size: 10px;
    padding: 0 5px;
    border-radius: 5px;
  }
}
</style>

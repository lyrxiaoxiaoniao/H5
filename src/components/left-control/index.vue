<template>
  <div class="control">
    <div @click="onClick(1)" class="control-item">
      <img src="./icon_fuqi.png" alt="福气榜">
    </div>
    <div @click="onClick(2)" class="control-item">
      <img src="./icon_guize.png" alt="规则">
    </div>
    <div @click="onClick(3)" class="control-item">
      <img src="./icon_jinli.png" alt="锦鲤">
    </div>
    <div @click="onClick(4)" class="control-item">
      <img src="./icon_dianzan.png" alt="点赞">
      <span>100</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClick(val) {
      this.$emit('onClick', val)
    }
  }
};
</script>

<style lang="less" scoped>
.control {
  width: 93px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &-item {
    position: relative;
    width: 93px;
    height: 34px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-55%);
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>

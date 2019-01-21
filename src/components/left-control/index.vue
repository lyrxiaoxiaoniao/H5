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
    <div @click="onClick(4)" v-if="islike" class="control-item">
      <img v-if="isDone" src="./icon_dianzan2.png" alt="点赞">
      <img v-if="!isDone" src="./icon_dianzan.png" alt="点赞">
      <span>{{likeCount}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    islike: {
      type: Boolean,
      default: false
    },
    likeCount: {
      type: [Number, String],
      default: 0
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  watch: {
    likeCount(newVal, oldVal){
      if (newVal>oldVal) {
        this.isDone = true
      }
    }
  },
  methods: {
    onClick(val) {
      this.$emit('onClick', val)
    },
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

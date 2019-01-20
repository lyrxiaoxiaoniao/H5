<template>
  <div class="titleimg">
    <div class="titleimg-title" :class="isred? 'red': ''">2019
      <div class="tip">
        <span>我的新年愿</span>望
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isred: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.titleimg {
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
  .red {
    color: #ca0100;
  }
}
</style>


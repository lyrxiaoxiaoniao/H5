<template>
  <div class='redbtn'> {{context}}</div>
</template>

<script>
export default {
  name: "redbtn",
  props: {
    context: {
      type: String,
      default: "愿望"
    }
  }
};
</script>

<style lang="less" scoped>
.redbtn {
  width: 220px;
  height: 44px;
  background-color: rgba(255, 57, 57, 0.3);
  border: 2px solid #FEF5D4;
  border-radius: 54px;
  text-align: center;
  line-height: 40px;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  letter-spacing: 4px;
}
</style>

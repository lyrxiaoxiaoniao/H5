<template>
  <div class='redbtn'>{{context}}</div>
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
  width: 262px;
  height: 52px;
  background-color: rgba(255, 57, 57, 0.3);
  border: 2px solid #FEF5D4;
  border-radius: 52px;
  text-align: center;
  line-height: 48px;
  box-sizing: border-box;
  color: #fff;
  font-size: 26px;
  letter-spacing: 4px;
}
</style>

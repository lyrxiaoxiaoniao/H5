<template>
  <div class="headimg">
    <img src="http://placehold.it/48x48/fff/ccc.png" alt>
    <span>我想静静</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.headimg {
  width: 60px;
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
    width: 70px;
    line-height: 18px;
    text-align: center;
    background-color: #902525;
    color: #fff;
    font-size: 10px;
    border-radius: 8px;
  }
}
</style>

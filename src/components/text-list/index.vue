<template>
  <div class="textlist">
    <div
      class="textlist-item"
      :class="close?'close': ''"
      v-for="(item,index) in list"
      :key="index"
      :style="colors[index]"
    >
      {{item}}
      <i @click="onClose(index)">x</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // list: ["才值爆华横溢", "颜爆表值爆表", "找到真爱", "合彩中六合彩"],
      colors: [
        { backgroundColor: "#FF4791" },
        { backgroundColor: "#FFB347" },
        { backgroundColor: "#FF4747" },
        { backgroundColor: "#B847FF" }
      ]
    };
  },
  methods: {
    onClose(index) {
      this.$emit('onClose', index)
    }
  }
};
</script>

<style lang="less" scoped>
.textlist {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &-item {
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    position: relative;
    i {
      display: none;
      font-size: 10px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #fff;
    }
  }
  .close {
    padding: 5px 15px;
    i {
      display: block;
      padding: 5px;
    }
  }
}
</style>


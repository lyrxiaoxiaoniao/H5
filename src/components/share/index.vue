<template>
  <div v-if="shareshow" class="dialog" @click="onCloneRank">
    <div class="dialog-center">
      <div class="dialog-center-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shareshow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onCloneRank() {
      this.$emit("update:shareshow", false);
    },
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
  background: rgba(0, 0, 0, 0.7);
  &-center {
    position: absolute;
    top: -30px;
    right: -10px;
    width: 300px;
    height: 550px;
    background: url("../../assets/bg/shareto.png") no-repeat center;
    background-size: 100% 100%;
    // transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>


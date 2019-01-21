<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol"></left-control>
    <div class="home-container" :class="isIphonex?'top300': ''">
      <div class="content">
        <title-img></title-img>
        <head-img class="head-img"></head-img>
        <text-list :list="wishList" class="text-list"></text-list>
      </div>
    </div>
    <red-btn
      class="red-btn"
      :class="isIphonex?'top600':''"
      @click.native="onClick"
      context="查看我的愿望"
    ></red-btn>
    <img class="home-bg" src="../assets/bg/bg5.png" alt>
    <div class="home-footer"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
  </div>
</template>

<script>
import leftControl from '@c/left-control'
import redBtn from '@c/red-btn'
import headImg from '@c/head-img'
import textList from '@c/text-list'
import titleImg from '@c/title-img'
import dialogGuize from '@c/dialog'
import dialogRank from '@c/dialog-rank'
// import config from '../utils/config';
export default {
  components: {
    leftControl,
    redBtn,
    headImg,
    textList,
    titleImg,
    dialogGuize,
    dialogRank
  },
  data() {
    return {
      query: this.$route.query,
      show: false,
      rankshow: false
    }
  },
  computed: {
    isIphonex() {
      const height = document.body.offsetHeight
      return height > 700
    },
    wishList() {
      return this.$route.query.wishList.split(',')
    }
  },
  mounted() {
    console.log(document.body.offsetHeight)
  },
  methods: {
    onClick() {
      console.log(11111)
      this.$router.push({
        path: '/forward1',
        query: {
          isAlldone: 1
        }
      })
    },
    toWeChat() {
      this.$router.push('search')
    },
    clickon(e) {
      console.log(e, 12312312)
      if (e === 1) {
        this.rankshow = true
      } else if (e === 2) {
        this.show = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: url('../assets/bg/bg-lline.png') repeat center;
  background-size: 100%;
  &-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 270px;
  }
  .leftcrol {
    position: fixed;
    right: 0;
    top: 80px;
    z-index: 100;
  }
  .top300 {
    top: 8rem;
  }
  &-container {
    position: absolute;
    top: 250px;
    width: 100%;
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      text-align: center;
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
      .head-img {
        margin-top: 10px;
      }
      .text-list {
        margin-top: 10px;
        width: 280px;
      }
    }
  }
  .red-btn {
    position: absolute;
    top: 510px;
    left: 50%;
    transform: translateX(-50%);
    // background: #fff;
    z-index: 10;
  }
  .top600 {
    top: 16rem;
  }
  &-bg {
    width: 100%;
    height: 600px;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: url('../assets/bg/footer.gif') repeat center;
    background-size: 100% 100%;
  }
}
</style>


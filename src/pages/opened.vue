<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol"></left-control>
    <div class="home-container">
      <div class="content">
        <div class="money">
          <p>红包拆得</p>
          <p class="money-red">￥{{resData.amount}}</p>
        </div>
        <head-img :img="userinfo.headimgurl" :nickname="userinfo.nickname" class="head-img"></head-img>
        <div class="red-text">{{resData.bless}}</div>
        <red-btn class="red-btn" @click.native="onClick" context="我也要许愿"></red-btn>
      </div>
    </div>
    <img class="home-bg" src="../assets/bg/bg22.png" alt>
    <div class="home-footer"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
  </div>
</template>

<script>
import leftControl from '@c/left-control'
import redBtn from '@c/red-btn'
import headImg from '@c/head-img'
import dialogGuize from '@c/dialog'
import dialogRank from '@c/dialog-rank'
import config from '../utils/config'
export default {
  components: { leftControl, redBtn, headImg, dialogGuize, dialogRank },
  data() {
    return {
      query: this.$route.query,
      userinfo: this.storage.get('userinfo'),
      resData: {},
      show: false,
      rankshow: false
    }
  },
  mounted() {
    console.log(this.query)
    this.getRedPacket()
  },
  methods: {
    getRedPacket() {
      const { unionid, sendUnionid, openid, wishId } = this.query
      const userinfo = this.storage.get('userinfo')
      const obj = {
        unionid,
        sendUnionid,
        wishId,
        openid,
        headportraitUrl: userinfo.headimgurl,
        region: userinfo.country + userinfo.province + userinfo.city,
        nickname: userinfo.nickname,
        sex: userinfo.sex
      }
      this.$api.get(config.getOtherSendRedPacket, { ...obj }).then(res => {
        if (res.status === 'success') {
          this.resData = res.data
        }
      })
    },
    onClick() {
      console.log('cehsi')
      this.$router.push({
        path: '/form1'
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
  //   background: url("../assets/bg/bg-line4.png") repeat center;
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
      .money {
        margin-top: 30px;
        color: #ca0100;
        text-align: center;
        &-red {
          line-height: 50px;
          font-size: 28px;
        }
        p {
          margin: 0;
          padding: 0;
        }
      }
      .head-img {
        margin-top: 10px;
      }
      .red-text {
        margin-top: 10px;
        font-size: 22px;
        color: #ffad4d;
      }
      .red-btn {
        margin-top: 30px;
      }
    }
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


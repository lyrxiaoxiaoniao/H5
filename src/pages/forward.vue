<template>
  <div class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" class="leftcrol"></left-control>
    <div class="home-container">
      <div class="content">
        <title-img isred class="title-img"></title-img>
        <div class="money">
          <p class="money-red">￥{{packet.amount}}</p>
          <p>已领取</p>
        </div>
        <text-list :list="wishList" class="text-list"></text-list>
        <head-img :img="userinfo.headimgurl" :nickname="userinfo.nickname" class="head-img"></head-img>
      </div>
    </div>
    <red-btn class="red-btn1" @click.native="onClick" :context="isAlldone?'转发集福': '我也要许愿'"></red-btn>
    <!-- <div class="red-btn">
      <div class='redbtn mr-20' @click="onClickposter">生成海报</div>
      <div class='redbtn ml-20' @click="onClick">转发集福</div>
    </div> -->
    <img class="home-bg" src="../assets/bg/bg22.png" alt>
    <div class="home-footer"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
    <share :shareshow.sync="shareshow"></share>
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
import share from '@c/share'
import config from '../utils/config/index'
import $wx from '../utils//wx'
export default {
  components: {
    leftControl,
    redBtn,
    headImg,
    textList,
    titleImg,
    dialogGuize,
    share,
    dialogRank
  },
  data() {
    return {
      isAlldone: Number(this.$route.query.isAlldone),
      userinfo: this.storage.get('userinfo'),
      packet: {},
      resData: {},
      wishList: [],
      isDone: false,
      shareshow: false,
      show: false,
      rankshow: false
    }
  },
  mounted() {
    console.log(document.body.offsetHeight)
    this.getWishList()
  },
  methods: {
    // 分享url
    // `${window.location}?` sendUnionid  userinfo wishList
    getWishList() {
      this.$api
        .get(config.isSendWishOrGetpacket, {
          unionid: this.storage.get('unionId')
        })
        .then(res => {
          if (res.status === 'success') {
            console.log(res, 'success')
            this.resData = res.data
            this.packet = res.data.packet
            this.wishList = res.data.wish.wishList.split(',')
            if (this.isAlldone) {
              const {headimgurl,nickname} = this.userinfo
              const shareUrl = `${
                location.origin
              }#/?sendUnionid=${this.storage.get(
                'unionId'
              )}&nickname=${nickname}&headimgurl=${headimgurl}&wishList=${
                this.wishList
              }`
              const url = window.location.href.split('#')[0]
              // const paramUrl = `/#/?sendUnionid=${this.storage.get(
              //   'unionId'
              // )}&nickname=${nickname}&headimgurl=${headimgurl}&wishList=${
              //   this.wishList
              // }`
              $wx.shareFriend(
                url,
                '锦鲤活动标题',
                '锦鲤活动描述',
                shareUrl,
                `${window.location.href.split('#')[0]}/share.jpg`
              )
            }
          }
        })
    },
    onClick() {
      if (!this.isAlldone) {
        this.$router.push({
          path: '/form1'
        })
      } else {
        this.shareshow = !this.shareshow
      }
    },
    onClickposter() {
      this.$router.push({
        path: '/poster',
        query: {...this.query}
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
        margin-top: 20px;
        color: #ca0100;
        text-align: center;
        &-red {
          font-size: 18px;
        }
        p {
          margin: 0;
          padding: 0;
          line-height: 20px;
        }
      }
      .title-img {
        margin-top: 10px;
        color: #ca0100;
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
  #qrcode{
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translateX(-50%);
    width: 82px;
    height: 82px;
    border: 1px solid #fef5d4;
  }
  .red-btn1 {
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translateX(-50%);
    // background: #fff;
    z-index: 10;
    display: flex;
    justify-content: center;
  }
  .red-btn {
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translateX(-50%);
    // background: #fff;
    z-index: 10;
    display: flex;
    justify-content: center;
    width: 100%;
    .redbtn {
      // max-width: 220px;
      height: 44px;
      padding: 0 20px;
      background-color: rgba(255, 57, 57, 0.3);
      border: 2px solid #fef5d4;
      border-radius: 54px;
      text-align: center;
      line-height: 40px;
      box-sizing: border-box;
      color: #fff;
      font-size: 20px;
    }
    .ml-20 {
      margin-left: 10px;
    }
    .mr-20 {
      margin-right: 10px;
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


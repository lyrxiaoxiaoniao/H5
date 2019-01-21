<template>
  <div v-show="isshowpage" class="home">
    <div @click.self="toWeChat" class="home-header"></div>
    <left-control @onClick="clickon" islike :isDone="like?true:false" class="leftcrol"></left-control>
    <div class="home-container">
      <div class="content">
        <title-img></title-img>
        <head-img :img="userinfo.headimgurl" :nickname="userinfo.nickname" class="head-img"></head-img>
        <text-list :list="wishList" class="text-list"></text-list>
      </div>
    </div>
    <img class="home-bg" src="../assets/bg/bg33.png" alt>
    <div class="open-red" @click="openRed"></div>
    <div class="home-footer" :class="isIphonex?'heightX':''"></div>
    <dialog-guize :show.sync="show"></dialog-guize>
    <dialog-rank :visiable.sync="rankshow"></dialog-rank>
  </div>
</template>

<script>
import leftControl from '@c/left-control'
import headImg from '@c/head-img'
import textList from '@c/text-list'
import titleImg from '@c/title-img'
import dialogGuize from '@c/dialog'
import dialogRank from '@c/dialog-rank'
import config from '../utils/config'
export default {
  components: {
    leftControl,
    headImg,
    textList,
    titleImg,
    dialogGuize,
    dialogRank
  },
  data() {
    return {
      sendUnionid: this.$route.query.sendUnionid || 1, // 发起人的id
      userinfo: this.$route.query,
      wishList: [],
      wishId: '',
      show: false,
      rankshow: false,
      isshowpage: false,
      isGetPacket: false, // 是否拆红包
      isWish: false, // 是否许愿
      likeCount: undefined,
      like: 0
    }
  },
  computed: {
    isIphonex() {
      const height = document.body.offsetHeight
      return height > 700
    }
  },
  created() {
    // console.log(this.sendUnionid === this.storage.get('unionId'))
    if (this.storage.get('unionId')) {
      this.isChoose()
    }
  },
  mounted() {
    // console.log(document.body.offsetHeight)
    this.getData()
  },
  methods: {
    isChoose() {
      this.$api
        .get(config.isSendWishOrGetpacket, {
          unionid: this.storage.get('unionId')
        })
        .then(res => {
          if (res.status === 'success') {
            console.log(res, 'ischoose')
            this.isGetPacket = Number(res.data.isGetPacket)
            this.isWish = Number(res.data.isWish)
            const wishList = res.data
            this.isshowpage = true
            // 如果是点击本人分享的连接
            if (this.sendUnionid === this.storage.get('unionId')) {
              // 本人已经获取红包了没有许愿
              if (this.isGetPacket && !this.isWish) {
                this.$router.push({
                  path: '/forward1',
                  query: {
                    ...wishList,
                    isAlldone: 0
                  }
                })
              } else if (this.isGetPacket && this.isWish) {
                // 许愿了 拆红包了
                this.$router.push({
                  path: '/forward1',
                  query: {
                    ...wishList,
                    isAlldone: 1
                  }
                })
              } else if (!this.isGetPacket && this.isWish) {
                // 本人许愿了 没拆红包
              }
            } else {
              // 如果不是本人分享的连接
              if (this.isGetPacket && this.isWish) {
                // 许愿了 拆红包了
                let query
                if (this.sendUnionid == '1') {
                  query = { wishList: '新年大吉, 锦鲤送福' }
                } else {
                  query = { ...this.$route.query }
                }
                this.$router.push({
                  path: '/home1',
                  query: { ...query }
                })
              }
            }
          }
        })
    },
    getData() {
      this.$api
        .get(config.getRedPacket, {
          sendUnionid: this.sendUnionid,
          unionid: this.storage.get('unionId')
        })
        .then(res => {
          if (res.status === 'success') {
            this.wishList = res.data.wishList.split(',')
            this.wishId = res.data.id
            this.likeCount = res.data.likeCount
            this.like = res.data.like
          }
        })
    },
    openRed() {
      this.$router.push({
        path: '/opened1',
        query: {
          sendUnionid: this.sendUnionid,
          unionid: this.storage.get('unionId'),
          openid: this.storage.get('openId'),
          userinfo: this.userinfo,
          wishId: this.wishId
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
    },
    insertLike() {
      this.$api
        .post(config.insertLike, {
          getLikeUnionid: this.sendUnionid,
          likedUnionid: this.storage.get('unionId')
        })
        .then(res => {
          if (res.status === 'success') {
            console.log(res, '点赞')
            this.likeCount = res.data.likeCount
            this.like = res.data.like
          }
        })
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
  background: url('../assets/bg/bg-line.png') repeat center;
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
      .red-btn {
        margin-top: 20px;
      }
    }
  }
  .open-red {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 490px;
    left: 50%;
    transform: translateX(-50%);
    // background: #fff;
    z-index: 10;
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
  .heightX {
    height: 150px;
  }
}
</style>


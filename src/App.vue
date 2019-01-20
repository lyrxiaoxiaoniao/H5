<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import config from './utils/config/index'
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    // 使用watch 监听$router的变化
    $route(to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  },
  created() {
    // this.storage.set("appid", "wx69ba7122e8e8d795");
    this.storage.set("appid", "wx22d606a0b9f52f4f");
    this.getCode();
  },
  methods: {
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    getCode() {
      // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx69ba7122e8e8d795&redirect_uri=https://www.jpark.vip/&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect
      // 非静默授权，第一次有弹框
      // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx22d606a0b9f52f4f&redirect_uri=https://www.jpark.vip/&response_type=code&scope=snsapi_base&state=123#wechat_redirect
      const code = '081aipnr08rgDf1optkr0rPmnr0aipnM'; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
      this.getOpenId(code)
      // const local = "https://www.jpark.vip/";
      // const Appid = this.storage.get("appid") || "";
      // if (code == null || code === "") {
      //   window.location.href =
      //     "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
      //     Appid +
      //     "&redirect_uri=" +
      //     encodeURIComponent(local) +
      //     "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
      // } else {
      //   this.getOpenId(code); // 把code传给后台获取用户信息
      // }
    },
    getOpenId (code) { // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
        let _this = this
        this.$api.post(config.getRedOpenId, {js_code: code}).then((res) => {
          console.log(res)
            // let datas = res.data
            // if (datas.code === 0 ) {
            //     console.log('成功')
            // }
        }).catch((error) => {
            console.log(error)
        })
    }
  }
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

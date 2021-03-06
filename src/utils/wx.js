import api from './api'
import config from './config'
import storage from './storage'
const jsApiList = [
  'updateAppMessageShareData',
  'updateTimelineShareData',
  'onMenuShareWeibo',
  'onMenuShareQZone',
  'startRecord',
  'stopRecord',
  'onVoiceRecordEnd',
  'playVoice',
  'pauseVoice',
  'stopVoice',
  'onVoicePlayEnd',
  'uploadVoice',
  'downloadVoice',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'translateVoice',
  'getNetworkType',
  'openLocation',
  'getLocation',
  'hideOptionMenu',
  'showOptionMenu',
  'hideMenuItems',
  'showMenuItems',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'closeWindow',
  'scanQRCode',
  'chooseWXPay',
  'openProductSpecificView',
  'addCard',
  'chooseCard',
  'openCard'
]

const data = storage._Storage.get('wxconfig')
console.log(data)
export default {
  // 朋友圈分享
  shareFriend(url, title, desc, link, imgUrl) {
    api.get(config.getShareSign, {
      url: url
    }).then(res => {
      if (res.status === 'success') {
        const data = res.data
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          // appId: 'wxa778594700344a8f', // 必填，公众号的唯一标识
          appId: data.appid, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.noncestr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见附录1
          jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })

        wx.ready(function () {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          wx.updateAppMessageShareData({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function (res) {}
          })

          wx.updateTimelineShareData({
            title: title, // 分享标题
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {}
          })

          wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function (res) {},
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          })
        })
      }
    })
  }
}

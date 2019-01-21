// const base_url = 'https://www.jpark.vip/jf-jpark-app-web-api'
const base_url = 'http://192.168.40.79:8080/jf-jpark-app-web-api'

export default {
  baseserverURI: base_url,
  // 获取发红包的openid
  getRedOpenId: `${base_url}/redPacket/getRedOpenId`,
  // 获取发红包的unionid
  getUnionId: `${base_url}/redPacket/getUnionId`,
  // 领取红包
  getOtherSendRedPacket: `${base_url}/redPacket/getOtherSendRedPacket`,
  // 加载别人发的红包页面
  getRedPacket: `${base_url}/redPacket/getRedPacket`,
  // 获取所有愿望配置
  getAllWishConfig: `${base_url}/redPacket/getAllWishConfig`,
  // 获取所有愿望配置
  insertMyWish: `${base_url}/redPacket/insertMyWish`,
  // 点赞
  insertLike: `${base_url}/redPacket/insertLike`,
  // 判断是否拆红包，是否许愿 ?unionid=olDWz0n_5r2NFHSUyPfrYh4_cMG4
  isSendWishOrGetpacket: `${base_url}/redPacket/isSendWishOrGetpacket`
}

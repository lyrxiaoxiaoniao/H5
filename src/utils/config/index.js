const base_url = 'http://192.168.40.79:8080/jf-jpark-app-web-api'

export default {
  baseserverURI: base_url,
  // 获取发红包的openid
  getRedOpenId: `${base_url}/redPacket/getRedOpenId`,
  // 获取发红包的unionid
  getUnionId: `${base_url}/redPacket/getUnionId`,
  // 领取红包
  getRedPacket: `${base_url}/redPacket/getRedPacket`,
  // 加载别人发的红包页面
  getRedPacket: `${base_url}/redPacket/getRedPacket`,
  // 获取所有愿望配置
  getAllWishConfig: `${base_url}/redPacket/getAllWishConfig`,
  // 获取所有愿望配置
  insertMyWish: `${base_url}/redPacket/insertMyWish`
}

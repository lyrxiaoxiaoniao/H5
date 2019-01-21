<template>
  <div class="search">
    <div class="search-top">
      <input v-model="inputVal" maxlength="10" @keyup.enter="onAddTags" type="text" placeholder="可以输入你的愿望清单哦(限10字)">
    </div>
    <div class="search-content">
      <div class="search-content-title">我的愿望清单</div>
      <div class="search-content-list">
        <span
          @click="onClickItem({...item,index})"
          v-for="(item,index) in tags"
          :key="index"
          class="item"
          :class="item.checked?'red': ''"
        >{{item.value}}</span>
      </div>
      <div @click="onConfim" class="search-btn">确定</div>
    </div>
  </div>
</template>

<script>
import config from '../utils//config/index'
export default {
  name: 'search',
  data() {
    return {
      tags: [
        // { value: "桃花朵朵开", checked: false },
        // { value: "成功脱单", checked: false },
        // { value: "生个猪宝宝", checked: false },
        // { value: "来一场奋不顾身的爱情", checked: false },
        // { value: "和TA一起看日出", checked: false },
        // { value: "嫁给爱情", checked: false },
        // { value: "迎娶白富美", checked: false },
        // { value: "男神带回家", checked: false },
        // { value: "家庭幸福美满", checked: false },
        // { value: "父母不催婚", checked: false },
        // { value: "一场浪漫的烛光晚餐", checked: false },
        // { value: "变瘦变美", checked: false },
        // { value: "颜值在线", checked: false },
        // { value: "学会化妆", checked: false },
        // { value: "每周去3次健身", checked: false },
        // { value: "瘦成一道闪电", checked: false },
        // { value: "练出马甲线", checked: false },
        // { value: "练出N块腹肌", checked: false },
        // { value: "涨10w粉丝", checked: false },
        // { value: "C位出道", checked: false }
      ],
      isCheck: [],
      inputVal: ''
    }
  },
  mounted() {
    this.getWishList()
  },
  methods: {
    getWishList() {
      this.$api.get(config.getAllWishConfig).then(res => {
        if (res.status === 'success') {
          this.tags = res.data.map(v => {
            return { value: v.wish, checked: false }
          })
        }
      })
    },
    onClickItem(e) {
      if (this.isCheck.length > 4) {
        this.$pop({ msg: '限制4条愿望哦', align: 'top', delay: 2000 })
      } else if (this.tags[e.index].checked || this.isCheck.length <= 4) {
        this.tags[e.index].checked = !this.tags[e.index].checked
        this.isCheck = this.tags.filter(v => v.checked)
        if (this.isCheck.length === 4) {
          this.$pop({ msg: '限制4条愿望哦', align: 'top', delay: 2000 })
        }
      }
    },
    onAddTags() {
      const str = this.inputVal.replace(/\s*/g, '')
      if (str.length === 0) return
      if (this.isCheck.length === 4) {
        this.$pop({ msg: '限制4条愿望哦', align: 'top', delay: 2000 })
        return
      }
      this.isCheck.push({ value: this.inputVal, checked: true })
      this.tags.unshift({ value: this.inputVal, checked: true })
      this.inputVal = ''
    },
    onConfim() {
      this.$router.replace({
        path: '/form1',
        query: {
          list: this.isCheck.map(v => v.value),
          isSelect: true
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
  &-top {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
    background-color: #ff1918;
    input {
      margin-top: 35px;
      width: 90%;
      height: 30px;
      border-radius: 15px;
      padding: 0 15px;
    }
  }
  &-content {
    flex: 1;
    box-sizing: border-box;
    padding: 20px 5% 0;
    padding-bottom: 110px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    margin-top: -20px;
    position: relative;
    &-title {
      color: #333;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 10px;
    }
    &-list {
      max-height: 230px;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      overflow: auto;
      .item {
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 8px 15px;
        background-color: #f5f5f5;
        border-radius: 15px;
      }
      .red {
        background-color: #ff4c4b;
        color: #fff;
      }
    }
    .search-btn {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      background-color: #ff1918;
      line-height: 50px;
      height: 50px;
      font-size: 20px;
      color: #fff;
      text-align: center;
      border-radius: 25px;
    }
  }
}
</style>

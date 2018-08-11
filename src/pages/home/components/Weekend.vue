<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://avatar.zbjimg.com/009/93/65/200x200_avatar_46.jpg!big',
        title: '青海湖鸟岛风景',
        desc: '啥符号违法和卢卡斯活动费敬爱的搜我解放案件的发生的副驾驶卡号的'
      }, {
        id: '0002',
        imgUrl: 'https://avatar.zbjimg.com/009/93/65/200x200_avatar_46.jpg!big',
        title: '青海湖鸟岛风景',
        desc: '啥符号违法和卢卡斯活动费敬爱的搜我解放案件的发生的副驾驶卡号的'
      }, {
        id: '0003',
        imgUrl: 'https://avatar.zbjimg.com/009/93/65/200x200_avatar_46.jpg!big',
        title: '青海湖鸟岛风景',
        desc: '啥符号违法和卢卡斯活动费敬爱的搜我解放案件的发生的副驾驶卡号的'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background-color #eeeeee
    text-text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
</style>

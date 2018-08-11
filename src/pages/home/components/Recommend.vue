<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background-color #ff9300
        padding 0 .2rem
        border-radius .06rem
</style>

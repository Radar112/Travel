<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0004',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0005',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0006',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0007',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0008',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '滑雪季'
      }, {
        id: '0009',
        imgUrl: 'https://tianpeng.zbjimg.com/tianpeng/task/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83.png/origine/80b3f336-2d2b-4dda-aed0-c7905d003aab',
        desc: '哈哈哈'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-imgcontent
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()

</style>

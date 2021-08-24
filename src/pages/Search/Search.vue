<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword" @click="showSearchList">
      <input type="submit" class="search_submit">
    </form>
    <section v-if="historySearchs && shoswearchlist" class="search-list">
      <ul>
        <li class="history-search">搜索历史</li>
        <li v-for="(item,index) in historySearchs" :key="index">{{item}}</li>
      </ul>
      <span class="iconfont icon-m-clear" @click="deleteSearch"></span>
    </section>
    <scroll class="content"
            ref="scroll"
            v-if="!noSearchShops && !shoswearchlist">
      <section class="list" ref="list">
        <ul class="list_container">
          <!--:to="'/shop?id='+item.id"-->
          <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                       v-for="item in searchShops" :key="item.id" class="list_li">
            <section class="item_left">
              <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
            </section>
            <section class="item_right">
              <div class="item_right_text">
                <p>
                  <span>{{item.name}}</span>
                </p>
                <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
                <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
              </div>
            </section>
          </router-link>
        </ul>
      </section>
    </scroll>
    <div class="search_none" v-if="noSearchShops && !shoswearchlist">很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Scroll from "../../components/scroll/Scroll";

export default {

  data () {
    return {
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false,
      historySearchs: [],
      shoswearchlist: true,
      scrollH: null
    }
  },

  computed: {
    ...mapState(['searchShops'])
  },

  mounted() {
    this.setHistorySearchs()
  },
  methods: {
    deleteSearch() {
      window.localStorage.removeItem('searchs')
      this.setHistorySearchs()
    },
    search() {
        // 得到搜索关键字
        const keyword = this.keyword.trim()
        // 进行搜索
        let search = []
        if(keyword) {
          this.$store.dispatch('searchShops', keyword)
          if(window.localStorage.getItem('searchs')){
            search = JSON.parse(window.localStorage.getItem('searchs'))
            console.log(search+'11');
          }
          search.push(keyword)
          window.localStorage.setItem('searchs',JSON.stringify(search))
          this.shoswearchlist = false
          this.setHistorySearchs()
        }
    },
    setHistorySearchs() {
      this.historySearchs = JSON.parse(window.localStorage.getItem('searchs'))
    },
    showSearchList() {
      this.shoswearchlist = true
    },
  },

  watch: {
    searchShops (value) {
      if(!value.length) { // 没有数据
        this.noSearchShops = true
      } else {// 有数据
        this.noSearchShops = false
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
    }
  },

  components: {
    HeaderTop,
    Scroll
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.search
  position absolute
  width 100%
  height 100%
  top 0px
  background-color white
  .search_form
    z-index 100
    position relative
    clearFix()
    top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
  .search-list
    z-index 100
    position relative
    clearFix()
    top 45px
    width: 100%;
    left 5px
    right 5px
    li
      padding 3px 5px
      float left
      text-align center
      margin 5px
      background-color rgba(100 100 100 .3)
      border-radius 8%
      font-size 13px
    .history-search
      background-color #02a774
      color white
      border-radius 5%
      font-size 12px
    span
      float right
      padding 5px
      margin-right 10px
  .content
    position: absolute
    top: 95px
    bottom: 50px
    left: 0
    right: 0
    .list
      min-height 525px
      width 100%
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
  .search_none
    z-index 1
    position absolute
    top 200px
    left 0px
    right: 0px
    color: #333
    text-align: center
</style>

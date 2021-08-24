<template>
  <section class="order">
    <span class="title">订单</span>
    <section class="tab" v-if="userInfo.name">
      <div class="orderselect">
        <span class="tab-item" @click="setSelectType(3)">
          全部 <span :class="{active: selectType===3}"></span>
        </span>
        <span class="tab-item" :class="{activet: selectType===2}" @click="setSelectType(2)">
          满意<span :class="{active: selectType===2}"></span>
        </span>
        <span class="tab-item" @click="setSelectType(1)">
          不满意<span :class="{active: selectType===1}"></span>
        </span>
        <span class="tab-item" @click="setSelectType(0)">
          不满意<span :class="{active: selectType===0}"></span>
        </span>
      </div>
    </section>
    <section class="order_no_login" v-else>
      <img src="./images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      selectType: 3 , // 选择的评价类型: 0满意, 1不满意, 2全部
    }
  },
  components: {
    HeaderTop
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    setSelectType(type) {
      this.selectType = type
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.order  //订单
  width 100%
  .title
    padding 10px
    font-size 18px
    font-weight 600
    margin-top 15px
    height 20px
    width 30px
  .tab
    .orderselect
      height 40px
      line-height 40px
      .active
        display block
        position absolute
        left 40%
        content ''
        width 20px
        height 2px
        background #02a774
        ////transform translateY(50%)
      .tab-item
        float left
        width: 25%
        text-align center
        font-size 14px
        color rgb(77, 85, 93)
        .show
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
  .order_no_login
    padding-top 140px
    width 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      padding 10px 0
      font-size 17px
      color #6a6a6a
    >button
      display inline-block
      background #02a774
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px
</style>

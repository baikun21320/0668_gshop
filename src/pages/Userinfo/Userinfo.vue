<template>
  <div class="user-info">
    <HeaderTop title="个人资料" >
      <nav class="back" slot="left">
        <a @click="$router.back()">
          <i class="iconfont icon-arrr"></i>
        </a>
      </nav>
    </HeaderTop>
    <scroll class="content">
    <span class="infos">基础信息</span>
    <section class="profile_my_order border-1px">
      <!-- 头像 -->
      <a href='javascript:' class="my_order">
        <div class="my_order_div">
          <span>头像</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
          </span>
        </div>
      </a>
      <!-- 账号 -->
      <a href='javascript:' class="my_order">
        <div class="my_order_div">
          <span>账号</span>
          <span class="right-info">{{userInfo._id}}</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
          </span>
        </div>
      </a>
      <!-- 昵称 -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span>昵称</span>
          <span class="right-info">{{userInfo.name}}</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
          </span>
        </div>
      </a>
      <!-- 个人简介 -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span>个人简介</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- 收货地址 -->
      <a href="javascript:" class="my_order">
        <div class="my_order_div">
          <span>收货地址</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
    </section>
    <span class="bind-info">账号绑定</span>
    <section class="profile_my_order border-1px">
      <!-- 手机 -->
      <a href='javascript:' class="my_order">
            <span class="left-info">
              <i class="iconfont icon-shouji1"></i>
            </span>
        <div class="my_order_div">
          <span>手机</span>
          <span class="right-info">131*******0668</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- 淘宝 -->
      <a href='javascript:' class="my_order">
            <span class="left-info">
              <i class="iconfont icon-taobao1"></i>
            </span>
        <div class="my_order_div">
          <span>淘宝</span>
          <span class="right-info">未绑定</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- 支付宝 -->
      <a href="javascript:" class="my_order">
            <span class="left-info">
              <i class="iconfont icon-zhi_fu_bao_pay"></i>
            </span>
        <div class="my_order_div">
          <span>支付宝</span>
          <span class="right-info">未绑定</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- 微博 -->
      <a href="javascript:" class="my_order">
            <span class="left-info">
              <i class="iconfont icon-weibo"></i>
            </span>
        <div class="my_order_div">
          <span>微博</span>
          <span class="right-info">未绑定</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- 微信 -->
      <a href="javascript:" class="my_order">
            <span class="left-info">
              <i class="iconfont icon-weixinicon2x"></i>
            </span>
        <div class="my_order_div">
          <span>微信</span>
          <span class="right-info">未绑定</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
      <!-- QQ -->
      <a href="javascript:" class="my_order">
            <span class="left-info">
              <i class="iconfont icon-QQ"></i>
            </span>
        <div class="my_order_div">
          <span>QQ</span>
          <span class="right-info">未绑定</span>
          <span class="my_order_icon">
                <i class="iconfont icon--bulb"></i>
              </span>
        </div>
      </a>
    </section>

    </scroll>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Scroll from "../../components/scroll/Scroll";
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    HeaderTop,
    Scroll
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.user-info
  width 100%
  .content
    position: absolute
    top: 45px
    bottom: 0px
    left: 0
    right: 0
  .back
    position absolute
    top 25%
    .icon-arrr
      font-size 24px
      color #fff
  .infos
      clearFix()
      position relative
      display block
      padding 18px 10px
      top-border-1px(#e4e4e4)
      margin-top 45px
      font-weight 300
  .bind-info
    position relative
    display block
    padding 18px 10px
    top-border-1px(#e4e4e4)
    font-weight 300
  .profile_my_order
    clearFix()
    position relative
    display block
    padding 20px 10px
    top-border-1px(#e4e4e4)
    background #fff
    .my_order
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 30px
          border-radius 50%
        .icon-shouji1
          color #02a774
          border-radius 50%
        .icon-taobao1
          color #ff5f3e
        .icon-weibo
          color #f90
        .icon-weixinicon2x
          color #02a774
        .icon-QQ
          color #46c6f5
        .icon-zhi_fu_bao_pay
          color #007aff
      .left-info
        margin-right 10px
        border-radius 50%
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 18px 10px 18px 0
        font-size 16px
        color #333
        display flex
        justify-content space-between
        span
          display block
        .right-info
          float right
          text-align right
          flex 1
          margin-right 5px
        .my_order_icon
          width 10px
          height 10px
          .icon-jiantou1
            color #bbb
            font-size 10px
</style>

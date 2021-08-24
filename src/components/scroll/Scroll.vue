<template>
  <div class="wrapper" ref="wrapper">
      <div>
        <div v-if="pullDownRefresh" class="pulldown">
          <div v-show="showLoding" class="loading">
            <img src="../../common/imgs/loading.gif" alt="">
          </div>
        </div>
        <slot></slot>
        <div v-if="pullUpLoad" class="pullup">
          <div class="clear" v-if="!isDone && isLoading">
            <div class="loading">加载中...</div>
          </div>
          <div class="list-donetip" v-if="!isLoading && isDone">
            <p class="uploading">没有更多数据了，刷新试试</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'


export default {
  name: "Scroll",
  components: {
    // BetterScroll
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    pullDownRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      showLoding: false,
      isLoading: false,
      isDone: false
    }
  },
  mounted() {
    // console.log(this.$refs.wrapper)
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      pullDownRefresh: this.pullDownRefresh,
      scrollbar: true
    })

    //上拉加载
    if(this.probeType ===2 || this.probeType === 3) {
      //获取位置
      this.scroll.on('scroll',(postion)=>{
        // console.log(postion);
        this.$emit('scroll',postion)
      })
    }
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',()=> {
        // console.log("上拉加载更多");
        if(this.scroll.y <= (this.scroll.maxScrollY + 5)) {
          //所有数据加载完毕后
          this.$on('infinitescroll.loadedDone', () => {
            this.isLoading = false;
            this.isDone = true;
            // console.log("上拉加载更多1");
          });
          //单次请求数据加载完毕后
          this.$on('infinitescroll.loading', () => {
            this.isLoading = true;
            // console.log("上拉加载更多2");
          });
          //重新初始化
          this.$on('infinitescroll.reInit', () => {
            this.isLoading = false;
            this.isDone = false;
            // console.log("上拉加载更多3");
          });
          // console.log("上拉加载更多4");
          this.$emit('pullingUp')
        }
      })
    }
    if(this.pullDownRefresh) {
      this.scroll.on('pullingDown',()=> {
        this.$on('infinitescroll.downloading', () => {
          this.showLoding = true;
          // console.log("上拉加载更多2");
        });
        this.$on('infinitescroll.downover', () => {
          this.showLoding = false;
          // console.log("上拉加载更多2");
        });
          // console.log("下拉刷新");
          // console.log(this.showLoding);
        // console.log("下拉刷新");
        this.$emit('pullingDown')
      })
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //回到顶部
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    finishPullDown() {
      this.scroll && this.scroll.finishPullDown()
    },
    refresh() {
      // console.log('-----')
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }


}
</script>

<style scoped>
/*.wrapper {*/
/*  overflow: auto;*/
/*}*/
/*  !* 下拉刷新 *!*/
.pulldown {
  text-align: center;
  position:relative;
}
.pullup {
  position: relative;
  width:100%;
  height: 18px;
}
.list-donetip {
  text-align:center;
  font-size:.28rem;
}
.loading {
  position: absolute;
  background-color: white;
  text-align: center;
  bottom: 0px;
}
.loading img {
  width: 30%;
}
.uploading {
  font-size:.28rem;
  text-align: center;
  line-height: 20px;
  z-index: initial;
}
</style>

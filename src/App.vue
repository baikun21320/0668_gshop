<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      latitude: 0,
      longitude: 0
    }
  },
  components: {
    FooterGuide
  },
  mounted() {
    this.getLocation()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getUserInfo']),
      getLocation() {
      if (navigator.geolocation) {
        console.log(111)
        navigator.geolocation.getCurrentPosition((position)=>{
        console.log(112)
        let longitude = (position.coords.longitude)
        let latitude = (position.coords.latitude)
        let Location={longitude,latitude}
        this.$store.dispatch('getAddress',Location)
        console.log([longitude,latitude])
        console.log(position.coords.latitude, position.coords.longitude)
        }, (error)=>{
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("定位失败,用户拒绝请求地理定位");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("定位失败,位置信息是不可用");
              break;
            case error.TIMEOUT:
              console.log("定位失败,请求获取用户位置超时");
              break;
            case error.UNKNOWN_ERROR:
              console.log("定位失败,定位系统失效");
              break;
          }
        });
      } else {
        console.log("浏览器不支持地理定位。");
      }
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width: 100%;
  height: 100%;
  background-color: #f5f5f5
</style>

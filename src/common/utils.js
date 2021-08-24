export function  debounce(func, delay=50) {   //防抖函数
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=> {
      func.apply(this, args)
    },delay)
  }
}
//节流函数
export function throttle(func, wait) {
  let timeout

  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.call(this, arguments)
      }, wait)
    }
  }
}
// //地理定位
// export function  getLocation(){
//   if (navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition,showError);
//   }else{
//     alert("浏览器不支持地理定位。");
//   }
// }
// function showPosition(position){
//   // this.latitude = position.coords.latitude
//   // this.longitude = position.coords.longitude
//   this.$store.dispatch('getLocation',position.coords.latitude,position.coords.longitude)
//   console.log(position.coords.latitude,position.coords.longitude)
// }
// function showError(error){
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       alert("定位失败,用户拒绝请求地理定位");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       alert("定位失败,位置信息是不可用");
//       break;
//     case error.TIMEOUT:
//       alert("定位失败,请求获取用户位置超时");
//       break;
//     case error.UNKNOWN_ERROR:
//       alert("定位失败,定位系统失效");
//       break;
//   }
// }

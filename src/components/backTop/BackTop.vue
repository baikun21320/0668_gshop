<template>
  <transition name="move">
  <div class="back-top" >
    <img src="./images/top.svg" alt="">
  </div>
  </transition>
</template>

<script>
export default {
name: "BackTop",

}
</script>

<style scoped>
.move-enter-active, .move-leave-active{
  transition: all .5s;
}

.move-enter, .move-leave-to {
  opacity: 0;
  transform: translateX(15px) rotate(180deg);
}

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
 }
  .back-top img{
    width: 30px;
    height: 30px;
    background-color: rgba(100,100,100,.1);
    border-radius: 50%;
    padding: 8px;
  }
</style>

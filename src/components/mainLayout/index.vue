<template>
  <div class="mainPage">
    <div class="">
      <router-view class=""></router-view>
    </div>
    <tabbar class="tabbar"></tabbar>
  </div>
</template>
<script >
import { defineComponent } from 'vue'
import tabbar from './components/tabbar'
export default defineComponent({
  name: 'mainLayout', //主页面框架
  components: { tabbar },
  setup () {

  }
})
</script>
<style scoped lang='scss'>
.mainPage {
  height: 100vh;
  width: 100vw;
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
<style  lang='scss'>
.topBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: var(--topBarHeight);
  box-sizing: border-box;
}
.pageCon {
  height: calc(100vh - var(--bottomHeight));
  width: 100vw;
  position: relative;
}
.mainCon {
  top: var(--topBarHeight);
}
.mainCon.swiper {
  .swiper-slide {
    height: calc(100vh - var(--bottomHeight) - var(--topBarHeight));
    width: 100vw;
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: rgb(255, 255, 255);
    }
    .swiper-pagination-bullet-active {
      background: rgb(255, 255, 255);
    }
  }
}
</style>
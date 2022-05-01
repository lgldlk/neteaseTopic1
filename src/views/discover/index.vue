<template>
  <div class="pageCon">
    <topBar :selectIndex="nowSelectIndex"
            @update:selectIndex="nowSelectIndex =$event"
            ref="topBar"></topBar>
    <swiper :modules="modules"
            :scrollbar="{
              el:'.mainConScrollbar',
               
        draggable: true,
      hide:false
    }"
            @swiper="mainConOnSwiper"
            @slideChange="mainConOnSlideChange"
            :touchRatio="0.7"
            class="mainCon">
      <swiper-slide>推荐页面</swiper-slide>
      <swiper-slide>热门页面</swiper-slide>
      <swiper-slide>视频页面</swiper-slide>
    </swiper>

    <div class="mainConScrollbar"></div>
  </div>
</template>

<script >
import { defineComponent, ref, watch } from 'vue'
import topBar from './components/topBar.vue'
// import { throttle } from "@/util";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { Scrollbar } from "swiper";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
export default
  defineComponent({
    name: 'discover',
    components: {
      topBar,
      Swiper,
      SwiperSlide
    },
    setup () {
      let mainConSwiper = null
      const
        topBar = ref(null),
        nowSelectIndex = ref(0)
        ,

        mainConOnSwiper = (swiper) => {
          mainConSwiper = swiper
        },
        mainConOnSlideChange = (swiper) => {
          nowSelectIndex.value = swiper.activeIndex

        }
      watch([nowSelectIndex], ([nowSelectIndex]) => {
        mainConSwiper && mainConSwiper.slideTo(nowSelectIndex)
      }, { immediate: true })




      // let inTouch = false;
      // const mainConTouchStart = () => {
      //   inTouch = true
      //   inTouch
      //   throttle
      // }
      //   , mainConTouchMove = () => {
      //     // console.log("🥖 ~ file: index.vue ~ line 31 ~ setup ~ swiper,event", swiper, event)
      //     // throttle(() => {

      //     //   topBar.value.setBottomLeft(inTouch)
      //     // }, 200)

      //   }, mainConTouchEnd = () => {
      //     inTouch = false

      //     // topBar.value.setBottomLeft(inTouch)

      //   }
      return {
        nowSelectIndex,
        // mainConTouchMove,
        // mainConTouchStart,
        // mainConTouchEnd,
        topBar,
        modules: [Scrollbar,],
        mainConOnSwiper,
        mainConOnSlideChange
      }
    }
  })
</script>
<style scoped lang='scss'>
.pageCon {
  height: calc(100vh - $bottomHeight);
  width: 100vw;
  position: relative;
}
.mainCon {
  top: $topBarHeight;
}
.mainCon.swiper:deep() {
  .swiper-slide {
    height: calc(100vh - $bottomHeight - $topBarHeight);
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
.mainConScrollbar:deep() {
  background-color: transparent;

  width: 3.75rem;
  position: absolute;
  top: $topBarHeight;
  left: 50%;
  transform: translate(-50%, -0.06rem);

  .swiper-scrollbar-drag {
    height: 0.06rem;
    background: transparent !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &::after {
      width: 0.32rem;
      border-radius: 0.04rem;
      background: #14c4bc;
      height: 0.06rem;
      content: "";
    }
  }
}
</style>
<style  lang='scss'>
</style>
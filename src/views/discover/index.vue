<template>
  <div class="pageCon">
    <topBar :selectIndex="nowSelectIndex"
            @update:selectIndex="nowSelectIndex =$event"></topBar>
    <swiper :modules="modules"
            :scrollbar="{
              el:'.mainConScrollbar',
               
        draggable: true,
      hide:false
    }"
            @swiper="mainConOnSwiper"
            @slideChange="mainConOnSlideChange"
            :touchRatio="1"
            class="mainCon">
      <swiper-slide>推荐页面</swiper-slide>
      <swiper-slide>热门页面</swiper-slide>
      <swiper-slide>视频页面</swiper-slide>
    </swiper>

    <div class="mainConScrollbar"></div>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import topBar from './components/topBar.vue'
// import { throttle } from "@/util";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { Scrollbar } from "swiper";
import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
import { pageSwiper } from '@/hook/pageTopBar'
export default
  defineComponent({
    name: 'discover',
    components: {
      topBar,
      Swiper,
      SwiperSlide
    },
    setup () {
      const { nowSelectIndex,
        mainConOnSwiper,
        mainConOnSlideChange } = pageSwiper()

      return {
        nowSelectIndex,
        modules: [Scrollbar,],
        mainConOnSwiper,
        mainConOnSlideChange
      }
    }
  })
</script>
<style scoped lang='scss'>
.mainConScrollbar:deep() {
  background-color: transparent;

  width: 3.75rem;
  position: absolute;
  top: var(--topBarHeight);
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

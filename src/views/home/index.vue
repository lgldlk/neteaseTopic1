<template>
  <div class="pageCon">
    <topBar :selectIndex="nowSelectIndex"
            @update:selectIndex="nowSelectIndex =$event">

    </topBar>
    <swiper @swiper="mainConOnSwiper"
            @slideChange="mainConOnSlideChange"
            :touchRatio="0.7"
            class="mainCon">
      <swiper-slide>关注页面</swiper-slide>
      <swiper-slide>订阅页面</swiper-slide>
      <swiper-slide>二次元打工人页面</swiper-slide>
    </swiper>
  </div>
</template>
<script >
import { defineComponent } from 'vue'
import topBar from './components/topBar.vue'

import { pageSwiper } from '@/hook/pageTopBar'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/modules/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";
export default defineComponent({
  name: 'home',
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
      mainConOnSwiper,
      mainConOnSlideChange
    }
  }
})
</script>
<style scoped lang='scss'>
</style>
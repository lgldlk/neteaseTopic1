<template>
  <div class="topBar row">
    <div class="leftBox row">
      <div class="leftItem"
           v-for="(item,index) in swiperTitleList"
           :class="{
'activeItem': nowSelectIndex==index
           }"
           :key="item"
           @click="changeSwiperIndex(index)">{{item}}</div>

    </div>

    <div class="rightBox">
      <img :src="require('@/assets/home/personAdd.png')" />
    </div>
  </div>
</template>
<script >
import {
  defineComponent

} from 'vue'
import { topBarSwiper } from '@/hook/pageTopBar'

export default defineComponent({
  name: 'topBar',
  props: {
    selectIndex: {
      type: Number,
    },

  },
  setup (props, con) {


    const swiperTitleList = ['关注', "订阅", '二次元打工人'];


    const { nowSelectIndex,
      changeSwiperIndex } = topBarSwiper(props, con)



    return {
      swiperTitleList,
      nowSelectIndex,
      changeSwiperIndex

    }
  }
})
</script>
<style scoped lang='scss'>
.topBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;

  font-size: 0.32rem;
  height: var(--topBarHeight);
  box-sizing: border-box;
  .leftBox {
    .leftItem {
      font-weight: bold;
      margin: 0 0.1rem;
      color: var(--discover-topBar-noSelect);

      height: 100%;
      line-height: var(--topBarHeight);
      width: 0.9rem;
      text-align: center;
      position: relative;
      white-space: nowrap;
    }
    .activeItem {
      color: var(--discover-topBar-selected);
      font-size: 0.36rem;
    }
  }
  .rightBox {
    padding: 0.1rem;
    padding-right: 0.3rem;
    img {
      width: 0.45rem;
      height: 0.45rem;
    }
  }
}
</style>
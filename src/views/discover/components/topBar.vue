<template>
  <div class="topBar row">
    <div class="leftBox">
      <img :src="require('@/assets/discover/live.png')" />
      <div class="liveTip"
           v-if="showLiveTip"></div>
    </div>
    <div class="centerBox row">
      <div class="centerItem"
           v-for="(item,index) in centerList"
           :class="{
'activeItem': nowSelectIndex==index
           }"
           :key="item"
           @click="changeSwiperIndex(index)">{{item}}</div>
      <!-- <div class="activeBottom"
           :style="{left: bottomLeft+'px'}">

      </div> -->
    </div>
    <div class="rightBox">
      <img :src="require('@/assets/discover/search.png')" />
    </div>
  </div>
</template>
<script >
import {
  defineComponent, ref, onMounted, toRefs,
  // computed,

} from 'vue'
import baseApi from '@/componentApi'
export default defineComponent({
  name: 'topBar',
  props: {
    selectIndex: {
      type: Number,
    },

  },
  setup (props, con) {

    const { store } = baseApi()
    const showLiveTip = ref(false) //红点点击后下次打开APP不会出现，这里模拟获取缓存
    onMounted(() => {
      showLiveTip.value = !!(store.getters['system/getLocalCache'].liveTip)
    })


    const centerList = ['推荐', "热门", '视频']
      , { selectIndex: nowSelectIndex } = toRefs(props)
    const changeSwiperIndex = (index) => {
      con.emit("update:selectIndex", index)
    }
    //本来想使用 dom节点和touch事件获得距离来操作dom节点达到底部指示条切换的操作，后面发现自定义scrollbar更方便
    // let centerBoxLeft = 0;
    // const
    //   // bottomLeft = ref(0),
    //   bottomLeft = computed(() => {
    //     return locationList.value[nowSelectIndex.value]
    //   })

    // (inTouch, preload) => {
    //   if (inTouch) {
    //     bottomLeft.value = preload
    //   } else {
    //     bottomLeft.value = locationList.value[nowSelectIndex.value]
    //   }
    // }
    // 不考虑页面分辨率变化的情况下
    // const locationList = ref([])
    // onMounted(() => {

    //   const centerBox = document.querySelector(".topBar .centerBox")

    //   centerBoxLeft = centerBox.offsetLeft
    //   const centerList = document.querySelectorAll(".topBar .centerItem")
    //   locationList
    //   for (let tmp of centerList) {
    //     console.log(tmp.offsetLeft, tmp.offsetWidth, centerBoxLeft);
    //     locationList.value.push(tmp.offsetLeft + tmp.offsetWidth / 2)
    //   }


    // })


    return {
      showLiveTip,
      centerList,
      nowSelectIndex,
      changeSwiperIndex
      // locationList,
      // setBottomLeft,
      // bottomLeft
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

  font-size: 32px;
  height: $topBarHeight;
  box-sizing: border-box;
  .leftBox {
    padding: 0.1rem;
    position: relative;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
    .liveTip {
      width: 0.15rem;
      height: 0.15rem;
      background: #f37293;
      position: absolute;
      border-radius: 100%;
      top: 0.12rem;
      right: 0.08rem;
    }
  }
  .centerBox {
    width: 50%;
    justify-content: space-around;
    height: 100%;
    position: relative;

    .centerItem {
      font-weight: bold;
      color: var(--discover-topBar-noSelect);

      height: 100%;
      line-height: $topBarHeight;
      width: 0.9rem;
      text-align: center;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:nth-child(3)::after {
        content: "";
        position: absolute;
        right: -0.69rem;
        width: 0.69rem;
        height: 0.29rem;
        top: 50%;
        margin-top: -0.145rem;
        z-index: 0;

        background-image: url("~@/assets/discover/advertising.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        animation: advertisingAni 2s alternate infinite;
        animation-timing-function: cubic-bezier(1, 0.05, 0.94, 1.27);
      }
    }
    @keyframes advertisingAni {
      0% {
        background-position: 0px 0;
      }
      100% {
        background-position: -0.69rem 0;
      }
    }
    .activeItem {
      color: var(--discover-topBar-selected);
      font-size: 0.36rem;
    }
    // .activeBottom {
    //   position: absolute;
    //   content: "";
    //   width: 0.32rem;
    //   height: 0.06rem;
    //   border-radius: 0.04rem;
    //   background: #14c4bc;
    //   bottom: 0;
    //   transition: all 0.2s;
    //   left: 50%;
    //   transform: translateX(-50%);
    // }
  }
  .rightBox {
    padding: 0.1rem;
    img {
      width: 0.38rem;
      height: 0.38rem;
    }
  }
}
</style>
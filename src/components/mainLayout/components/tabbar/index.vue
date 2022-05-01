<template>
  <div class="row tabbar">
    <div v-for="item in showList"
         @click="routerChange(item.name)"
         class="tabbarItem"
         :class="{'activeItem':nowRouterName==item.name}"
         :key="item.name">
      <img v-if="nowRouterName!=item.name"
           :src="item.icon
      " />
      <img v-else
           :src="item.activeIcon
      " />
      <div class="txt">{{ item.txt }}</div>
      <div class="tip"
           v-if="item.tipNum">{{item.tipNum}}</div>
    </div>
    <div class="centerIcon center">
      <img :src="require('@/assets/tabbar/centerIcon.png')" />
    </div>

  </div>
</template>
<script >
import { defineComponent, computed } from 'vue'
import baseApi from '@/hook'

export default defineComponent({
  name: 'tabbar',
  setup () {
    const { store, route, routerChange } = baseApi()
    /**
     * @description: 列举出每个tabbar数组
     */
    const tabbarIcon = [
      {
        icon: require('@/assets/tabbar/home.png'),
        activeIcon: require("@/assets/tabbar/home-active.png"),
        // darkIcon:
        txt: "首页",
        name: "home"
      }, {
        icon: require('@/assets/tabbar/discover.png'),
        activeIcon: require("@/assets/tabbar/discover-active.png"),
        // darkIcon:
        txt: "发现",
        name: "discover"
      },
      {
        icon: require('@/assets/tabbar/fair.png'),
        activeIcon: require("@/assets/tabbar/fair-active.png"),
        // darkIcon:
        txt: "市集",
        name: "fair"
      },
      {
        icon: require('@/assets/tabbar/my.png'),
        activeIcon: require("@/assets/tabbar/my-active.png"),
        // darkIcon:
        txt: "我的",
        name: "my"
      }
    ],
      /**
    * @description: 获取每个页面模拟的提示小红点数量
    * @param {String } name
    * @return {Number} 
    */
      getTipsNum = (name) => {
        switch (name) {
          case 'my':
            return store.getters['user/getMyTips']
          default:
            return 0;

        }
      },
      showList = computed(() => {

        const theme = store.getters["system/getTheme"],
          tmpList = []
        if (theme == "light") {
          tabbarIcon.map(item => {
            tmpList.push({
              icon: item.icon,
              activeIcon: item.activeIcon,
              // darkIcon:
              txt: item.txt,
              name: item.name,
              tipNum: getTipsNum(item.name)
            }
            )
          })
        }
        return tmpList
      }),
      nowRouterName = computed(() => {

        return route.name
      })

    return { showList, nowRouterName, routerChange }

  }
})
</script>
<style scoped lang='scss'>
.tabbar {
  position: relative;
  justify-content: space-around;
  padding-bottom: 0.1rem;
  user-select: none;
  height: var(--bottomHeight);
  box-sizing: border-box;
  &Item {
    color: var(--tabbar-default);
    font-size: 0.18rem;
    position: relative;
    &:nth-child(2) {
      width: 1.5rem;
      text-align: left;
    }
    img {
      width: 0.68rem;
      height: 0.68rem;
      overflow: hidden;
    }
    .txt {
      width: 0.68rem;
      text-align: center;
      font-weight: bold;
      margin-top: -0.1rem;
      letter-spacing: 0.2em;
      text-indent: 0.2em;
      white-space: nowrap;
    }
    .tip {
      position: absolute;
      top: 0;
      background: #ff6c93;
      color: #fff;
      width: 1.6em;
      font-size: 0.18rem;
      line-height: 1.6em;
      text-align: center;
      border-radius: 100%;
      right: 0;
    }
  }
  .activeItem {
    color: var(--tabbar-activate);
  }
  .centerIcon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1.6em;
    img {
      width: 0.76rem;
      height: 0.76rem;
    }
  }
}
</style>
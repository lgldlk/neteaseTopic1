<template>
  <div></div>
</template>
<script >
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'tabbar',
  setup () {
    let tabbarIcon = [
      {
        icon: require('@/assets/tabbar/my.png'),
        activeIcon: require("@/assets/tabbar/my-active.png"),
        // darkIcon:
        txt: "我的"
      }
    ]
    return { tabbarIcon }

  }
})
</script>
<style scoped lang='scss'>
</style>
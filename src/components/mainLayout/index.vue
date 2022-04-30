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
  width: 100vh;
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
<template>
  <div class="pageCon">
    <div class="topBar center">
      <img :src="'./image/fair/topTitle.png'" />
    </div>
  </div>
</template>
<script >
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'fair',
  setup () {
  }
})
</script>
<style scoped lang='scss'>
.topBar {
  img {
    width: 1.96rem;
    height: 0.44rem;
  }
}
</style>
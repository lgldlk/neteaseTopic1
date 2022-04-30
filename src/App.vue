<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",

};
</script>

<style lang="scss">
@import "./index.scss";
#app {
  background: var(--bg-color);
}
</style>

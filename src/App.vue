<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html, body {
  .size; // 引用 .size 类
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  .size; // 引用 .size 类
}
</style>

<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html,
body,
#app,
#app > div {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  border: 0 none;
  box-sizing: border-box;
  outline: 0 none;
  box-shadow: none;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  transition: all .3s ease;
}
*::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

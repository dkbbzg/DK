<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  created() {
    if (true) {
      this.$router.push({ path: 'login' })
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: auto;
}
.input-box {
  width: 200px;
}
</style>


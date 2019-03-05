<template>
  <div class="home" v-if="this.$store.state.login.isLogin">
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  beforeCreate() {
    if (!this.$store.state.login.isLogin) {
      this.$router.push({ path: 'Login' })
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


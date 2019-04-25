<template>
  <div class="home">
    <div class="menu">
      <div class="logo">wwDK</div>
      <User></User>
      <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1c2c36" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'home',
  data() {
    return {
      menuShow: false
    }
  },
  components: {
    User
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
}
.input-box {
  width: 200px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.home > .menu {
  background-color: #1c2c36;
}
.home > .menu .el-menu {
  border-right: 0 none;
}
.logo {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 0 20px;
  text-align: center;
  line-height: 2;
  border-bottom: 1px solid #19232d;
}
</style>


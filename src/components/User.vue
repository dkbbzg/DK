<template>
  <div class="user w">
    <div class="user-icon">
      <img :src="this.$store.state.user.icon" alt="User Icon">
    </div>
    <div class="user-name" placement="top" trigger="click">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-if="!this.$store.state.login.isLogin">登录</el-dropdown-item>
          <el-dropdown-item v-if="!this.$store.state.login.isLogin">注册</el-dropdown-item>
          <el-dropdown-item v-if="this.$store.state.login.isLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      name: '未登录'
    }
  }
}
</script>

<style scoped>
.user {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user .user-icon {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.user .user-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user .user-name {
  display: block;
  width: 100%;
  text-align: center;
  line-height: 2;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>

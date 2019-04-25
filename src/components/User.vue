<template>
  <div class="user w">
    <div class="user-icon">
      <img :src="this.$store.state.user.UserIcon" alt="User Icon">
    </div>
    <div class="user-name">
      <div class="name">{{ this.$store.state.user.UserName }}<i class="el-icon-arrow-down el-icon--right"></i></div>
      <div class="dropdown">
        <div>
          <ul class="dropdown-ul">
            <li v-if="!this.$store.state.user.isLogin" @click="toLogin">登录用户</li>
            <li v-if="!this.$store.state.user.isLogin" @click="toRegister">注册用户</li>
            <li v-if="this.$store.state.user.isLogin">管理账号</li>
            <li v-if="this.$store.state.user.isLogin" @click="logout">退出登录</li>
          </ul>
        </div>
      </div>
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
  },
  methods: {
    toLogin() {
      this.$router.push({ path: 'Login' })
    },
    toRegister() {
      this.$router.push({ path: 'Register' })
    },
    logout() {
      this.$store.commit('userLogout');
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
  color: #fff;
  margin-top: 10px;
  position: relative;
}

.user .user-name .name {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  z-index: 3;
}

.user .el-icon-arrow-down {
  font-size: 12px;
  position: absolute;
  right: -17px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 12px;
  width: 12px;
}

.user .dropdown {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}

.user .dropdown > div {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}

.user .dropdown-ul {
  display: inline-block;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  position: absolute;
  top: 100%;
  opacity: 0;
  padding: 0;
}

.user .dropdown-ul > li {
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  overflow: hidden;
  height: 0;
  opacity: 0;
}

.user .user-name .name:hover + .dropdown .dropdown-ul,
.dropdown-ul:hover {
  padding: 10px 0;
  opacity: 1;
}

.user .user-name .name:hover + .dropdown .dropdown-ul > li,
.dropdown-ul:hover > li {
  height: 36px;
  opacity: 1;
}
</style>

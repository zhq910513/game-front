<template>
  <div id="app">
    <nav v-if="loggedIn" class="sidebar">
      <ul>
        <li v-if="role === 'root'"><a href="#">用户管理</a></li>
        <li><a href="#">游戏后台</a></li>
        <li><a href="#">支付商</a></li>
      </ul>
    </nav>
    <div class="content" v-if="loggedIn">
      <h1>欢迎来到游戏前端</h1>
      <p>从左侧导航中选择一个模块。</p>
    </div>
    <div v-else>
      <p>请先登录。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
      role: ''
    };
  },
  created() {
    // 从 localStorage 中读取角色信息
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      this.role = storedRole;
      this.loggedIn = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}

/* 左侧导航栏样式 */
.sidebar {
  width: 200px;
  background-color: #f8f8f8;
  padding-top: 20px;
  padding-left: 10px;
  position: fixed;
  height: 100%;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  text-decoration: none;
  color: #42b983;
}

.sidebar a:hover {
  text-decoration: underline;
}

/* 右侧内容区域样式 */
.content {
  margin-left: 220px; /* 确保内容区域不被导航栏遮挡 */
  padding: 20px;
  flex-grow: 1;
}
</style>

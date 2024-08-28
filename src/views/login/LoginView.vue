<template>
  <div id="login">
    <h2>后台管理系统登录</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { encryptData, decryptData } from '@/utils/handle_api_data'; // 确保路径正确

export default {
  name: "LoginView",
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const encryptedData = encryptData({
          username: this.username,
          password: this.password
        });

        const response = await fetch('http://localhost:65512/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: encryptedData })
        });

        const responseData = await response.json();
        const decryptedData = decryptData(responseData.data);

        if (responseData.code === '9999') {
          // 将角色信息存储到 Vuex 或 localStorage 中
          localStorage.setItem('role', decryptedData.role);
          console.log(decryptedData.role);
          this.$router.push({ name: 'Dashboard' }); // 使用路由名称导航
        } else {
          this.errorMessage = '用户名或密码错误';
        }
      } catch (error) {
        this.errorMessage = '登录失败，请稍后重试';
      }
    }
  }
};
</script>

<style>
/* 保持原来的样式不变 */
#login {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

#login h2 {
  margin-bottom: 20px;
}

#login form div {
  margin-bottom: 15px;
}

#login label {
  display: block;
  margin-bottom: 5px;
}

#login input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

#login button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#login button:hover {
  background-color: #359764;
}

#login p {
  color: red;
  margin-top: 10px;
}
</style>

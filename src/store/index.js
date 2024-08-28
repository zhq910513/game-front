// store/index.js 或 store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    role: '', // 初始化 role 状态
  },
  mutations: {
    setRole(state, role) {
      state.role = role; // 修改 role 状态
    }
  },
  getters: {
    role: (state) => state.role, // 获取 role 状态
  }
});

const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // 确保引入 path 模块

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // 设置路径别名
      }
    }
  }
});

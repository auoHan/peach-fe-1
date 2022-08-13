import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import { svgstore } from './src/vite_plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    svgstore()
  ],
  //别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //启动服务配置
  // server: {
  //   host: '0.0.0.0',
  //   port: 8000,
  //   open: true,
  //   https: false,
  //   proxy: {}
  // },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
})

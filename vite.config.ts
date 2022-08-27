import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import { svgstore } from './src/vite_plugins/svgstore';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    }),
    svgstore(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  //别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //启动服务配置
  server: {
    //host: '0.0.0.0',
    //port: 3000,
    //open: true,
    //https: false,
    proxy: {
      '/api/v1': {
        target: 'http://47.92.115.178:3000/',
      }
    }
  },
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

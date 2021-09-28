import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: [
      'ant-design-vue/es/locale/zh_CN'
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#F77F00',
          'link-color': '#F77F00',
          'border-radius-base': '3px'
        },
        javascriptEnabled: true,
      }
    }
  }
})

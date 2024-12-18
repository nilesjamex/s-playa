import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
       @import 'src/styles/_variables.scss';
       @import 'src/styles/_utils.scss';
       @import 'src/styles/_mixins.scss';
       @import 'src/styles/_container.scss';
       @import 'src/styles/_functions.scss';
       @import 'src/styles/_typography.scss';
       `
      }
    }
  },
})

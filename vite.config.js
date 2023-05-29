/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-02-05 02:57:01
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-29 21:34:36
 * @FilePath: /my-app/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    minify:true,
    rollupOptions: {
      output: {
        //单独将第三方库的代码打包到vendor的chunk中
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // },

        manualChunks: {
          lodash: ['lodash'],  // 将 lodash 拆分为单独的 chunk
          //这种写法不对
          // ComponentsA:['ComponentsA'],
          // ComponentsB:['ComponentsB'],
        },
      },
    },
  },
});

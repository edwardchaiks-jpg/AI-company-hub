import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 确保根路径正确，避免路由匹配失败
  build: {
    outDir: 'dist', // 明确指定构建输出目录，Vercel默认识别dist
  }
})

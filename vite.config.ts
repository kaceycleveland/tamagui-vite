import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tamaguiPlugin({
      config: './src/tamagui.config.ts',
      components: ['tamagui'],
    }),react()],
})

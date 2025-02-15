import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    define: {
      'process.env.MOVIE_BASE_URL': JSON.stringify(env.VITE_MOVIE_BASE_URL),
      'process.env.MOVIE_SECRET_KEY': JSON.stringify(env.VITE_MOVIE_SECRET_KEY)
    }
  };
});

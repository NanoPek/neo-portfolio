import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => {
  // Like react-scripts, always ship production React from `vite build`,
  // even when the shell exports NODE_ENV=development.
  if (command === 'build') process.env.NODE_ENV = 'production';

  return {
    plugins: [react(), svgr()],
    build: { outDir: 'build' },
  };
});

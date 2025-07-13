// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
    // load all env vars that start with VITE_ from .env* files
    const env = loadEnv(mode, process.cwd(), 'VITE_');

    return defineConfig({
        plugins: [react()],
        server: {
            host: true,
            port: 5173,
            proxy: {
                '/api': {
                    target: env.VITE_API_URL, // now defined
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
    });
};

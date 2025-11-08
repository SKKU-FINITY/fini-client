import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import svgr from "vite-plugin-svgr";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({

  plugins: [react()],

  root: path.resolve(__dirname, "client"),

  server: {
    host: true,
    port: 5173,

    // Allow Replit preview host
    allowedHosts: true
  },

  preview: {
    host: true,
    port: 5173
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    }
  }

});
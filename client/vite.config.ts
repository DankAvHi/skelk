import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";

export default ({ mode }) => {
     process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

     const isSecure = process.env.SSL == "true";

     return defineConfig({
          plugins: [react(), eslint()],
          server: {
               port: 3000,
               proxy: {
                    "/api": {
                         target: `${isSecure ? "https" : "http"}://localhost:${isSecure ? "8443" : "8000"}`,
                    },
               },
               https: isSecure
                    ? {
                           key: process.env.SSL_KEY,
                           cert: process.env.SSL_CERT,
                      }
                    : false,
          },
     });
};

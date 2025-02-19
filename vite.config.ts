import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    "process.env.REACT_APP_PUBLIC_POSTHOG_KEY": JSON.stringify(
      env.REACT_APP_PUBLIC_POSTHOG_KEY
    ),
    "process.env.REACT_APP_PUBLIC_POSTHOG_HOST": JSON.stringify(
      env.REACT_APP_PUBLIC_POSTHOG_HOST
    ),
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

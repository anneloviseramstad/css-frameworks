import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        profile: "./profile/index.html",
        feed: "./feed/index.html",
        register: "./register/index.html",
        create: "./create/index.html",
      },
    },
    cssCodeSplit: true,
  },
});

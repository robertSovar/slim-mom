import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "404.html",
          dest: "",
        },
      ],
    }),
  ],
  base: "/slim-mom/", // adaugă baseurl aici
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});

import { defineConfig } from "tsup";

export default defineConfig([
  // Electron main.js
  {
    entry: { main: "./src/electron/main.ts" },
    format: "esm",
    outDir: "dist",
    clean: true,
    target: "esnext",
    treeshake: true,
    external: ["electron"], // Don't bundle Electron
    outExtension: ({ format }) => {
      if (format === "esm") return { js: ".mjs" };
      if (format === "cjs") return { js: ".cjs" };
      return { js: ".js" };
    },
    esbuildOptions: (options, ctx) => {
      // Polyfill Node globals in ESM
      options.banner = {
        js: `
          import { createRequire } from 'module';

          const require = createRequire(import.meta.url);

          if (typeof globalThis.__dirname === "undefined") {
            globalThis.__dirname = new URL('.', import.meta.url).pathname;
          }
          if (typeof globalThis.__filename === "undefined") {
            globalThis.__filename = new URL(import.meta.url).pathname;
          }
        `,
      };
    },
  },

  // Electron preload.js
  {
    entry: { preload: "./src/electron/preload.ts" },
    format: "esm",
    outDir: "dist",
    clean: true,
    target: "esnext",
    treeshake: true,
    external: ["electron"], // Don't bundle Electron
    outExtension: ({ format }) => {
      if (format === "esm") return { js: ".mjs" };
      if (format === "cjs") return { js: ".cjs" };
      return { js: ".js" };
    },
  },
]);

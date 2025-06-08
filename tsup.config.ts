import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "ES2020",
  external: ["react"],
  splitting: false,
  treeshake: false,
  dts: true,
  format: ["esm"],
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";',
    };
  },
});

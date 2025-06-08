import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "ES2020",
  external: [
    "react",
    "@emotion/react",
    "@emotion/styled",
    "@mui/material",
    "@mui/icons-material",
  ],
  splitting: false,
  treeshake: false,
  dts: true,
  format: ["esm", "cjs"],
  esbuildOptions: (options) => {
    options.banner = {
      js: '"use client";',
    };
  },
});

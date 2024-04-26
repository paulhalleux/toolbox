import {Options} from "tsup";

export const config: Options = {
  outDir: "./dist",
  clean: true,
  format: "esm",
  dts: false,
  sourcemap: true,
  target: "esnext"
}
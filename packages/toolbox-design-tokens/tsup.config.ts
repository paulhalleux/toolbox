import { defineConfig } from "tsup";
import { config } from "@toolbox/typescript-config";

export default defineConfig({
  ...config,
  entry: ["src", "!src/scripts"],
});

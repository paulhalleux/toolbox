#! /usr/bin/env node
const path = require("node:path");
const { execSync } = require("node:child_process");

const [, , ...args] = process.argv;

const storybookCli = path.resolve(__dirname, "./node_modules/.bin/storybook");
const storybookConfig = path.resolve(__dirname, "./.storybook");

execSync(`${storybookCli} ${args.join(" ")} -c ${storybookConfig}`, {
  stdio: "inherit",
});

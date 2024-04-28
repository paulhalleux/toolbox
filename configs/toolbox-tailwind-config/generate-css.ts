import * as fs from "node:fs";
import { tokenLibrary } from "@toolbox/design-tokens";

const OUT_FILE = "styles.css";

// Delete the file if it exists
if (fs.existsSync(OUT_FILE)) {
  fs.unlinkSync(OUT_FILE);
}

// Write the CSS file
const variables = tokenLibrary.toCSS();
const css = `/* This file is generated by the toolbox-tailwind-config package and should not be modified directly */\n\n${variables}`;

fs.writeFileSync(OUT_FILE, css);

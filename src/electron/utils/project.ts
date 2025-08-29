import fs from "node:fs";
import { HOME_DIR } from "../consts.js";

export function createProjectHomeDirIfMissing() {
  if (!fs.existsSync(HOME_DIR)) {
    fs.mkdirSync(HOME_DIR, { recursive: true });
    console.log(`📦 Created project HOME dir: ${HOME_DIR}`);
  }
}

import fs from "node:fs";
import { HOME_DIR } from "../consts.js";

export function createProjectHomeDirIfMissing() {
  if (process.env.DEV_MODE) return;

  if (!fs.existsSync(HOME_DIR)) {
    fs.mkdirSync(HOME_DIR, { recursive: true });
    console.log(`📦 Created project HOME dir: ${HOME_DIR}`);
  }
}

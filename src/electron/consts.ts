import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const HOME_DIR = path.join(os.homedir(), ".electron-drizzle");
export const APP_DIR = path.join(__dirname, "../");

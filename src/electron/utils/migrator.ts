import path from "node:path";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { APP_DIR, HOME_DIR } from "../consts.js";

export async function applyDatabaseMigrations() {
  const DB_URL = `file:${HOME_DIR}/dev.db`;
  const MIGRATIONS_DIR = path.join(APP_DIR, "drizzle");

  console.info(`🛠️ Starting DB migrations`);
  console.info(`📄 Database URL: ${DB_URL}`);
  console.info(`📁 Migrations Folder: ${MIGRATIONS_DIR}`);

  const db = drizzle(DB_URL);

  const startTime = Date.now();
  try {
    await migrate(db, { migrationsFolder: MIGRATIONS_DIR });

    const duration = Date.now() - startTime;
    console.log(`✅ Migrations applied successfully in ${duration}ms`);
  } catch (err) {
    console.error(`❌ Migration failed:`, err);
    throw err;
  }
}

import { db } from "./src/db.js";
import * as schema from "./src/schema.js";

const user: typeof schema.users.$inferInsert = {
  email: "user@example.com",
};

await db.insert(schema.users).values(user).onConflictDoNothing();
console.log(`👤 Created user "${user.email}"`);

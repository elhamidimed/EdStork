import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

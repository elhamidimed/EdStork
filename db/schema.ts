import { pgTable, serial, text, jsonb } from "drizzle-orm/pg-core";

export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

export const lessons = pgTable("courses", {
  id: text("id").primaryKey(),
  json_content: jsonb("json-content"),
});

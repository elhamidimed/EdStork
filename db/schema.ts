import { pgTable, serial, text, jsonb } from "drizzle-orm/pg-core";

export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

export const lessons = pgTable("lessons", {
  id: text("id").primaryKey(),
  lesson_content: jsonb("lesson_content"),
});

export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  title: text("title"),
  imgSrc: text("img_source"),
});

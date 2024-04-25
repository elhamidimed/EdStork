import { pgTable, serial, text, jsonb, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const levels = pgTable("levels", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
});

export const lessons = pgTable("lessons", {
  id: text("id").primaryKey(),
  lesson_content: jsonb("lesson_content"),
  chapterId: integer("chapter_id")
    .references(() => chapters.id, {
      onDelete: "cascade",
    })
    .notNull(),
  order: integer("order").notNull(),
});

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  chapter: one(chapters, {
    fields: [lessons.chapterId],
    references: [chapters.id],
  }),
}));

export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  title: text("title")
    .notNull()
    .$default(() => "Error"),
  imgSrc: text("img_source"),
  color: text("color")
    .notNull()
    .$default(() => "red"),
});

export const chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  subject_id: serial("subject_id"),
  name: text("name"),
  progress: integer("progress"),
  order: integer("order"),
});

import { cache } from "react";
import { eq } from "drizzle-orm";
import db from "./drizzle";
import * as schema from "./schema";

export const getSubjects = cache(async () => {
  const data = await db.query.subjects.findMany();

  return data;
});

export const getSubjectbyid = cache(async (id: any) => {
  //const data = await db.query.chapters.findMany();
  const data = await db
    .select({
      id: schema.subjects.id,
      title: schema.subjects.title,
      color: schema.subjects.color,
    })
    .from(schema.subjects)
    .where(eq(schema.subjects.id, id))
    .execute();

  return data;
});

export const getChapters = cache(async (levelNumber: any) => {
  //const data = await db.query.chapters.findMany();
  const data = await db
    .select({
      id: schema.chapters.id,
      subject_id: schema.chapters.subject_id,
      name: schema.chapters.name,
      progress: schema.chapters.progress,
    })
    .from(schema.chapters)
    .where(eq(schema.chapters.subject_id, levelNumber))
    .execute();

  return data;
});

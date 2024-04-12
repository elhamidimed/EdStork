import { cache } from "react";
import db from "./drizzle";

export const getSubjects = cache(async () => {
  const data = await db.query.subjects.findMany();

  return data;
});

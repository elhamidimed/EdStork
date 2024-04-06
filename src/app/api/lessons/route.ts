import { NextRequest, NextResponse } from "next/server";
// import { drizzle } from "@xata.io/drizzle";
import { eq } from "drizzle-orm";
import db from "../../../../db/drizzle";
import * as schema from "../../../../db/schema";

export const GET = async () => {
  const lessonId = `lesson_${1}`;

  const lessonRecord = await db.query.lessons.findMany();

  return NextResponse.json(lessonRecord);
};

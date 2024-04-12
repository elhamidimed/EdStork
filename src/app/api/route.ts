import { NextRequest, NextResponse } from "next/server";
// import { drizzle } from "@xata.io/drizzle";
import { eq } from "drizzle-orm";
import db from "../../../db/drizzle";
import * as schema from "../../../db/schema";

export async function GET(request: NextRequest) {
  const lessonNumber = request.nextUrl.searchParams.get("lessonNumber");

  try {
    const lessonId = `lesson_${lessonNumber}`;

    const lessonRecord = await db
      .select({
        id: schema.lessons.id,
        lesson_content: schema.lessons.lesson_content,
      })
      .from(schema.lessons)
      .where(eq(schema.lessons.id, lessonId))
      .execute();

    if (lessonRecord.length > 0) {
      return NextResponse.json(lessonRecord[0].lesson_content);
    } else {
      return NextResponse.json(
        { message: "Lesson not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching data from Xata:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

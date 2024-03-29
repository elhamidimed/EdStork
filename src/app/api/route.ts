import { NextRequest, NextResponse } from 'next/server';
// import { drizzle } from "@xata.io/drizzle";
import { drizzle } from 'drizzle-orm/xata-http';
import { eq } from "drizzle-orm";
import { pgTable, jsonb, text } from "drizzle-orm/pg-core";
import { getXataClient } from "../../xata";

export async function GET(request: NextRequest) {
    const lessonNumber = request.nextUrl.searchParams.get('lessonNumber');

    try {
        const xata = getXataClient();
        const lessons = pgTable("courses", {
            id: text("id").primaryKey(),
            json_content: jsonb("json-content"),
        });
        const db = drizzle(xata);

        const lessonId = `lesson_${lessonNumber}`;

        const lessonRecord = await db
            .select({ id: lessons.id, json_content: lessons.json_content })
            .from(lessons)
            .where(eq(lessons.id, lessonId))
            .execute();

        if (lessonRecord.length > 0) {
            return NextResponse.json(lessonRecord[0].json_content);
        } else {
            return NextResponse.json({ message: 'Lesson not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching data from Xata:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

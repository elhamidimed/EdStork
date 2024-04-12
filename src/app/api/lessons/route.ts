import { NextRequest, NextResponse } from "next/server";
// import { drizzle } from "@xata.io/drizzle";
import { eq } from "drizzle-orm";
import db from "../../../../db/drizzle";
import { lessons } from "../../../../db/schema";

export const GET = async () => {
  const lessonRecord = await db.query.lessons.findMany();

  const response = NextResponse.json(lessonRecord);
  response.headers.set("X-Total-Count", "1");

  return response;
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const data = await db
      .insert(lessons)
      .values({ ...body })
      .returning();

    const response = NextResponse.json(data[0]);
    response.headers.set("X-Total-Count", "1");

    return response;
  } catch (error) {
    console.error("Error fetching data from Xata:", error);
    return NextResponse.json({ message: "xxxxxxxxxxxxx" }, { status: 500 });
  }
};

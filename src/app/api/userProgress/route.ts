import { NextRequest, NextResponse } from "next/server";
// import { drizzle } from "@xata.io/drizzle";
import { eq } from "drizzle-orm";
import db from "../../../../db/drizzle";
import { userProgress } from "../../../../db/schema";
import { user } from "@nextui-org/react";

export const GET = async (req: NextRequest) => {
    const lessonNumber = req.nextUrl.searchParams.get("lessonNumber");
    const userId = req.nextUrl.searchParams.get("userId");
    const userProgressRecord = await db.query.userProgress.findMany({
        where: eq(userProgress.userId, userId) && eq(userProgress.lessonNumber, lessonNumber),
        });

  if (userProgressRecord.length === 0) {
    return NextResponse.json({ message: "No progress found" }, { status: 404 });
  }
  const response = NextResponse.json(userProgressRecord[0]);
  response.headers.set("X-Total-Count", "1");
  return response;
};
export const POST = async (req: Request) => {
    try {
      const body = await req.json();
      console.log(body);
  
      const existingProgress = await db
        .select()
        .from(userProgress)
        .where(
          eq(userProgress.userId, body.userId) &&
          eq(userProgress.lessonNumber, body.lessonNumber)
        );
  
      if (existingProgress.length > 0) {
        // Update existing progress
        const updatedProgress = await db
          .update(userProgress)
          .set({ 
            chapterIndex: body.chapterIndex,
            pageIndex: body.pageIndex,
            selectedChoices: body.selectedChoices,
            isQuizSection: body.isQuizSection 
          })
          .where(
            eq(userProgress.userId, body.userId) && 
            eq(userProgress.lessonNumber, body.lessonNumber)
          )
          .returning();
  
        const response = NextResponse.json(updatedProgress[0]);
        response.headers.set("X-Total-Count", "1");
        return response;
      } else {
        // Create new progress
        const newProgress = await db
          .insert(userProgress)
          .values({ ...body })
          .returning();
  
        const response = NextResponse.json(newProgress[0]);
        response.headers.set("X-Total-Count", "1");
        return response;
      }
    } catch (error) {
      console.error("Error fetching data from Xata:", error);
      return NextResponse.json({ message: "xxxxxxxxxxxxx" }, { status: 500 });
    }
  };
  
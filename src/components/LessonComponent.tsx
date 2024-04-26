"use client";
import React, { useEffect, useState } from "react";
import QuizComponent from "./QuizComponent";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { getProgress } from "../../db/queries";
import { userProgress } from "../../db/schema";
import db from "../../db/drizzle";

const LessonComponent = ({ lessonNumber }: { lessonNumber: string }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  var userId = "";
  if (isLoaded && user != null) userId = user.id;

  const [lessonContent, setLessonContent] = useState<any>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<any>({});
  const [isQuizSection, setQuizSection] = useState(false);

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const response = await fetch(`/api?lessonNumber=${lessonNumber}`);
        if (response.ok) {
          const data = await response.json();
          setLessonContent(data.course);
        } else {
          console.error("Failed to fetch lesson data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }

      try {
        const progress = await fetch(
          `/api/userProgress?userId=${userId}&lessonNumber=${lessonNumber}`
        );
        if (progress.ok) {
          const data = await progress.json();
          setCurrentChapterIndex(data.chapterIndex);
          setCurrentPageIndex(data.pageIndex);
          setSelectedChoices(data.selectedChoices);
          setQuizSection(data.isQuizSection);
        } else {
          console.error(
            "Failed to fetch lesson progress:",
            progress.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching lesson progress:", error);
      }
    };

    fetchLessonData();
  }, [lessonNumber]);

  const saveProgress = async () => {
    try {
      const response = await fetch("/api/userProgress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonNumber,
          userId,
          chapterIndex: currentChapterIndex,
          pageIndex: currentPageIndex,
          selectedChoices,
          isQuizSection,
        }),
      });
      if (!response.ok) {
        console.error("Failed to save progress:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const handleNextPage = () => {
    if (isQuizSection) {
      setQuizSection(false);
      if (
        lessonContent &&
        currentPageIndex <
          lessonContent.chapters[currentChapterIndex].pages.length - 1
      ) {
        setCurrentPageIndex(currentPageIndex + 1);
      } else if (currentChapterIndex < lessonContent.chapters.length - 1) {
        setCurrentChapterIndex(currentChapterIndex + 1);
        setCurrentPageIndex(0);
      }
    } else if (
      lessonContent &&
      lessonContent.chapters[currentChapterIndex].pages[currentPageIndex]
        .quizzes
    ) {
      setQuizSection(true);
    }
    saveProgress();
  };

  const handlePreviousPage = () => {
    const setQuizSectionIfPossible = () => {
      if (
        lessonContent.chapters[currentChapterIndex].pages[currentPageIndex]
          .quizzes
      )
        setQuizSection(true);
    };
    if (isQuizSection) {
      setQuizSection(false);
    } else if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      setQuizSectionIfPossible();
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentPageIndex(
        lessonContent.chapters[currentChapterIndex - 1].pages.length - 1
      );
      setQuizSectionIfPossible();
    }
  };

  const handleChoiceChange = (question: string, selectedChoices: string[]) => {
    setSelectedChoices({ ...selectedChoices, [question]: selectedChoices });
  };

  if (!lessonContent) {
    return <div>Loading...</div>;
  }

  const currentChapter = lessonContent.chapters[currentChapterIndex];
  const currentPage = currentChapter.pages[currentPageIndex];

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center max-w-full">
        <h2 className="text-xl font-bold text-justify">
          {currentChapter.title}
          <br />
          {currentPage.title}
        </h2>
        {/* <h3 className="text-lg font-bold">Page {currentPageIndex + 1}</h3> */}
      </div>

      {!isQuizSection ? (
        <div className="flex flex-col items-center max-w-full">
          {currentPage.figures &&
            currentPage.figures.map((figure: any, index: number) => (
              <img
                key={index}
                src={figure.url}
                alt={figure.caption}
                className="max-w-full h-auto rounded-lg w-3/4"
              />
            ))}

          <p className="text-lg w-3/4 text-justify">{currentPage.content}</p>
        </div>
      ) : null}
      {isQuizSection && currentPage.quizzes ? (
        <div className="flex flex-col items-start space-y-4">
          {currentPage.quizzes.map((quiz: any, index: number) => (
            <QuizComponent
              key={index}
              quiz={quiz}
              onChange={(selectedChoices: string[]) =>
                handleChoiceChange(quiz.question, selectedChoices)
              }
            />
          ))}
        </div>
      ) : null}

      <div className="flex flex-row items-center justify-between space-x-4">
        <Button
          variant="secondary"
          onClick={handlePreviousPage}
          disabled={
            currentChapterIndex === 0 &&
            currentPageIndex === 0 &&
            isQuizSection === false
          }
        >
          Previous
        </Button>
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={
            currentChapterIndex === lessonContent.chapters.length - 1 &&
            currentPageIndex === currentChapter.pages.length - 1 &&
            isQuizSection === true
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LessonComponent;

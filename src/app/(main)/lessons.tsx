import { UnitBanner } from "./lessons-banner";
import { LessonButton } from "./lesson-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: { id: number; completed: boolean }[];
  activeLesson:
    | {
        id: number;
      }
    | undefined;
  activeLessonPercentage: number;
  color: string;
};

export const Lessons = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
  color,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} color={color} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
              color={color}
            />
          );
        })}
      </div>
    </>
  );
};

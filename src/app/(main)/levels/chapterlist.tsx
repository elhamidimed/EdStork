"use client";
import { chapters } from "../../../../db/schema";
import { ChapterCard } from "./chaptercard";

type Props = {
  chapters: (typeof chapters.$inferSelect)[];
  activechapterID: number;
};

export const ChapterList = ({ chapters, activechapterID }: Props) => {
  return (
    <div className="w-full pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210,1fr))] gap-4">
      {chapters.map((chapter) => (
        <a href={"/courses/" + chapter.subject_id}>
          <ChapterCard
            key={chapter.id}
            id={chapter.id}
            title={chapter.name}
            onClick={() => {}}
            disabled={false}
            active={chapter.progress == 100}
            progress={chapter.progress}
          />
        </a>
      ))}
    </div>
  );
};

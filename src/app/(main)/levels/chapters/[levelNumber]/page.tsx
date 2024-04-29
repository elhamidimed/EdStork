import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { getChapters, getSubjectbyid } from "../../../../../../db/queries";
import { List } from "../../list";
import { ChapterList } from "../../chapterlist";

const Chapters = async ({ params }: { params: { levelNumber: any } }) => {
  const levelNumber = params.levelNumber;
  const data = await getChapters(levelNumber as string);
  const subject = await getSubjectbyid(levelNumber);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
        {"Chapitres de "}
        {subject ? subject.at(0)?.title : ""}
      </h1>
      <ChapterList
        chapters={data.map((chapter) => ({ ...chapter, order: null }))}
        activechapterID={1}
      />
    </div>
  );
};

export default Chapters;

import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { getSubjects } from "../../../../db/queries";
import { List } from "./list";

const Levels = async () => {
  const data = await getSubjects();
  return (
    <div className="flex gap-[48px] px-6 w-full">
      <List subjects={data} activesubjectID={1} />
    </div>
  );
};

export default Levels;

import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import atom from "@/imcons/atom.png";
import { Lessons } from "../lessons";

var mockLessons = [
  { id: 1, completed: true },
  { id: 2, completed: true },
  { id: 3, completed: true },
  { id: 4, completed: false },
  { id: 5, completed: false },
  { id: 6, completed: false },
  { id: 7, completed: false },
  { id: 8, completed: false },
  { id: 9, completed: false },
];

export default function Levels() {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <div className="mb-10"></div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "physics", imgSrc: atom.src }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
}

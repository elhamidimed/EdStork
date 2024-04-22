import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import atom from "@/imcons/atom.png";
import { Lessons } from "../../lessons";
import { getSubjectbyid } from "../../../../../db/queries";

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

const Courses = async ({ params }: { params: { subjectId: any } }) => {
  const subject = await getSubjectbyid(params.subjectId);

  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header subject={subject[0].title} subject_id={params.subjectId} />
        <div className="mb-10">
          <Lessons
            id={1}
            order={1}
            title="Mécanique"
            description="mécanique Newtonienne et lois de conservation"
            lessons={mockLessons}
            activeLesson={{ id: 3 }}
            activeLessonPercentage={60}
            color={subject[0].color}
          />
        </div>
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
};

export default Courses;

"use client";
import { subjects } from "../../../../db/schema";

type Props = {
  subjects: (typeof subjects.$inferSelect)[];
  activesubjectID: number;
};

export const List = ({ subjects, activesubjectID }: Props) => {
  return (
    <div className="w-full pt-6">
      {" "}
      {/* Full width of the screen */}
      <div className="grid grid-cols-1 gap-4">
        {" "}
        {subjects.map((subject, index) => (
          <a
            href={"/levels/chapters/" + subject.id}
            style={{ textDecoration: "none", color: "inherit" }}
            key={subject.id}
          >
            <div className="card bg-base-100 shadow-xl image-full flex flex-col overflow-hidden rounded-lg ">
              {" "}
              {/* Flex column to manage internal spacing */}
              <figure className="flex-1 flex justify-center items-center p-4 h-52 overflow-hidden rounded-lg">
                {" "}
                {/* Flex-1 for equal height */}
                <img
                  src={"" + subject.imgSrc}
                  alt={"" + subject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />{" "}
                {/* Responsive image */}
              </figure>
              <div className="card-body flex items-center justify-center p-4">
                {" "}
                {/* Centered title */}
                <h2 className="card-title text-center text-xl">
                  {subject.title}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

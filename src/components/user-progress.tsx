import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { GiSolarSystem } from "react-icons/gi";
import { InfinityIcon } from "lucide-react";
import pointsicon from "@/imcons/points.svg";
import heartsicon from "@/imcons/heart.svg";

type Props = {
  activeCourse: { title: string; imgSrc: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/">
        <Button variant={"ghost"}>
          {" "}
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/">
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={pointsicon.src}
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/">
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src={heartsicon.src}
            height={22}
            width={22}
            alt="Hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? <InfinityIcon /> : hearts}
        </Button>
      </Link>
    </div>
  );
};

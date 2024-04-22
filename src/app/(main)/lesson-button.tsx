"use client";

import Link from "next/link";
import { Check, Crown, Star, Lock } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import "react-circular-progressbar/dist/styles.css";

// TODO : refactor the color to depend on the subject

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  color: string;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
  color,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : locked ? Lock : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <div
              className={`absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-${color}-500 bg-white rounded-xl animate-bounce tracking-wide z-10`}
            >
              Start
              <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
            </div>
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: color,
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <div
                className={cn(
                  "flex items-center justify-center h-[70px] w-[70px] rounded-2xl border-2 border-b-[12px] border-r-[12px] border-gray-500 ",
                  locked ? "bg-slate-200" : `bg-${color}-400`
                )}
                style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
              >
                <Button
                  variant={locked ? "locked" : "secondary"}
                  className={cn(
                    "-mt-[10px] -ml-[10px] h-[55px] w-[55px] border-2 border-b-[11px] border-r-[11px] hover:-mt-1 hover:-ml-1 border-gray-500 ",
                    !locked ? `bg-${color}-400 hover:bg-${color}-300` : ""
                  )}
                >
                  <Icon
                    className={cn(
                      "-rotate-45",
                      locked
                        ? "fill-neutral-400 text-neutral-400 stroke-neutral-400 "
                        : "fill-primary-foreground text-primary-foreground ",
                      isCompleted && "fill-none stroke-[4]"
                    )}
                  />
                </Button>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <div
            className={cn(
              "flex items-center justify-center h-[70px] w-[70px] rounded-2xl border-2 border-b-[12px] border-r-[12px] border-gray-500 ",
              locked ? "bg-slate-200" : `bg-${color}-400`
            )}
            style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
          >
            <Button
              variant={locked ? "locked" : "secondary"}
              className={cn(
                "-mt-[10px] -ml-[10px] h-[55px] w-[55px] border-2 border-b-[11px] border-r-[11px] hover:-mt-1 hover:-ml-1 border-gray-500 ",
                !locked ? `bg-${color}-400 hover:bg-${color}-300` : ""
              )}
            >
              <Icon
                className={cn(
                  "-rotate-45",
                  locked
                    ? " stroke-black h-5 w-5 "
                    : "fill-primary-foreground text-primary-foreground ",
                  isCompleted && "fill-none stroke-[4]"
                )}
              />
            </Button>
          </div>
        )}
      </div>
    </Link>
  );
};

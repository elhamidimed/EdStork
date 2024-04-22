import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";
type Props = {
  title: string | null;
  id: number;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
  progress: number | null;
};

export const ChapterCard = ({
  title,
  id,
  onClick,
  disabled,
  active,
  progress,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div
        className={cn(
          "min-[24px] w-full flex justify-end h-14",
          active && "p-2"
        )}
      >
        <div
          className={cn(
            "rounded-md flex items-center justify-center p-1.5",
            active && "bg-green-600"
          )}
        >
          {active ? (
            <Check className="text-white stroke-[4] w-5 h-5" />
          ) : (
            <CircularProgress
              variant="determinate"
              value={progress ? progress : 0}
              color="success"
              thickness={6}
            />
          )}
        </div>
      </div>
      <p className="text-neutral-700 text-center font-bold text-2xl mb-4">
        {title}
      </p>

      <div></div>
    </div>
  );
};

import { cn } from "@/lib/utils";
import { GiShoebillStork } from "react-icons/gi";

type Props = {
  className?: string;
};
export const SideBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-blue-700 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col ",
        className
      )}
    >
      something
    </div>
  );
};

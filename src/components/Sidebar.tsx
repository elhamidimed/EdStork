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
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-1">
        <p className=" font-bold tracking-tight text-3xl">
          Train
          <span className="text-[#fbd542] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            stork
          </span>
        </p>
        <GiShoebillStork className="ml-2 " size={25} />
      </div>
    </div>
  );
};

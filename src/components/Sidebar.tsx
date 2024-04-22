import { cn } from "@/lib/utils";
import Link from "next/link";
import { GiShoebillStork } from "react-icons/gi";
import { SidebarItem } from "./sidebar-item";
import learn from "@/imcons/learn.svg";
import board from "@/imcons/leaderboard.svg";
import quests from "@/imcons/quests.svg";
import shop from "@/imcons/stats.png";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react"; // TODO : maybe use placeholders they look more professional

type Props = {
  className?: string;
};
export const SideBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex pt-2 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="flex flex-row">
          <p className="ml-4 font-bold tracking-tight text-3xl">
            Train
            <span className="text-[#fbd542] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
              stork
            </span>
          </p>
          <GiShoebillStork className="ml-2 mb-3" size={35} />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Toutes les matières"
          href="/courses"
          iconSrc={learn.src}
        />
        <SidebarItem label="Progrés" href="/" iconSrc={board.src} />
        <SidebarItem
          label="Préparer mon examen"
          href="/"
          iconSrc={quests.src}
        />
        <SidebarItem label="Statistiques" href="/" iconSrc={shop.src} />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

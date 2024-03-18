import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "@/components/Sidebar";
import { Menu } from "lucide-react";

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-black" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side={"left"}>
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

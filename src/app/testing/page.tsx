import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Courses() {
  return (
    <div className=" bg-red-600">
      <div className=" bg-red-600 h-full">
        {" "}
        <Sheet>
          <SheetTrigger>
            <Menu className="text-black" />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            something
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { SideBar } from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

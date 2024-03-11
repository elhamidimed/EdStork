import { ReactNode } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./icons";
import myImage from "../imcons/apprendre.png";
import { Button, buttonVariants } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="bg-white sticky z-50">
      <header className="relative bg-white">
        <MaxWidthWrapper className="py-[15px]">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* TODO : Mobile Nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  {/*<Icons.logo className="h-10 w-10" />*/}
                  <img src={myImage.src} alt="" width={50} height={50} />
                </Link>
                <h1 className="ml-5 pt-3 font-bold text-gray-900 text-xl">
                  Storkya
                </h1>
              </div>
              <div>
                <Button className="bg-White-500 text-black font-bold text-base border-2 border-black hover:shadow-md hover:bg-slate-50 py-[2px] px-[25px]">
                  Log in{" "}
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default NavBar;

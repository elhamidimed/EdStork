import { ReactNode } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "./icons";
import myImage from "../imcons/apprendre.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { GiShoebillStork } from "react-icons/gi";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const NavBar = () => {
  //TODO : make the Get started button appear in the navigation bar when we scroll down
  return (
    <Navbar
      className="sticky z-50 pt-4 pb-2 drop-shadow-md"
      isBlurred={false}
      isBordered={true}
    >
      <NavbarBrand className="pl-[5%]">
        <p className="ml-4 font-bold tracking-tight text-3xl">
          Train
          <span className="text-[#fbd542] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
            stork
          </span>
        </p>
        <GiShoebillStork className="ml-2 mb-3" size={40} />
      </NavbarBrand>

      <NavbarContent justify="end" className="pr-[5%]">
        <NavbarItem className="flex">
          <Link href="#">
            <Button
              className="bg-White-500 text-black font-bold text-base  py-[10px] px-[25px]"
              variant={"link"}
            >
              Log In &crarr;{" "}
            </Button>
          </Link>
          <SignUpButton mode="modal">
            <Link href="#">
              <Button className="bg-White-500 text-black font-bold text-base border-2 border-black hover:shadow-md hover:bg-slate-50 py-[10px] px-[25px]">
                Sign up{" "}
              </Button>
            </Link>
          </SignUpButton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
  //return (
  // <header className=" sticky top-0 bg-white">
  //   <MaxWidthWrapper className="py-[15px]">
  //     <div className="border-b border-gray-200">
  //       <div className="flex h-16 items-center justify-between">
  //         {/* TODO : Mobile Nav */}
  //         <div className="ml-4 flex lg:ml-0">
  //           <Link href="/">
  //             {/*<Icons.logo className="h-10 w-10" />*/}
  //             <img src={myImage.src} alt="" width={50} height={50} />
  //           </Link>
  //           <h1 className="ml-5 pt-3 font-bold text-gray-900 text-xl">
  //             Storkya
  //           </h1>
  //         </div>
  //         <div>
  //           <Button className="bg-White-500 text-black font-bold text-base border-2 border-black hover:shadow-md hover:bg-slate-50 py-[2px] px-[25px]">
  //             Log in{" "}
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </MaxWidthWrapper>
  // </header>
  //);
};

export default NavBar;

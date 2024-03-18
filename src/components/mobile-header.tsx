import { MobileSideBar } from "./MobileSideBar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
export const MobileHeader = () => {
  //   return (
  //     <Navbar
  //       className="lg:hidden px-4 h-[50px] flex items-center border-b fixed top-0 w-full z-50 drop-shadow-md"
  //       isBlurred={false}
  //       isBordered={true}
  //     >
  //       <MobileSideBar />
  //     </Navbar>
  //   );
  return (
    <nav className="lg:hidden px-4 h-[50px] flex items-center  border-b fixed top-0 w-full z-50 drop-shadow-md">
      <MobileSideBar />
    </nav>
  );
};

import "@/app/globals.css";
import { SideBar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const font = Nunito({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <html>
        <body className={font.className}>
          <MobileHeader />
          <SideBar className="hidden lg:flex" />
          <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default MainLayout;

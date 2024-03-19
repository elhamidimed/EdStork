import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import ReviewsSection from "@/components/reviews";
import Content from "@/components/content";
import Courses from "@/components/courses";
import { Separator } from "@/components/ui/separator";
import { ClerkProvider } from "@clerk/nextjs";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            font.className
          )}
        >
          <main className="relative flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow flex-1 mt-10">{children}</div>
            <ReviewsSection className="pt-5 mb-4" />
            <Content />
            <Separator className="mx-auto w-full max-w-screen-xl px-2.5 md:px-18 mb-7" />
            <Courses />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

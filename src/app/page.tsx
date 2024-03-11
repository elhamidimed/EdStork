import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import myImage from "./First_image.png";
import subjects from "./subject";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between mx-[34px] mb-[48px] px-[8px] py-[25px]">
        <div>
          <div className="pt-12">
            <h1 className="font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Learn by <span className="text-blue-600">doing</span>.
            </h1>
            <h2 className="tracking-tight text-gray-900 sm:text-2xl mb-8">
              Interactive lessons in{" "}
              <span style={{ fontWeight: 640 }}>
                math, data analysis,
                <br />
                computer science, and programming.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="w-200">
              <Link href="products/">
                <Button className="w-[280px] h-[56px] bg-green-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={myImage.src} alt="Image" width={568} height={397} />
        </div>
      </div>
      <div className="flex justify-between">
        {subjects.map((subject) => {
          return (
            //TODO : make these clickable links
            <div className="flex justify-between">
              <img src={subject.image.src} alt="Image" width={32} height={32} />
              <div className="pl-2 pt-1 text-lg ">{subject.name}</div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}

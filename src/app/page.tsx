import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import myImage from "./First_image.png";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
            {" "}
            learn by <span className="text-blue-600">doing</span>.
          </h1>
          <p className="text-left box-border">
            Interactive lessons in{" "}
            <span style={{ fontWeight: "bold" }}>
              math, data analysis,
              <br />
              computer science, and programming.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="w-10">
              <Link href="products/" className={buttonVariants()}>
                Get Started
              </Link>
            </div>
            <Button variant="ghost">Log in &rarr;</Button>
          </div>
        </div>
        <div>
          <img src={myImage.src} alt="Image" width={400} height={400} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
//import myImage from "./First_image.png";
import myImage from "../imcons/chip.gif";
import subjects from "./subject";
import SubjectDialog from "@/components/SubjectDialog";
import { GiSolarSystem } from "react-icons/gi";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center mx-[34px] mb-[48px] px-[8px] py-[25px] md:flex-row flex-col-reverse">
        <div className="flex flex-col items-center md:items-start">
          <div className="pt-12">
            <h1 className="font-bold tracking-tight text-gray-900 sm:text-[55px] mb-6 md:text-left text-center">
              Apprends en{" "}
              <span className="text-[#fbd542] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                {" "}
                pratiquant
              </span>
              .
            </h1>
            <h2 className="tracking-tight text-gray-900 sm:text-2xl mb-8 md:text-left text-center">
              Leçons interactives de{" "}
              <span style={{ fontWeight: 640 }}>
                de maths, physiques,
                <br />
                informatiques et de programmation.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="w-200">
              <Link href="">
                <Button className="w-[280px] h-[56px]" variant="main">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src={myImage.src}
            alt="Image"
            width={568}
            height={397}
            className="-mt-[80px]"
          />
        </div>
      </div>
      <div className="flex justify-between pt-10">
        {subjects.map((subject) => {
          return (
            //TODO : for the description I think it's better if we keep it simple with a list of content (think about using the cube icons in react for bullet points they look cool :) )
            <SubjectDialog title={subject.name}>
              {[
                <div className="flex justify-between">
                  {subject.icon}

                  <div className="pl-2 pt-1 text-sm md:text-lg">{subject.name}</div>
                </div>,
                <p>{subject.description}</p>,
              ]}
            </SubjectDialog>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}

//TODO : make an animateGif config in tailwind to make the gifs go slower or faster

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthWrapper from "./MaxWidthWrapper";
import personA from "../imcons/PersonA.png";
import personB from "../imcons/PersonB.png";
import personC from "../imcons/PersonC.png";
import personD from "../imcons/PersonD.png";
import stars from "../imcons/five-stars.png";
// TODO : search for stars in black and white and preferable not just five stars :)
const reviews = [
  {
    name: "personA",
    image: personA,
    rate: stars,
    msg: "Superbe appli ! Les leçons interactives sont captivantes, les explications sont claires, et la diversité des sujets est géniale. J'ai remarqué une nette amélioration dans ma compréhension des sujets complexes depuis que j'utilise cette appli. Je la recommande vivement !",
  },
  {
    name: "personB",
    image: personB,
    rate: stars,
    msg: "Ressource incroyable ! La qualité du contenu est exceptionnelle, et j'adore comment cela me pousse à réfléchir de manière critique. L'aspect communautaire est également un énorme avantage. C'est comme avoir un tuteur personnel dans ma poche !",
  },
  {
    name: "personC",
    image: personC,
    rate: stars,
    msg: "Un vrai bijou ! Les leçons sont présentées de manière facile à comprendre tout en étant stimulantes intellectuellement. J'apprécie la façon dont l'appli s'adapte à mon style d'apprentissage et à mon rythme.",
  },
  {
    name: "personD",
    image: personD,
    rate: stars,
    msg: "Révolutionnaire ! Cette appli a ravivé ma passion pour l'apprentissage. La nature interactive rend l'étude agréable, et les éléments de gamification ajoutent une motivation supplémentaire.",
  },
];

export function ReviewsSection({ className }: { className?: string }) {
  return (
    <MaxWidthWrapper className={className}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full px-50"
      >
        <CarouselContent>
          {reviews.map((person, index) => (
            <CarouselItem key={index} className="md:basis-1/5 lg:basis-1/3">
              <div className="p-1">
                <div className="flex justify-left">
                  <img
                    src={person.image.src}
                    alt="Image"
                    width={45}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <div className=" pl-2 text-lg ">{person.name}</div>
                    <img
                      src={person.rate.src}
                      alt="rating"
                      width={100}
                      className="pl-2"
                    />
                  </div>
                </div>
                <p className="pt-1">{person.msg}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MaxWidthWrapper>
  );
}

export default ReviewsSection;

import { ReactNode } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import craddle from "../imcons/craddle.gif";
import multipleSin from "../imcons/multipleSin.gif";
import { cn } from "@/lib/utils";
import { PiLightningLight } from "react-icons/pi";
import { PiLightningFill } from "react-icons/pi";
import { PiCircleDashed } from "react-icons/pi";

const ourcontent = [
  {
    title: "Apprends à ton niveau",
    description:
      "Les étudiants comme les professionnels peuvent perfectionner leurs compétences de base ou en acquérir de nouvelles. Progressez grâce à des leçons et des défis adaptés à votre niveau. ",
    image: craddle,
  },
  {
    title: "Apprentissage efficace et pratique",
    description:
      "Les leçons visuelles et interactives rendent les concepts intuitifs, de sorte que même les idées les plus complexes deviennent évidentes. Nos commentaires en temps réel et nos explications simples rendent l'apprentissage efficace.",
    image: multipleSin,
  },
];
const ContentCard = ({
  width,
  height,
  className,
  className1,
  className2,
  title,
  description,
  imag,
  imageToTheRight,
}: {
  width?: number;
  height?: number;
  className?: string;
  className1?: string;
  className2?: string;
  title?: string;
  description?: string;
  imag?: string;
  imageToTheRight?: boolean;
}) => {
  if (imageToTheRight) {
    return (
      <div className={cn("flex ml-10", className)}>
        <div className={cn("w-2/5 ml-auto", className1)}>
          <h1 className=" text-left font-bold text-2xl mb-4 "> {title}</h1>
          <p className="text-left text-gray-600 text-lg">{description}</p>
        </div>
        <img
          src={imag}
          alt=""
          className={cn("w-2/5 mr-auto", className2)}
          width={width ? width : 205}
          height={height ? height : 280}
        />
      </div>
    );
  } else {
    return (
      <div className={cn("flex ml-10", className)}>
        <img
          src={imag}
          alt=""
          className={cn("w-2/5 ml-auto", className2)}
          width={205}
          height={280}
        />
        <div className={cn("w-2/5 mr-auto", className1)}>
          <h1 className=" text-left font-bold text-2xl mb-4 "> {title}</h1>
          <p className="text-left text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    );
  }
};

const Content = () => {
  return (
    <div className="mt-8">
      <MaxWidthWrapper className="mb-[80px]">
        {" "}
        <h1 className="mt-[42px] mb-[16px] font-bold text-3xl text-center">
          Maîtriser les sujets en
          <span className="text-blue-600"> 15 minutes </span> par jour
        </h1>
        <p className="text-gray-500 text-center text-xl">
          Que vous soyez un débutant ou que soyez déjà prêt à plonger dans la
          physique quantique et au-delà, <br />
          Storkya vous permet de vous perfectionner rapidement grâce à des
          leçons amusantes et facile à assimiler.
        </p>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div>
          <ContentCard
            title={ourcontent[0].title}
            description={ourcontent[0].description}
            imag={ourcontent[0].image.src}
            imageToTheRight={true}
            className1="pt-[50px]"
            className="-mb-9"
          />
        </div>
        <div>
          <ContentCard
            width={100}
            height={200}
            title={ourcontent[1].title}
            description={ourcontent[1].description}
            imag={ourcontent[1].image.src}
            imageToTheRight={false}
            className1="pt-[150px]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Content;

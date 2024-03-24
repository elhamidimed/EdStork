import { ReactNode } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import craddle from "../imcons/General.gif";
import multipleSin from "../imcons/multipleSin.gif";
import { cn } from "@/lib/utils";
import { Grid, Box } from "@radix-ui/themes";
import { PiLightningLight } from "react-icons/pi";
import { PiLightningFill } from "react-icons/pi";
import { PiLightningDuotone } from "react-icons/pi";

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

const DaysCard = ({
  day,
  children,
}: {
  day?: string;
  children?: ReactNode;
}) => {
  return (
    <div>
      <h1 className="text-center mb-2 font-bold">{day}</h1>
      {children}
    </div>
  );
};
const ContentCard = ({
  width,
  height,
  className,
  classNameText,
  classNameImage,
  title,
  description,
  imag,
  imageToTheRight,
}: {
  width?: number;
  height?: number;
  className?: string;
  classNameText?: string;
  classNameImage?: string;
  title?: string;
  description?: string;
  imag?: string;
  imageToTheRight?: boolean;
}) => {
  var firstComponent = (
    <div
      className={
        classNameText ? classNameText : "w-1/3 flex-col justify-left items-left"
      }
    >
      <h1 className=" text-left font-bold text-2xl mb-4 "> {title}</h1>
      <p className="text-left text-gray-600 text-lg text-justify">
        {description}
      </p>
    </div>
  );

  var secondComponent = (
    <img
      src={imag}
      alt=""
      className={cn(classNameImage ? classNameImage : "")}
      width={width ? width : 205}
      height={height ? height : 280}
    />
  );

  if (imageToTheRight) {
    return (
      <div className={cn("flex", className)}>
        {firstComponent} {secondComponent}
      </div>
    );
  } else {
    return (
      <div className={cn("flex", className)}>
        {secondComponent}
        {firstComponent}
      </div>
    );
  }
};

const Content = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <MaxWidthWrapper className="mb-[80px]">
        <div className="flex flex-col items-center w-3/4 sm:w-full mb-4">
          <h1 className="mt-[42px] mb-[16px] font-bold text-2xl sm:text-3xl text-center">
            Maîtriser les sujets en
            <span className="text-[#fbd542] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">
              {" "}
              15 minutes{" "}
            </span>{" "}
            par jour
          </h1>
          <p className="text-gray-500 text-center text-md sm:text-xl">
            Que vous soyez un débutant ou que soyez déjà prêt à plonger dans la
            physique quantique et au-delà, <br />
            Storkya vous permet de vous perfectionner rapidement grâce à des
            leçons amusantes et facile à assimiler.
          </p>
        </div>

        <ContentCard
          title={ourcontent[0].title}
          description={ourcontent[0].description}
          imag={ourcontent[0].image.src}
          imageToTheRight={true}
          classNameText="self-center w-2/3 sm:w-1/3"
          classNameImage="self-center w-2/3 sm:w-1/4"
          className="flex-col sm:flex-row justify-around items-center"
          width={200}
          height={200}
        />
        {/* <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="flex-basis-1/2">
            <div className="flex flex-col justify-center">
              <img
                src={ourcontent[1].image.src}
                alt=""
                className="self-center w-2/3 sm:w-2/3"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex-basis-1/2">
            <div className="flex flex-col justify-center">
              <div className="self-center w-2/3 sm:w-2/3 flex flex-col justify-left items-left">
                <h1 className=" text-left font-bold text-2xl mb-4 ">
                  {" "}
                  {"Apprentissage efficace et pratique"}
                </h1>
                <p className="text-left text-gray-600 text-lg text-justify">
                  Les leçons visuelles et interactives rendent les concepts
                  intuitifs, de sorte que même les idées les plus complexes
                  deviennent évidentes. Nos commentaires en temps réel et nos
                  explications simples rendent l&apos;apprentissage efficace.
                </p>
              </div>
            </div>
          </div>

        </div> */}
        <ContentCard
          title={ourcontent[1].title}
          description={ourcontent[1].description}
          imag={ourcontent[1].image.src}
          imageToTheRight={false}
          classNameText="self-center w-2/3 sm:w-1/3"
          classNameImage="self-center w-2/3 sm:w-1/4"
          className="flex-col-reverse sm:flex-row justify-around items-center"
        />

        <div className="flex flex-col sm:flex-row justify-around items-center">
          <div className="self-center w-2/3 sm:w-1/3 flex flex-col justify-left items-left">
            <h1 className=" text-left font-bold text-2xl mb-4 ">
              {" "}
              {"Restes Motivé(e)"}
            </h1>
            <p className="text-left text-gray-600 text-lg text-justify">
              Crées une habitude d&apos;apprentissage grâce à un contenu amusant
              et toujours bien rythmé, à un suivi des progrès sous forme de jeu et
              à des rappels chaleureux.
            </p>
          </div>
          <div className="w-2/5 sm:w-1/4">
            <div className="flex justify-between my-[80px]">
              <DaysCard day="Lu">
                <PiLightningFill size="50px" color="#fbd542"></PiLightningFill>
              </DaysCard>
              <DaysCard day="Ma">
                <PiLightningFill
                  className="opacity-50 animate-wiggle"
                  size="50px"
                  color="#fbd542"
                ></PiLightningFill>
              </DaysCard>
              <DaysCard day="Me">
                <PiLightningDuotone
                  size="50px"
                  color="#fbd542"
                ></PiLightningDuotone>
              </DaysCard>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Content;

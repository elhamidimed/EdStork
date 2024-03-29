import imgMath from "../imcons/math.png";
import imgPhysics from "../imcons/topic-physics.png";
import imgInfo from "../imcons/computer-science.png";
import { GiSolarSystem } from "react-icons/gi";
import { TbMathIntegrals } from "react-icons/tb";
import { MdOutlineBiotech } from "react-icons/md";

const subjects = [
  {
    name: "Mathématiques",
    image: imgMath,
    icon: <TbMathIntegrals size={32} />,
    description:
      "Plongez dans le monde fascinant des nombres, des formules et des équations avec notre cours de mathématiques. Des concepts fondamentaux comme l'algèbre et la géométrie aux sujets avancés tels que le calcul différentiel et intégral, ce cours vous préparera à résoudre les défis mathématiques avec confiance et précision.",
  },
  {
    name: "Physiques",
    image: imgPhysics,
    icon: <GiSolarSystem size={32} />,
    description:
      "Explorez les lois fondamentales de l'univers et découvrez les principes qui gouvernent notre réalité physique avec notre cours de physique. De la mécanique classique à l'électromagnétisme en passant par la thermodynamique, ce cours vous plongera dans un voyage captivant à travers les phénomènes naturels qui nous entourent.",
  },
  {
    name: "Informatiques",
    image: imgInfo,
    icon: <img src={imgInfo.src} alt="Image" width={32} height={32} />,
    description:
      "Plongez dans le monde dynamique de l'informatique et explorez les bases de la programmation, de l'algorithmique et de la conception de logiciels avec notre cours d'informatique. Des langages de programmation populaires comme Python et Java aux concepts avancés tels que la programmation orientée objet et les structures de données, ce cours vous fournira les compétences essentielles pour devenir un expert en informatique.",
  },
  {
    name: "SVT",
    image: imgPhysics,
    icon: <MdOutlineBiotech size={32} />,
    description: "To be completed for SVT",
  },
];
export default subjects;

import { SignIn } from "@clerk/nextjs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import craddleImg from "@/imcons/craddle.gif";
import blueMonster from "@/imcons/blueMonster.png";

const SignInPage = () => (
  <MaxWidthWrapper className="flex gap-4 min-h-screen">
    <div className="w-1/2 flex items-center justify-center my-10 ">
      {" "}
      <img src={craddleImg.src} />
    </div>
    <div className="w-1/2 flex items-center relative  my-10 ">
      <img
        src={blueMonster.src}
        className="absolute top-0 left-0 z-0 scale-60"
        alt=""
      />
      <div className="z-10 relative">
        <SignIn />
      </div>
    </div>
  </MaxWidthWrapper>
);

export default SignInPage;

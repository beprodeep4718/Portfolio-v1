import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeSection = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".part2", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
      gsap.from(".part1", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      id="home"
      className="home-section lg:px-32 px-10 pt-10 w-full flex justify-center items-center flex-wrap"
    >
      <div className="part1 lg:w-1/2 w-full lg:py-28 py-14 space-y-10">
        <h4 className="font-[SplineSans] lg:text-xl">Hi there !</h4>
        <div className="space-y-5">
          <h1 className="font-[Roboto-regular] lg:text-3xl">
            I&apos;m Beprodeep, <br />a freelance{" "}
            <span className="text-cyenH lg:text-4xl text-xl font-bold">web developer</span>{" "}
            with a passion for creating engaging and user-friendly interfaces.
          </h1>
          <h1>
            <a
              href="#projects"
              className="text-white font-normal lg:text-lg border-2 lg:px-4 px-3 lg:py-4 py-3 border-cyenH rounded-lg hover:bg-cyenH hover:text-black transition ease-linear"
            >
              Discover my work →
            </a>
          </h1>
        </div>
        <div className="icons lg:text-3xl text-xl font-light flex gap-5 items-center">
          <i className="ri-linkedin-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-facebook-box-fill "></i>
          <i className="ri-github-line"></i>
          <span className="h-[1px] bg-cyenH flex-grow"></span>
        </div>
      </div>
      <div className="part2 lg:w-1/2 w-full grid place-items-center">
        <img src="./assets/images/hero.svg" height={500} width={500} alt="" />
      </div>
    </div>
  );
};

export default HomeSection;

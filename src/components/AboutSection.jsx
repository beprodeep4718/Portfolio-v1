import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const AboutSection = () => {
  const textH1 = useRef(null);
  const headingText = "About me";

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".text span", {
      y: 80,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text",
        scroller: "body",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 3,
        // markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      },
    });
  });

  const skills = [
    "HTML",
    "CSS",
    "JavaScript(ES6+)",
    "Node.Js",
    "MongoDB",
    "React",
    "Next.Js",
    "C/C++",
    "Tailwindcss",
    "GSAP"
  ];
  return (
    <div
      id="about"
      className="about-section lg:px-32 px-6 lg:py-10 w-full lg:h-screen flex flex-col items-start justify-center"
    >
      <h1
        ref={textH1}
        className="text lg:text-9xl text-5xl overflow-hidden text-cyenH font-bold font-[SplineSans] uppercase tracking-wide leading-none"
      >
        {headingText.split("").map((letter, index) => (
          <span className="inline-block" key={index}>
            {letter}
          </span>
        ))}
      </h1>
      <div className="w-full flex items-start justify-center mt-10 gap-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex-1">
          <p className="leading-7 tracking-wide font-[SplineSans]">
            Hello! I&apos;m Beprodeep Das a passionate web developer currently
            pursuing my studies at{" "}
            <span className="text-cyenH">
              Jalpaiguri Government Engineering College
            </span>
            , where I am in my 2nd year. Hailing from{" "}
            <span className="text-cyenH">West Bengal, India</span>, I have
            developed a strong foundation in web development technologies.{" "}
            <br />
            As a web developer, I am always eager to learn and adapt to new
            technologies, continuously enhancing my skill set to build better
            and more efficient web solutions. Feel free to explore my projects
            and get in touch if you&apos;d like to collaborate or learn more
            about my work.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex-1 space-y-4">
          <h1 className="lg:text-5xl text-3xl uppercase font-bold font-[SplineSans] text-cyenH">
            What I Know{" "}
          </h1>
          <p className="font-[SplineSans]">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="grid grid-cols-2 lg:gap-x-5 gap-y-2">
            {skills.map((elm, index) => (
              <li
                key={index}
                className="lg:text-xl text-sm font-[SplineSans] text-gray-300 hover:text-cyenH transition ease-linear cursor-default"
              >
                <span className="text-cyenH">‣</span> {elm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

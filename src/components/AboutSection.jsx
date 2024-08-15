const AboutSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript(ES6+)",
    "Node.Js",
    "MongoDB",
    "React",
    "Next.Js",
    "C/C++",
    "Tailwindcss"
  ];
  return (
    <div className="about-section px-32 py-10 w-full h-screen flex flex-col items-start justify-center">
      <h1 className="text-9xl text-cyenH font-bold font-[SplineSans] uppercase tracking-wide">
        About me
      </h1>
      <div className="w-full flex items-start justify-center mt-10 gap-10">
        <div className="w-1/2 flex-1">
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
        <div className="w-1/2 flex-1 space-y-4">
          <h1 className="text-5xl uppercase font-bold font-[SplineSans] text-cyenH">
            What I Know{" "}
          </h1>
          <p className="font-[SplineSans]">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2">
            {skills.map((elm, index) => (
              <li
                key={index}
                className="text-xl font-[SplineSans] text-gray-600 hover:text-gray-400 transition ease-linear cursor-default"
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

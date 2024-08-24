import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";


const Header = () => {
  

  const header = useRef(null);

  // GSAP animation for the header text
  useGSAP(() => {
    gsap.from(".logo span", {
      y: 50,
      duration: .7,
      opacity: 0,
      delay: 0.5,
      stagger: .3
    })
  }, {scope: header})
  return (
    <div ref={header}  className="fixed z-30 w-full px-32 py-5 flex justify-between items-center bg-zinc-900/70 backdrop-blur-sm">
      <h1 className="logo relative text-3xl overflow-hidden font-bold font-[Roboto-Bold]">
        <span className="inline-block">&lt;</span>
        <span className="text-[#15F5BA] inline-block">/</span>
        <span className="inline-block">Bepro</span>
        <span className="text-[#15F5BA] inline-block">.</span>
        <span className="inline-block">&gt;</span>
      </h1>
      <nav className="flex cursor-pointer justify-center items-center gap-5 font-[SplineSans] font-medium">
        <h1><a href="#home">Home</a></h1>
        <h1><a href="#about">About</a></h1>
        <h1><a href="#projects">Projects</a></h1>
        <h1><a href="#contact">Contacts</a></h1>
        <h1 className="px-4 py-2 border-2 border-cyenH rounded-lg hover:bg-cyenH hover:text-zinc-800 transition ease-linear flex items-center gap-2 justify-start">
          <a
            href="./assets/res/MyResume.pdf"
            className="flex items-center gap-2"
            target="_blank"
          >
            <FaRegFilePdf />
            Resume
          </a>
        </h1>
      </nav>
    </div>
  );
}


export default Header;

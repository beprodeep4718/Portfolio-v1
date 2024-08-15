import { FaRegFilePdf } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed w-full px-32 py-5 flex justify-between items-center bg-zinc-900/70 backdrop-blur-sm">
        <h1 className="text-3xl font-bold font-[Roboto-Bold]">&lt;<span className="text-[#15F5BA]">/</span>Bepro<span className="text-[#15F5BA]">.</span>&gt;</h1>
        <nav className="flex justify-center items-center gap-5 font-[SplineSans] font-medium">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Projects</h1>
            <h1>Contacts</h1>
            <h1 className="px-4 py-2 border-2 border-cyenH rounded-lg hover:bg-cyenH hover:text-zinc-800 transition ease-linear flex items-center gap-2 justify-start"><a href="./assets/res/MyResume.pdf" className="flex items-center gap-2" target="_blank"><FaRegFilePdf />Resume</a></h1>
        </nav>
    </div>
  )
}

export default Header
import CardProject from "./CardProject"


const Projects = () => {

    const project1 = {
        title: "Techtronics",
        description: "A website for ECE Fest of JGEC, where you can register for events and get all the information about the fest, also it has its own admin panel where you can add, delete and update events.",
        link: "https://techtronics.jgec.tech/",
        github: "https://github.com/beprodeep4718/ece-fest-jgec",
        image: "/assets/images/project3.png",
        technology: ["NodeJS", "MongoDB", "React", "Express", "Cloudinary", "DaisyUi", "TailwindCSS"]
    }
    const project3 = {
        title: "Blog-Website",
        description: "You can create your own blog and it has other CURD operations",
        link: "https://blog-website-4ueh.onrender.com/",
        github: "https://github.com/beprodeep4718/Blog-website",
        image: "/assets/images/project2.png",
        technology: ["NodeJS", "MongoDB", "Ejs"]
    }
    const project2 = {
        title: "Chatrix",
        description: "A real-time chat application where you can chat with your friends and also create groups, it has a user-friendly interface and is built with the MERN stack.",
        link: "https://chat-app-8f2r.onrender.com/",
        github: "https://github.com/beprodeep4718/chat-app",
        image: "/assets/images/project1.png",
        technology: ["NodeJS", "MongoDB", "Express", "Socket.io", "Cloudinary", "DaisyUi", "TailwindCSS", "React",]
    }
    

  return (
    <div id="projects" className="project-section w-full lg:px-32 px-7 py-10 lg:h-screen space-y-8">
        <div className="flex items-center lg:w-1/2 w-full gap-5">
          <h1 className="lg:text-4xl text-2xl text-cyenH font-bold font-[SplineSans] uppercase tracking-wide">
            Projects
          </h1>
          <div className="h-[2px] bg-zinc-600 flex-grow"></div>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-10">
          <CardProject project={project1}/>
          <CardProject project={project2}/>
          <CardProject project={project3} />
        </div>
      </div>
  )
}

export default Projects
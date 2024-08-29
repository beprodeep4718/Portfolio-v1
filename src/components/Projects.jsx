import CardProject from "./CardProject"


const Projects = () => {

    const project1 = {
        title: "Anjusa-Web",
        description: "This is a web application, for a art-academic organization",
        link: "https://anjusa.in",
        github: "https://github.com/beprodeep4718/Anjusa-project",
        image: "/assets/images/project1.jpg",
        technology: ["NodeJS", "MongoDB", "React", "Express"]
    }
    const project2 = {
        title: "Blog-Website",
        description: "You can create your own blog and it has other CURD operations",
        link: "https://blog-website-4ueh.onrender.com/",
        github: "https://github.com/beprodeep4718/Blog-website",
        image: "/assets/images/project2.png",
        technology: ["NodeJS", "MongoDB", "Ejs"]
    }
    const project3 = {
        title: "Weather-App",
        description: "Weather temperature checker of your location",
        link: "https://beprodeep4718.github.io/weatherapp/",
        github: "https://github.com/beprodeep4718/weatherapp",
        image: "/assets/images/project3.png",
        technology: ["HTML", "CSS", "JavaScript"]
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
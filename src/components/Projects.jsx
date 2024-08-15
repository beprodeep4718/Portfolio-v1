import { useState } from "react"
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
        link: "https://example.com",
        github: "https://github.com/beprodeep4718/Blog-website",
        image: "/assets/images/project2.png",
        technology: ["NodeJS", "MongoDB", "Ejs"]
    }
    const project3 = {
        title: "Weather-App",
        description: "Weather temperature checker of your location",
        link: "https://example.com",
        github: "https://github.com/beprodeep4718/weatherapp",
        image: "/assets/images/project3.png",
        technology: ["HTML", "CSS", "JavaScript"]
    }
    

  return (
    <div className="project-section w-full px-32 py-10 h-screen space-y-8">
        <div className="flex items-center w-1/2 gap-5">
          <h1 className="text-4xl text-cyenH font-bold font-[SplineSans] uppercase tracking-wide">
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
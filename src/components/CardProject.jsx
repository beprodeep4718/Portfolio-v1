const CardProject = ({ project }) => {

    const technology = project.technology;
    //bg-cyenH px-2 py-1 text-zinc-900 rounded-full 

  return (
    <div className="card flex items-center justify-start flex-col relative w-[24vw] h-[34vw] bg-zinc-800 px-6 py-6 rounded-md gap-4">
      <div className="flex-1 h-1/2 w-full">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1 flex items-start justify-start gap-2 flex-col font-[SplineSans]">
        <h1 className="text-2xl font-bold flex items-center justify-between w-full">
          <a href=""><span>{project.title}</span></a>
          <a href={project.github} target="_blank" className="font-thin">
            <i className="ri-github-line"></i>
          </a>
        </h1>
        <p className="text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 text-sm">
          {technology.map((item, index) => (
            <span key={index} className="bg-cyenH px-2 py-1 leading-none text-zinc-900 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;

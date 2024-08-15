
const HomeSection = () => {
  return (
    <div className="home-section px-32 pt-10 w-full flex justify-center items-center">
        <div className="part1 w-1/2 py-28 space-y-10">
          <h4 className="font-[SplineSans] text-xl">Hi there !</h4>
          <div className="space-y-5">
            <h1 className="font-[Roboto-regular] text-3xl">
              I&apos;m Beprodeep, <br />a freelance{" "}
              <span className="text-cyenH text-4xl font-bold">
                web developer
              </span>{" "}
              with a passion for creating engaging and user-friendly interfaces.
            </h1>
            <h1>
              <a
                href="#"
                className="text-white font-normal text-lg border-2 px-4 py-4 border-cyenH rounded-lg hover:bg-cyenH hover:text-black transition ease-linear"
              >
                Discover my work →
              </a>
            </h1>
          </div>
          <div className="icons text-3xl font-light flex gap-5 items-center">
            <i className="ri-linkedin-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-box-fill "></i>
            <i className="ri-github-line"></i>
            <span className="h-[1px] bg-cyenH flex-grow"></span>
          </div>
        </div>
        <div className="part2 w-1/2 grid place-items-center">
          <img src="./assets/images/hero.svg" height={500} width={500} alt="" />
        </div>
      </div>
  )
}

export default HomeSection
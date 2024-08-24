const Contact = () => {
  return (
    <div id="contact" className="w-full px-32 py-10 flex items-center justify-center gap-10">
      <div className="part1 w-1/2 h-full grid place-items-center">
        <img
          src="./assets/images/contact.svg"
          alt=""
          height={500}
          width={500}
        />
      </div>
      <div className="part2 w-1/2 h-full">
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <h1 className="text-5xl font-[SplineSans] capitalize text-cyenH font-bold">
            get in touch
          </h1>
          <form
            action=""
            className="w-full grid grid-cols-2  gap-8 font-[SplineSans] text-xl"
          >
            <div className="input-div">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-div col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                className=""
              ></textarea>
            </div>
            <div className="col-span-1">
              <button className="w-full px-6 py-2 uppercase font-[SplineSans] border-2 border-cyenH font-bold hover:bg-cyenH hover:text-zinc-900 transition ease-in rounded-md">
                Submit
              </button>
            </div>
          </form>
          <div className="icons col-span-1 text-3xl font-light flex gap-10 items-center">
            <i className="ri-linkedin-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-box-fill "></i>
            <i className="ri-github-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

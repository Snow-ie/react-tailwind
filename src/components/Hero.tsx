import Group from "../assets/Group.svg";

function Hero() {
  return (
    <div className="max-w-[1720px] px-12 ">
      <section className="bg-[#E7E6E6] py-16 rounded-3xl">
        <div className="container px-2 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left md:pl-10">
            <h1 className=" text-3xl md:text-8xl font-black">
              LET'S <br />{" "}
              <span className="  text-3xl md:text-8xl font-black">EXPLORE</span>{" "}
              <br />
              <span className=" text-3xl md:text-8xl font-black">
                UNIQUE
              </span>{" "}
              <br /> CLOTHES.
            </h1>
            <p className="text-[#191818] text-xl md:text-2xl  mt-8">
              Live for Influential and Innovative fashion!
            </p>
            <button className="bg-black text-white px-6 py-3 mt-6 rounded-full hover:bg-gray-800 text-medium  text-lg md:text-3xl">
              SHOP NOW
            </button>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={Group}
              alt="Fashion Model"
              className="w-full rounded-lg transition-transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

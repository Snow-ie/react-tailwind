const Calltoaction = () => {
  return (
    <div>
      <footer className="bg-[#E5C643] p-10 md:p-20 text-white">
        <div className="text-center">
          <h3 className=" tracking-wide text-2xl md:text-5xl md:leading-[70px] font-bold">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h3>
          <p className="text-sm md:text-3xl mt-2 leading-[35px]">
            Type your email down below and be young wild generation
          </p>

          <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Add your email here"
                className="block w-full mt-4 p-4 text-sm border border-black focus:outline-none rounded-lg cursor-text "
              />
              <button className="text-white absolute end-2.5 top-2.5 bg-black hover:bg-yellow-700  font-medium rounded-lg text-sm px-4 py-2">
                SEND
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};
export default Calltoaction;

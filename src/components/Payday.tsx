import Sales from "../assets/Sales.svg";

const Payday = () => {
  return (
    <section className="bg-[#E5C643]">
      <div className="grid md:grid-cols-2">
        <img
          src={Sales}
          alt="Payday Sale"
          className="w-full h-full object-cover"
        />

        <div className=" text-left space-y-6 py-10 pl-10  md-w-[666px] ">
          <h2 className=" text-3xl md:text-[111px] md:leading-[137px] font-black">
            PAYDAY
            <br />
            <span className="text-3xl md:text-[111px] font-black">
              SALE NOW
            </span>
          </h2>

          <p className=" md-w-[643px]  text-lg md:text-3xl font-medium text-[#231300]">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>

          <p className=" text-lg md:text-4xl font-bold">
            1 June - 10 June 2021
            <br />
            <span className="text-lg md:text-4xl font-normal">
              *Terms & Conditions apply
            </span>
          </p>

          <a
            href="#"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg md:text-3xl tracking-wide hover:bg-gray-800 transition"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
};
export default Payday;

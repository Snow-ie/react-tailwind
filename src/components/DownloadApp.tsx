import Moblie from "../assets/Mobile.svg";
import Goggle from "../assets/Goggle.svg";
import Apple from "../assets/Apple.svg";

const DownloadApp = () => {
  return (
    <div>
      <section className="bg-white py-12 md:py-20 flex flex-col md:flex-row items-center justify-between px-12">
        <div className="md:w-1/2 space-y-5">
          <h2
            className="text-3xl md:text-5xl 
           md:leading-[150%] font-black"
          >
            DOWNLOAD APP & GET THE VOUCHER!
          </h2>
          <p className="text-lg text-[#7C7C7C] md:w-[419px] ">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>

          <div className="flex space-x-4 mt-5">
            <a href="#">
              <img
                src={Apple}
                alt="Download on the App Store"
                className="w-40 transition duration-500 ease-in-out hover:opacity-75"
              />
            </a>
            <a href="#">
              <img
                src={Goggle}
                alt="Get it on Google Play"
                className="w-40 transition duration-500 ease-in-out hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img src={Moblie} alt="Mobile App Preview" className="w-full" />
        </div>
      </section>
    </div>
  );
};
export default DownloadApp;

import HM from "../assets/HM.svg";
import Obey from "../assets/Obey.svg";
import Shopify from "../assets/Shopify.svg";
import Lacoste from "../assets/Lacoste.svg";
import Levi from "../assets/Levi.svg";
import Amazon from "../assets/Amazon.svg";

const logos = [
  { name: "H&M", img: HM },
  { name: "OBEY", img: Obey },
  { name: "Shopify", img: Shopify },
  { name: "Lacoste", img: Lacoste },
  { name: "Levi's", img: Levi },
  { name: "Amazon", img: Amazon },
];

const Brands = () => {
  return (
    <div className="flex justify-around items-center bg-[#EBD96B] h-64 ">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="p-4  hover:scale-110 transform transition-transform duration-500"
        >
          <img
            src={logo.img}
            alt={logo.name}
            className="h-[68px] w-[118px] opacity-70  hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;

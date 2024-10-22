import Hoodie from "../assets/Hoodie.svg";
import Coat from "../assets/Coat.svg";
import Tee from "../assets/Tee.svg";
const Card = () => {
  const products = [
    {
      image: Hoodie,
      title: "Hoodies & Sweatshirt",
      description: "Explore Now!",
      link: "#",
    },
    {
      image: Coat,
      title: "Coats & Parkas",
      description: "Explore Now!",
      link: "#",
    },
    {
      image: Tee,
      title: "Tees & T-Shirt",
      description: "Explore Now!",
      link: "#",
    },
  ];
  return (
    <section className="py-12 mb-6">
      <div className="container mx-auto px-12">
        <h2 className=" text-lg md:text-5xl font-black mb-8">NEW ARRIVALS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-lg shadow-3xl overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[700px] object-cover"
              />
              <div className="p-4">
                <h3 className=" text-xl md:text-5xl font-medium">
                  {product.title}
                </h3>
                <p className="  text-lg md:text-2xl mt-4 font-medium text-[#7F7F7F]">
                  {product.description}
                </p>

                <a
                  href={product.link}
                  className="text-[#7F7F7F] flex items-center mt-4 hover:text-black"
                >
                  <span className="ml-4 text-2xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Card;

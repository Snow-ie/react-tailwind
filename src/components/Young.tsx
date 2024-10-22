import Trend from "../assets/Trend.svg";
import Under from "../assets/Under.svg";
const Young = () => {
  const products = [
    {
      image: Trend,
      title: "Trending on Instagram",
      description: "Explore Now!",
      link: "#",
    },
    {
      image: Under,
      title: "All Under $40",
      description: "Explore Now!",
      link: "#",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-12">
        <h2 className=" text-xl md:text-5xl font-black mb-8 ">
          Young’s Favourite
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[575px] object-cover"
              />

              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className=" text-lg md:text-3xl font-medium">
                    {product.title}
                  </h3>
                  <p className="text-[#7F7F7F]  text-lg md:text-xl">
                    {product.description}
                  </p>
                </div>
                <a
                  href={product.link}
                  className="text-[#7F7F7F] flex items-center hover:text-black"
                >
                  <span className="ml-4 text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Young;

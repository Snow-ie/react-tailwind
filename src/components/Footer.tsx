import Face from "../assets/Face.svg";
import Inst from "../assets/Inst.svg";
import Twitter from "../assets/Twitter.svg";
import Link from "../assets/Link.svg";

function Footer() {
  const socialIcons = [
    { src: Face, alt: "Facebook" },
    { src: Inst, alt: "Instagram" },
    { src: Twitter, alt: "Twitter" },
    { src: Link, alt: "LinkedIn" },
  ];

  const companyLinks = ["About", "Contact us", "Support", "Careers"];
  const quickLinks = [
    "Share Location",
    "Orders Tracking",
    "Size Guide",
    "FAQs",
  ];
  const legalLinks = ["Terms & conditions", "Privacy Policy"];

  const renderLinks = (links: string[]) =>
    links.map((link, index) => (
      <li key={index}>
        <a href="#" className="text-[#7A7A7A]">
          {link}
        </a>
      </li>
    ));

  return (
    <div className="bg-[#000000] flex flex-col md:flex-row justify-between text-white px-10 py-10">
      <div className="mb-8 md:mb-0">
        <h4 className="font-medium text-3xl">FASHION</h4>
        <p className="text-[#8E8E8E] font-normal md:w-[415px] text-lg md leading-[40px]">
          Complete your style with awesome clothes from us.
        </p>
        <div className="flex space-x-4 mt-4">
          {socialIcons.map((icon, index) => (
            <a href="#" key={index}>
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-8 transition duration-500 ease-in-out hover:grayscale"
              />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-normal my-3 text-[#D9D9D9] text-lg">Company</h4>
        <ul className="space-y-5">{renderLinks(companyLinks)}</ul>
      </div>

      <div>
        <h4 className="font-normal my-3 text-lg text-[#D9D9D9]">Quick Link</h4>
        <ul className="space-y-5">{renderLinks(quickLinks)}</ul>
      </div>

      <div>
        <h4 className="font-normal my-3 text-lg text-[#D9D9D9]">Legal</h4>
        <ul className="space-y-5">{renderLinks(legalLinks)}</ul>
      </div>
    </div>
  );
}

export default Footer;

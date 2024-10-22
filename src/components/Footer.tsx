import Face from "../assets/Face.svg";
import Inst from "../assets/Inst.svg";
import Twitter from "../assets/Twitter.svg";
import Link from "../assets/Link.svg";

function Footer() {
  return (
    <div className=" bg-[#000000]  flex flex-col md:flex-row justify-between text-white px-10 py-10">
      <div className="mb-8 md:mb-0">
        <h4 className="font-medium text-3xl">FASHION</h4>
        <p className=" text-[#8E8E8E] font-normal md:w-[415px] text-lg md leading-[40px]">
          Complete your style with awesome clothes from us.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#">
            <img
              src={Face}
              alt="Facebook"
              className="w-8 transition duration-500 ease-in-out hover:grayscale"
            />
          </a>
          <a href="#">
            <img
              src={Inst}
              alt="Instagram"
              className="w-8 transition duration-500 ease-in-out hover:grayscale"
            />
          </a>
          <a href="#">
            <img
              src={Twitter}
              alt="Twitter"
              className="w-8 transition duration-500 ease-in-out hover:grayscale"
            />
          </a>
          <a href="#">
            <img
              src={Link}
              alt="LinkedIn"
              className="w-8 transition duration-500 ease-in-out hover:grayscale"
            />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-normal my-3 text-[#D9D9D9] text-lg">Company</h4>
        <ul className="space-y-5">
          <li>
            <a href="#" className="text-[#7A7A7A]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-normal my-3 text-lg text-[#D9D9D9]">Quick Link</h4>
        <ul className="space-y-5">
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Share Location
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Orders Tracking
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Size Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A]">
              FAQs
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-normal my-3 text-lg text-[#D9D9D9] ">Legal</h4>
        <ul className="space-y-5">
          <li>
            <a href="#" className="text-[#7A7A7A]">
              Terms & conditions
            </a>
          </li>
          <li>
            <a href="#" className="text-[#7A7A7A] ">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

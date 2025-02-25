import Link from "next/link";
import logo from "./Homecomponent/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F0EDE9] text-black py-10">
      <div className="container mx-auto px-6">
        <div className="flex items-start justify-between text-center md:text-left  max-md:w-full  max-md:flex-wrap  max-md:items-center  max-md:justify-center">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={logo}
              alt="Prashna Siddhi Logo"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-serif font-medium mb-4">
              Subscribe to receive updates
            </h3>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-400 px-4 py-2 rounded-md w-[200px] md:w-[250px] bg-white text-black focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-serif font-medium mb-4">Site</h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link href="/work" className="hover:underline">
                  How it Works
                </Link>
              </li> */}
              <li>
                <Link href="/common-myths" className="hover:underline">
                  Common Myths
                </Link>
              </li>
              <li>
                <Link href="/remedies" className="hover:underline">
                  Remedies
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:underline">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/unique" className="hover:underline">
                  Unique PrashnaSiddhi
                </Link>
              </li>
              <li>
                <Link href="/biololgical" className="hover:underline">
                  Astrology & Biololgical growth
                </Link>
              </li>
              <li>
                <Link href="/What-can-be-done" className="hover:underline">
                  What can be done
                </Link>
              </li>
              <li>
                <Link href="/Enthusiasts" className="hover:underline">
                  Astrology Enthusiasts
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl  font-medium mb-4 w-[75%]  font-salernomi">
              Have any queries or suggestions? Get in touch with me.
            </h3>
            <p className="mb-2">Get in touch with me.</p>
            <p className="mb-1">+91 7259691375</p>
            <p className="mb-4">jagadish.k48@gmail.com</p>
            <button className="bg-black font-salernomi text-white px-4 py-2 rounded-md hover:bg-gray-800">
              <Link href="/Disclaimer">Disclaimer</Link>
            </button>
          </div>
        </div>

        <svg
          className="mt-10 max-xl:w-full"
          width="1248"
          height="36"
          viewBox="0 0 1248 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M624.002 36C624.095 26.1506 632.096 18.1801 642 18.0579C632.058 17.9352 624.032 9.9026 624.002 0H624.001C623.97 9.90352 615.944 17.9366 606 18.0579C615.905 18.1787 623.908 26.1498 624 36H624.002Z"
            fill="#D8D1C7"
          />
          <circle cx="663" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
          <circle cx="1243" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
          <path d="M667 18L1239 18.0001" stroke="#D8D1C7" strokeWidth="2" />
          <circle cx="5" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
          <circle cx="585" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
          <path d="M9 18L581 18.0001" stroke="#D8D1C7" strokeWidth="2" />
        </svg>
        {/* Bottom Section */}
        <div className="mt-10 text-center border-t border-gray-300 pt-6 flex justify-around">
          <p className="text-sm">&copy; Prashna Siddhi</p>
          <p className="text-sm">All Rights Reserved 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";

const Navbar = () => {
  // shared links
  const links = (
    <>
      <li className="hover:text-[#006CE4] cursor-pointer">Blog</li>
      <li className="hover:text-[#006CE4] cursor-pointer">Offer</li>
      <li className="hover:text-[#006CE4] cursor-pointer">Airlines</li>
      <li className="hover:text-[#006CE4] cursor-pointer">About</li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-80 backdrop-blur-md py-4 px-6 sm:px-16 lg:px-32 flex justify-between items-center shadow-md">
      {/* Left section with logo */}
      <div className="flex items-center gap-2">
        <img className="w-12 sm:w-16" src={logo} alt="Logo" />
        <img src={logoText} alt="Logo Text" className="hidden sm:block" />
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden md:flex items-center gap-6 text-black text-lg font-semibold">
        <ul className="flex gap-6">
          {links}
        </ul>
      </div>

      {/* Right section with Sign In button */}
      <div className="flex items-center gap-6">
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button className="text-gray-600 hover:text-[#006CE4] p-2 transition duration-300">
            <FaAlignJustify size={25} />
          </button>
        </div>

        {/* Sign-in button */}
        <button className="hidden md:flex text-white px-6 py-2 rounded-lg bg-gradient-to-r from-[#006CE4] to-[#4e91e2] transition duration-300 hover:scale-105">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;

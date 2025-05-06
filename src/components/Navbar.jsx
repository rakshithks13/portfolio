import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const NavbarData = [
  { to: "home", text: "Home" },
  { to: "techstack", text: "Skills" },
  { to: "project", text: "Project" },
  { to: "contact", text: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-opacity-30 backdrop-blur-lg shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NavbarData.map((el) => (
            <Link
              key={el.text}
              to={el.to}
              smooth={true}
              className="cursor-pointer text-lg text-white px-4 py-2 transition-all hover:bg-white hover:text-black hover:rounded-xl"
            >
              {el.text}
            </Link>
          ))}
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1DI9cS16dwnWkD73IX9xUQnAV-zcVzmFh/view?usp=drive_link",
                "_blank"
              )
            }
            className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg transition-all"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <GiHamburgerMenu
            color="white"
            size="2rem"
            onClick={() => setOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-black/100 backdrop-blur-2xl p-6 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <AiOutlineClose
            color="white"
            size="2rem"
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Menu Items */}
        <div className="mt-10 flex flex-col items-center space-y-6 text-white text-xl">
          {NavbarData.map((el) => (
            <Link
              key={el.text}
              to={el.to}
              smooth={true}
              onClick={() => setOpen(false)}
              className="cursor-pointer p-2 hover:bg-white hover:text-black rounded-lg transition-all"
            >
              {el.text}
            </Link>
          ))}

          {/* Resume Button */}
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1DI9cS16dwnWkD73IX9xUQnAV-zcVzmFh/view?usp=drive_link",
                "_blank"
              )
            }
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-lg transition-all"
          >
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}

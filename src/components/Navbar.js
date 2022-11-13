import {
  Bars3Icon as CloseIcon,
  XMarkIcon as BurgerIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="fixed z-50 w-screen bg-dark h-[70px] bg-opacity-90">
      <div className="flex items-center justify-between h-full">
        <div>
          <h1 className="ml-5 text-4xl italic font-light text-white cursor-pointer md:text-5xl">
            JE
          </h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex text-lg text-white">
            <li className="px-5 py-1 mx-2 border-[1px] font-semibold cursor-pointer rounded-3xl border-pink  hover:bg-pink hover:duration-200">
              About Me
            </li>
            <li className="px-5 py-1 mx-2 border-[1px] font-semibold rounded-3xl border-pink cursor-pointer  hover:bg-pink hover:duration-200">
              My Projects
            </li>
            <li className="px-5 py-1 mx-2 border-[1px] font-semibold rounded-3xl border-pink cursor-pointer  hover:bg-pink hover:duration-200">
              Contact
            </li>
            <li className="px-5 py-1 mx-2 font-semibold cursor-pointer rounded-3xl bg-pink hover:bg-darkPink hover:duration-300">
              Download CV
            </li>
          </ul>
        </div>
        <div className="text-white sm:hidden" onClick={handleClick}>
          {toggleMenu ? (
            <BurgerIcon className="w-10 mr-2 cursor-pointer" />
          ) : (
            <CloseIcon className="w-10 mr-2 cursor-pointer" />
          )}
        </div>
      </div>
      {toggleMenu ? (
        <div className="w-full sm:hidden">
          <ul className="flex flex-col text-lg text-white">
            <li className="pb-2 mx-2 my-2 text-center border-2 cursor-pointer hover:text-brightRed hover:duration-300">
              About Me
            </li>
            <li className="pb-2 mx-2 my-2 text-center border-2 cursor-pointer hover:text-brightRed hover:duration-300">
              My Projects
            </li>
            <li className="pb-2 mx-2 my-2 text-center border-2 cursor-pointer hover:text-brightRed hover:duration-300">
              Contact
            </li>
            <li className="pb-2 mx-2 my-2 text-center border-2 cursor-pointer hover:text-brightRed hover:duration-300">
              Download CV
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

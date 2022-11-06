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
    <nav className="w-screen bg-dark drop-shadow-xl">
      <div className="flex items-center justify-between h-[70px]">
        <div>
          <h1 className="ml-2 text-4xl font-bold text-white cursor-pointer md:text-5xl">
            JACK ECUYER
          </h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex text-lg text-white">
            <li className="mx-5 cursor-pointer hover:text-brightRed hover:duration-300">
              About Me
            </li>
            <li className="mx-5 cursor-pointer hover:text-brightRed hover:duration-300">
              My Projects
            </li>
            <li className="mx-5 cursor-pointer hover:text-brightRed hover:duration-300">
              Contact
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
            <li className="pb-2 mx-2 my-2 text-center border-b-2 cursor-pointer hover:text-brightRed hover:duration-300">
              About Me
            </li>
            <li className="pb-2 mx-2 my-2 text-center border-b-2 cursor-pointer hover:text-brightRed hover:duration-300">
              My Projects
            </li>
            <li className="pb-2 mx-2 my-2 text-center border-b-2 cursor-pointer hover:text-brightRed hover:duration-300">
              Contact
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

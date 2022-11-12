import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [line1Complete, setLine1Complete] = useState(false);
  const [line2Complete, setLine2Complete] = useState(false);
  return (
    <div className="w-screen h-[calc(100vh-70px)] bg-dark flex justify-center">
      <div className="px-10 flex flex-col w-full h-full max-w-[1640px] items-center md:items-start">
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="flex flex-col w-full md:items-start">
            <TypeAnimation
              sequence={[
                `Hi, I'm Jack`,
                () => {
                  setLine1Complete((line1Complete) => {
                    return !line1Complete;
                  });
                },
              ]}
              cursor={false}
              wrapper="div"
              speed={30}
              className={
                "m-0 text-white text-5xl sm:text-6xl md:text-7xl font-bold w-full text-left"
              }
            />
            {line1Complete ? (
              <TypeAnimation
                sequence={[
                  `I'm a Full Stack Developer`,
                  () => {
                    setLine2Complete((line2Complete) => {
                      return !line2Complete;
                    });
                  },
                ]}
                cursor={false}
                wrapper="div"
                speed={70}
                className={
                  "m-0 text-2xl text-brightRed sm:text-4xl md:text-5xl w-full text-left"
                }
              />
            ) : null}
          </div>
          <div
            className={
              line2Complete
                ? "transition-all translate-y-1 duration-700 opacity-100 flex justify-start w-full mt-3"
                : "opacity-0"
            }
          >
            <button className="font-semibold text-white px-5 py-1 text-xl md:text-2xl border-[2px] mr-3 rounded-3xl border-pink hover:bg-pink duration-300">
              My Projects
            </button>
            <button className="px-5 py-1 text-xl font-semibold text-white duration-300 bg-pink md:text-2xl hover:bg-darkPink rounded-3xl">
              Contact
            </button>
          </div>
        </div>
        <div
          className={
            line2Complete
              ? "opacity-100 transition-opacity duration-700 flex justify-center w-full mt-20"
              : "opacity-0 mt-20"
          }
        >
          <ArrowDownCircleIcon className="w-12 h-12 cursor-pointer md:w-20 md:h-20 text-brightRed animate-bounce" />
        </div>
      </div>
    </div>
  );
}

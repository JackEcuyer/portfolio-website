import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Hero() {
  const [line1Complete, setLine1Complete] = useState(false);
  return (
    <div className="w-screen h-[calc(100vh-70px)] bg-dark relative">
      <div className="top-[30%] left-[10%] md:left-[20%] lg:left-[25%] absolute w-auto h-auto">
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
            "m-0 text-white text-5xl sm:text-6xl md:text-7xl font-bold"
          }
        />
        {line1Complete ? (
          <TypeAnimation
            sequence={[`I'm a Full Stack Developer`, 1000]}
            cursor={false}
            wrapper="div"
            speed={70}
            className={"m-0 text-3xl text-brightRed sm:text-4xl md:text-5xl"}
          />
        ) : null}
      </div>
    </div>
  );
}

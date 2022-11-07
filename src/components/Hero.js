import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Hero() {
  const [line1Complete, setLine1Complete] = useState(false);
  return (
    <div className="w-screen h-[800px] bg-dark">
      <div className="relative top-[40%] left-[40%] w-auto h-auto">
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
          className={"text-white text-4xl sm:text-7xl font-bold"}
        />
        {line1Complete ? (
          <TypeAnimation
            sequence={[`I'm a Full Stack Developer`, 1000]}
            cursor={false}
            wrapper="div"
            className={"text-2xl text-brightRed sm:text-4xl font-bold absolute"}
          />
        ) : null}
      </div>
    </div>
  );
}

import InputBox from "./InputBox";
import InputValues from "./InputValues";
import BgToggleContext from "../context/BgToggleContext";
import { useState } from "react";

const Calculator = () => {
  const [bgcolor, setBgcolor] = useState(false);

  const data = {
    bgcolor,
    setBgcolor,
  };
  return (
    <>
      <BgToggleContext.Provider value={data}>
        <div
          className={` w-screen min-h-screen py-20 ${bgcolor ? "dark:bg-black" : "bg-[#fff1f2]"}`}
        >
          <div className={`mx-auto max-w-xs ${bgcolor ? 'bg-gray-700' : 'bg-white'} border-0 rounded-xl`}>
            <InputBox />
            <InputValues />
          </div>
        </div>{" "}
      </BgToggleContext.Provider>
    </>
  );
};

export default Calculator;

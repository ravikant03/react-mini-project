import Button from "./Buttons";
import { FiMoon } from "react-icons/fi";
import { LiaDivideSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { HiOutlineEquals } from "react-icons/hi2";
import { useContext } from "react";
import BgToggleContext from "../context/BgToggleContext";
import { IoMdSunny } from "react-icons/io";
import { RContext } from "../reducer/CalculatorProvider";
import { methods } from "../reducer/reducer";

const InputValues = () => {
  const { bgcolor, setBgcolor } = useContext(BgToggleContext);

  const { state, dispatch } = useContext(RContext);

  const handleClick = () => {
    setBgcolor((prev) => !prev);
  };

const handleInputValue = (e) => {
  dispatch({
    type: methods.addInput,
    payload: e.target.innerText,
  });
};

const handleCalculate = () => {
  dispatch({type: methods.calculate})
}

const handleAllClear = () => {
  dispatch({type: methods.clear})
}

   return (
    <>
      <div
        className={` ${bgcolor ? "bg-gray-500" : "bg-[#f5f5f5]"} rounded-t-4xl px-5 py-7`}
      >
        <div className="grid grid-cols-4 gap-5">
          <Button rounded="true" moon="true" onClick={handleClick}>
            {bgcolor ? <IoMdSunny /> : <FiMoon />}
          </Button>
          <Button rounded="true" onClick={handleInputValue}>
           %
          </Button>
          <Button rounded="true" onClick={handleInputValue}>
            /
          </Button>
          <Button rounded="true" onClick={handleInputValue}>
           *
          </Button>
          <Button onClick={handleInputValue}>7</Button>
          <Button onClick={handleInputValue}>8</Button>
          <Button onClick={handleInputValue}>9</Button>
          <Button rounded="true" onClick={handleInputValue}>
            -
          </Button>
          <Button onClick={handleInputValue}>4</Button>
          <Button onClick={handleInputValue}>5</Button>
          <Button onClick={handleInputValue}>6</Button>
          <Button rounded="true" onClick={handleInputValue}>
            +
          </Button>
        </div>
        <div className="w-full flex items-center justify-between my-5">
          <div className="w-[75%] grid grid-cols-3 gap-5">
            <Button onClick={handleInputValue}>1</Button>
            <Button onClick={handleInputValue}>2</Button>
            <Button onClick={handleInputValue}>3</Button>
            <Button onClick={handleAllClear}>AC</Button>
            <Button onClick={handleInputValue}>0</Button>
            <Button onClick={handleInputValue}>.</Button>
          </div>
          <div
            className={`${bgcolor && "border-0"} w-[20%] h-25 rounded-4xl flex items-center justify-center border bg-linear-to-t from-[#ed0e98] to-[#fe5a2d] cursor-pointer shadow-lg `}
          >
            <button className="cursor-pointer">
              <HiOutlineEquals className="text-2xl" onClick={handleCalculate}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputValues;

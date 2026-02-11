import { useContext } from "react";
import BgToggleContext from "../context/BgToggleContext";
import calci from "../assets/calci.png"
import { RContext } from "../reducer/CalculatorProvider";
import { methods } from "../reducer/reducer";

const InputBox = () => {
  const {bgcolor} = useContext(BgToggleContext);
  const {state, dispatch} = useContext(RContext);
  return (
    <>
      <div className="px-3 py-10">
        <div>
          {/* image */}
          <div className="w-10">
            <img
              src={calci}
              alt="image"
              className="h-full w-full"
            />
          </div>
          <div className="w-full flex flex-col items-end gap-1">
            <input
              type="text"
              placeholder="0"
              value={state.input || ""}
              className={`max-w-xs text-right text-xl px-2 py-1 border-0 focus:outline-0 ${bgcolor ? 'text-white' : 'text-black'}`}
              read-only="true"
            />
            <p className={`px-1 text-3xl ${bgcolor ? 'text-white' : 'text-black'}`}>{state.ans}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;

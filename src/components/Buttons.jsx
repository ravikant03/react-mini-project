import { useContext } from "react";
import BgToggleContext from "../context/BgToggleContext";

const Button = ({children, rounded=false, moon =false, onClick}) => {

    const {bgcolor} = useContext(BgToggleContext)

    return (
        <>
        {
           rounded ? <button className={`w-12 h-12 text-2xl border border-black rounded-full p-2 flex items-center justify-center bg-[#f5f5f572] cursor-pointer ${moon && 'text-orange-500'} ${bgcolor ? 'text-white border-0' : 'text-black '}`} onClick={onClick}>{children}</button> : <button className={`w-12 h-12 text-3xl font-medium flex items-center justify-center cursor-pointer ${bgcolor ? 'text-white border-0' : 'text-black'}`} onClick={onClick}>{children}</button>
        }
        </>
    )
}

export default Button;
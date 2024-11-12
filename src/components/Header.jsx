import { useState } from "react";
import { BT_SR } from "./Buttons";
import { FaUserLarge } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { CartIcon, Flag_us, Flag_ven } from "./Icons";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function Header() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState(true);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const languages = () => {
    setLang(!lang);
  };
  return (
    <nav className="w-full bg-opacity-60 justify-between bg-slate-800 flex gap-4 dark:bg-cyan-500">
      <div className=" gap-4 max-w-screen-xl flex flex-wrap items-center p-2">
        <a href="#" className=" flex items-center space-x-3">
          <img src="./Logo.jpg" alt="Logo" className="h-20 w-36" />
        </a>
      </div>
      <div>
        <BT_SR />
      </div>

      <div className=" gap-4 max-w-screen-xl flex flex-wrap items-center justify-around p-2 w-auto">
        {" "}
        <div className=" size-6 items-center justify-center flex">
          <button type="button" onClick={() => languages()}>
            {lang && <Flag_ven />}
            {!lang && <Flag_us />}
          </button>
        </div>
        <div className=" size-6 items-center justify-center flex">
          <button onClick={() => darkModeHandler()}>
            {dark && <IoSunnyOutline />}
            {!dark && <FaMoon />}
          </button>
        </div>
        <div className=" size-6 items-center justify-center flex">
          <a href="#">
            <CartIcon />
          </a>
        </div>
        <div className="size-6 items-center justify-center flex">
          <a href="#">
            <FaUserLarge />
          </a>
        </div>
        <div className="size-6 items-center justify-center flex">
          <a href="#">
            <ImExit />
          </a>
        </div>
      </div>
    </nav>
  );
}

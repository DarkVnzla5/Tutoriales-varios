import { BT_SR, Switch_langs, DarkMode } from "./Buttons";
import { FaUserLarge } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { CartIcon } from "./Icons";

export default function Header() {
  return (
    <nav className="w-full bg-opacity-60 justify-between bg-slate-800 flex gap-4 dark:bg-cyan-500">
      <div className=" gap-4 max-w-screen-xl flex flex-wrap items-center p-2">
        <a href="#" className=" flex items-center space-x-3">
          <img src="./Logo.jpg" alt="Logo" className="h-20 w-36" />
        </a>
      </div>
      <div className=" size-full flex justify-center">
        <div>
          <BT_SR />
        </div>
      </div>

      <div className=" gap-4 max-w-screen-xl flex flex-wrap items-center justify-around p-2 w-auto">
        <div className=" size-6 items-center justify-center flex">
          <Switch_langs />
        </div>
        <div className=" size-6 items-center justify-center flex">
          <DarkMode />
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

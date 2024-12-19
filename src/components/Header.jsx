import { BT_SR, Switch_langs, DarkMode, Logo } from "./Buttons";
import { FaUserLarge } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { CartIcon } from "./Icons";

export default function Header() {
  return (
    <nav className="justify-start h-full w-full bg-gray-800 flex gap-4 dark:bg-cyan-500">
      <div className="flex justify-center p-2">
        <div>
          <Logo />
        </div>
      </div>

      <div className=" size-full flex justify-center relative top-16">
        <div>
          <BT_SR />
        </div>
      </div>

      <div className="gap-2 flex flex-wrap relative top-8 justify-between p-4">
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

import { useState } from "react";
import { FaSearch, FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { Flag_us, Flag_ven } from "./Icons";
import "./buttons.css";

export function BT_SR() {
  const [search, setSearch] = useState(true);
  function visibility() {
    setSearch(!search);
  }

  return (
    <div className="relative justify-center p-4 flex flex-nowrap">
      <div
        className="bg-orange-600 text-cyan-300 size-8 flex  justify-center "
        onClick={visibility}
      >
        <button>
          <FaSearch />
        </button>
      </div>
      <div>
        <form id="mainSearch">
          <div
            className={twMerge(
              search ? "justify-center flex flex-nowrap" : "hidden"
            )}
          >
            <input
              placeholder="Buscar Productos..."
              type="search"
              className="w-fit h-8 bg-slate-700 outline-none justify-center flex text-white dark:bg-cyan-400 dark:text-black"
            />
            <div className="bg-orange-600 text-cyan-300 size-8 flex justify-center">
              <button className="">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Delete_opt() {
  return (
    <button
      className="text-black text-sm bg-gray-500 rounded-lg p-0 m-0 border-2 border-black"
      onClick={(e) => window.location.reload(e)}
    >
      <p>x</p>
    </button>
  );
}
export function Switch_langs() {
  const [lang, setLang] = useState(true);
  function changeLang() {
    setLang(!lang);
  }
  return (
    <div>
      <div>
        <button onClick={changeLang}>
          {lang ? <Flag_ven /> : <Flag_us />}
        </button>
      </div>
    </div>
  );
}
export function DarkMode() {
  const [dark, setDark] = useState(true);
  function DarkModehandler() {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }
  return (
    <div>
      <div>
        <button
          className="hover:bg-cyan-400 hover:text-black size-8 flex justify-center p-2 text-gray-300"
          onClick={DarkModehandler}
        >
          {dark ? <IoSunnyOutline /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}
export function Logo() {
  return (
    <div className="h-full w-36 bg-white">
      <button>
        <a href="/">
          <img className="size-full " src="./Logo.jpg" alt="Logo" />
        </a>
      </button>
    </div>
  );
}

import React from "react";
import BT_SR from "./Buttons";

export default function Header() {
  return (
    <nav className="w-full bg-opacity-80 bg-cyan-700 flex fixed z-50 gap-4 ">
      <div className="gap-4 max-w-screen-xl flex flex-wrap items-center justify-between p-2">
        <a href="#" className=" flex items-center space-x-3">
          <img src="./Logo.jpg" alt="Logo" className="h-20 w-36" />
        </a>
        <BT_SR />
      </div>
      <div className="gap-4 max-w-screen-xl flex flex-wrap items-center justify-around p-2 w-auto">
        <div>
          <a href="#">
            <span className="whitespace-prewrap self-center text-2xl font-bold text-black">
              Carrito
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span className="whitespace-prewrap self-center text-2xl font-bold text-black">
              Usuario
            </span>
          </a>
        </div>
        <div>
          <a href="#">
            <span className="whitespace-prewrap self-center text-2xl font-bold text-black">
              Salir
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

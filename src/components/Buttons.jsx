import React from "react";
import { useState } from "react";

export function BT_SR() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex md:order-2">
      <button
        onClick={() => setShow(!show)}
        type="button"
        data-collapse-toggle="navbar-search"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        className="md:hidden text-gray-800 hover:bg-black focus:ring-1 focus:ring-black rounded-lg text-sm p-2.5 me-1"
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>

      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-black "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <div>
          <input
            type="search"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-lg font-bold md:flex text-black border  border-gray-300 rounded-lg bg-orange-500 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black"
            placeholder="Buscar productos..."
          ></input>
          <div>
            <button
              data-collapse-toggle="navbar-search"
              type="submit"
              className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded="false"
              id="visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

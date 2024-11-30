import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function BT_SR() {
  const [search, setSearch] = useState(true);
  const opensearch = () => {
    setSearch(!search);
  };

  return (
    <div className="relative justify-center p-4 flex flex-nowrap">
      <div className="bg-orange-600 text-cyan-300 size-8 flex justify-center">
        <button onClick={() => opensearch()}>
          <FaSearch />
        </button>
      </div>
      <div>
        <div>
          <form id="">
            <div
              className={twMerge(
                search ? "justify-center flex flex-nowrap" : "hidden"
              )}
            >
              <input
                placeholder="Buscar Productos..."
                type="search"
                className="w-96 h-8 bg-slate-700 outline-none justify-center flex text-white dark:bg-cyan-400 dark:text-black"
              />
              <div className=" bg-orange-600 text-cyan-300 size-8 flex justify-center">
                <button>
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
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

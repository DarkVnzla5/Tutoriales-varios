import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function BT_SR() {
  const [search, setSearch] = useState(true);
  const opensearch = () => {
    setSearch(!search);
  };

  return (
    <div className="relative justify-center h-full p-4 flex flex-wrap w-full ">
      <div>
        <div className="bg-slate-800 size-8 flex justify-center">
          <button onClick={() => opensearch()}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        <div>
          <form id="">
            <div className={twMerge(search ? "block" : "hidden")}>
              <input
                placeholder="Buscar Productos..."
                type="search"
                className="w-96 h-8 bg-slate-700 outline-none justify-center flex text-white dark:bg-cyan-400 dark:text-black"
              />
              <div className=" size-8 flex justify-center">
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
    <div>
      <button
        className="text-bold text-black text-sm"
        onClick={(e) => window.location.reload(e)}
      >
        x
      </button>
    </div>
  );
}

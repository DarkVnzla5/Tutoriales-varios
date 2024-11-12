import { useState } from "react";
import { Delete_opt } from "./Buttons";

export default function Aside1() {
  const [tracked, SetTracked] = useState("");
  const [minprice, SetMinprice] = useState("");
  const [maxprice, SetMaxprice] = useState("");
  const [condition, SetCondition] = useState("");

  return (
    <aside className="block bg-slate-700 w-1/4 ">
      <div className=" text-black font-bold text-sm p-2">
        <div className="size-max p-2 dark:text-white dark:bg-black">
          <ul className="dark:text-white">
            <li>
              <button className="flex size-full p-2 pb-0 bg-gray-500">
                {tracked ? tracked : <span className="hidden">&nbsp;</span>}{" "}
                {tracked && <Delete_opt />}
              </button>
              <button className="flex size-full p-2 pb-0 bg-gray-500">
                {minprice ? (
                  "Minimo " + minprice + "" + "US$"
                ) : (
                  <span className="hidden">&nbsp;</span>
                )}{" "}
                {minprice && <Delete_opt />}
              </button>
              <button className="flex size-full p-2 pb-0 bg-gray-500">
                {maxprice ? (
                  "Maximo: " + maxprice + "" + "US$"
                ) : (
                  <span className="hidden">&nbsp;</span>
                )}{" "}
                {maxprice && <Delete_opt />}
              </button>
              <button className="flex size-full p-2 pb-0 bg-gray-500">
                {condition ? (
                  "Condicion: " + condition
                ) : (
                  <span className="hidden">&nbsp;</span>
                )}{" "}
                {condition && <Delete_opt />}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className=" text-black font-bold text-lg p-2">
        <div className="bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
          <p className="underline">Precio</p>
          <ul className="pt-4">
            <li>
              <div>
                <button
                  value={"Menos de 20US$"}
                  onClick={(e) => SetTracked(e.target.value)}
                >
                  Menos de 20US$
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  value={"Hasta 20US$"}
                  onClick={(e) => SetTracked(e.target.value)}
                >
                  Hasta 20US$
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  value={"Mas de 20US$"}
                  onClick={(e) => SetTracked(e.target.value)}
                >
                  Mas de 20US$
                </button>
              </div>
            </li>
            <li>
              <form action="">
                <input
                  type="number"
                  name=""
                  id="min"
                  onChange={(e) => SetMinprice(e.target.value)}
                  className="w-24 mt-2 mb-2 mr-4 dark:text-black outline-black outline-none "
                  placeholder="Min US$"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  onChange={(e) => SetMaxprice(e.target.value)}
                  className="w-24 mt-2 mb-2 dark:text-black outline-none outline-black"
                  placeholder="Max US$"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-black font-bold text-lg p-2">
        <div className=" bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
          <p className="underline">Condicion</p>
          <ul className="pt-4">
            <li>
              <div>
                <button
                  value={"Nuevo"}
                  onClick={(e) => SetCondition(e.target.value)}
                >
                  Nuevo
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  value={"Usado"}
                  onClick={(e) => SetCondition(e.target.value)}
                >
                  Usado
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  value={"Reacondicionado"}
                  onClick={(e) => SetCondition(e.target.value)}
                >
                  Reacondicionado
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

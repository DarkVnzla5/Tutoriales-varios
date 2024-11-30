import { useState } from "react";
import { Delete_opt } from "./Buttons";

export default function Aside1() {
  const [tracked, SetTracked] = useState("");
  const [minprice, SetMinprice] = useState("");
  const [maxprice, SetMaxprice] = useState("");
  const [condition, SetCondition] = useState("");

  return (
    <aside className="block  bg-slate-700 w-1/4 ">
      <div className="block justify-between text-black font-bold text-sm p-1 m-1">
        <div className="flex justify-center">
          <div className="h-10 ">
            {tracked ? (
              <button className="size-fit flex rounded-full pl-1 pr-1 pb-0 pt-0 border-2 border-black bg-gray-500 text-sm">
                {tracked} <Delete_opt />
              </button>
            ) : (
              <span className="hidden">&nbsp;</span>
            )}
          </div>
          <div>
            {minprice ? (
              <button className="size-fit flex rounded-full pl-1 pr-1 pb-0 pt-0 border-2 border-black bg-gray-500 text-sm">
                {minprice}US$ <Delete_opt />
              </button>
            ) : (
              <span className="hidden">&nbsp;</span>
            )}
          </div>
          <div>
            {maxprice ? (
              <button className="size-fit flex rounded-full pl-1 pr-1 pb-0 pt-0 border-2 border-black bg-gray-500 text-sm">
                {maxprice}US$
                <Delete_opt />
              </button>
            ) : (
              <span className="hidden">&nbsp;</span>
            )}
          </div>
          <div>
            {condition ? (
              <button className="size-fit flex rounded-full pl-1 pr-1 pb-0 pt-0 border-2 border-black bg-gray-500 text-sm">
                {condition} <Delete_opt />
              </button>
            ) : (
              <span className="hidden">&nbsp;</span>
            )}
          </div>
        </div>
        <div>
          <div className="bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
            <p className="underline pt-2 pb-2">Precio</p>

            <div className="flex justify-between pb-2">
              <button
                value={"Menos de 20$"}
                onClick={(e) => SetTracked(e.target.value)}
              >
                Menos de 20$
              </button>
            </div>
            <div className="flex justify-between pb-2">
              <button
                value={"A partir de 20$"}
                onClick={(e) => SetTracked(e.target.value)}
              >
                A partir de 20$
              </button>
            </div>
            <div className="flex justify-between  pb-2">
              <button
                value={"Hasta 50$"}
                onClick={(e) => SetTracked(e.target.value)}
              >
                Hasta 50$
              </button>
            </div>
          </div>
        </div>
        <div className="bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
          <div>
            <input
              type="number"
              value={minprice}
              onChange={(e) => SetMinprice(e.target.value)}
              placeholder="Precio Minimo"
              className="outline-none w-full h-4 text-black dark:text-black dark:bg-cyan-300"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Precio Maximo"
              value={maxprice}
              onChange={(e) => SetMaxprice(e.target.value)}
              className="outline-none w-full h-4 text-black dark:text-black dark:bg-cyan-300"
            />
          </div>
        </div>
        <div>
          <div className="bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
            <p className="underline pt-2 pb-2">Condicion</p>
            <div className="flex justify-between pb-2">
              <button
                value={"Nuevo"}
                onClick={(e) => SetCondition(e.target.value)}
              >
                Nuevo
              </button>
            </div>
            <div className="flex justify-between pb-2">
              <button
                value={"Usado"}
                onClick={(e) => SetCondition(e.target.value)}
              >
                Usado
              </button>
            </div>
            <div className="flex justify-between  pb-2">
              <button
                value={"Refurbished"}
                onClick={(e) => SetCondition(e.target.value)}
              >
                Refurbished
              </button>
            </div>
          </div>
        </div>
        <div className="bg-orange-700 border-black border-2 rounded-md p-2 dark:text-white dark:bg-black">
          <div className="flex justify-between  pb-2">
            <p className="underline pt-2 pb-2">Control Cambiario</p>
          </div>
          <div className="flex justify-between  pb-2">
            <p className="underline pt-2 pb-2">Dolar</p>
          </div>
          <div className="flex justify-between  pb-2">
            <p className="pt-2 pb-2"></p>
          </div>
        </div>
      </div>
    </aside>
  );
}

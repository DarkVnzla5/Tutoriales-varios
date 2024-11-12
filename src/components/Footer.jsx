import React from "react";

export default function Footer() {
  return (
    <div className="bg-cyan-600 flex justify-around dark:text-white text-black">
      <div className=" dark:text-white text-black">
        <div>
          <p>Compañia</p>
          <ul>
            <li>
              <a href="#" target="_self">
                Acerca de {""}
              </a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Programa de Afilicion</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" dark:text-white text-black">
          <p>Orden & Compras</p>
          <ul>
            <li>
              <a href="">Estatus de Compra</a>
            </li>
            <li>
              <a href="">Sigue tu orden</a>
            </li>
            <li>
              <a href="">Historial de compra</a>
            </li>
            <li>
              <a href="">Devoluciones</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" dark:text-white text-black">
          <p>Asociacion</p>
          <ul>
            <li>
              <a href="">Asociarnos</a>
            </li>
            <li>
              <a href="">Hagase proveedor</a>
            </li>
            <li>
              <a href="">Programa de afiliados</a>
            </li>
            <li>
              <a href="">Oportunidades de colaboracion</a>
            </li>
            <li>
              <a href="">Solicitudes de patrocinio</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" dark:text-white text-black">
          <p>Opciones de pago</p>
          <ul>
            <li>
              <a href="">Tarjetas de Credito y Debito</a>
            </li>
            <li>
              <a href="">Zelle</a>
            </li>
            <li>
              <a href="">Transferencias Bancarias</a>
            </li>
            <li>
              <a href="">Pago Movil</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <div className=" dark:text-white text-black">
          <p>
            © 2024 <a href="">Felipe Luna</a>
            {""} Derechos Reservados
          </p>
        </div>
      </div>
    </div>
  );
}

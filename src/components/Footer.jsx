import React from "react";
function Footer() {
  return (
    <footer className="bg-cyan-700 antialiased z-0">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
          <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
            <div className="grid min-w-0 flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3">
              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Compañia
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      {" "}
                      Acerca de{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      {" "}
                      Programa de Afiliacion{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Orden & Compras
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Estatus de Compra
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Sigue tu orden
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Historial de compra
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Devoluciones & Reembolsos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Asociacion
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Asociarnos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Hágase proveedor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Programa de afiliados
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Oportunidades de colaboración
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Solicitudes de patrocinio
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Opciones de Pago
                </h6>
                <ul className="space-y-3 ">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Tarjetas de crédito y débito
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      PayPal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Transferencias Bancarias
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-black hover:text-orange-400"
                    >
                      Tarjetas de Regalo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 md:py-8 ">
          <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
            <p className="text-sm text-black ">
              © 2024{" "}
              <a
                href="#"
                className="hover:underline text-black hover:text-orange-400"
              >
                Felipe Luna
              </a>{" "}
              Derechos Reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

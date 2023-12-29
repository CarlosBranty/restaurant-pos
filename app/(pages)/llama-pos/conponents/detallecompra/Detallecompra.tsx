import { useCartStore } from "@/lib/store/user";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DetalleVentaProps {
  selectedProducts: any[]; // Asegúrate de ajustar el tipo según tus datos
}

const DetalledeVenta: React.FC<DetalleVentaProps> = () => {
  const { selectedProducts } = useCartStore();
  return (
    <div className="">
      <h2 className="text-center font-bold text-muted-foreground">
        Detalle de venta
      </h2>
      <ul>
        {selectedProducts.map((product, index) => (
          <div key={index} className="">
            <div className="">
              <ul role="list" className="divide-y divide-black">
                <AnimatePresence>
                  <motion.li
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ y: "50%", opacity: 0, scale: 0.5 }}
                  >
                    <a href="#" className="block hover:rounded-md">
                      <div className="px-4 py-2">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-xs font-medium text-white">
                            {index + 1}. &nbsp;{product.Nombre} &nbsp;{" "}
                          </p>
                          <div className="ml-2 flex flex-shrink-0">
                            <p className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white">
                              S/ {product.precio * product.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <div className="flex text-xs space-x-3 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="cursor-pointer w-5 h-5 bg-[#1f2544] rounded-sm p-1 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              <p className="font-semibold text-md">
                                {product.quantity}
                              </p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="cursor-pointer w-5 h-5 bg-[#1f2544] rounded-sm p-1 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 12h-15"
                                />
                              </svg>
                            </div>

                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              &nbsp;
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.li>
                </AnimatePresence>
              </ul>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DetalledeVenta;

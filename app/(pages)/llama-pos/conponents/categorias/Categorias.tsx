import supabase from "@/lib/store/supabase";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppState, useCartStore } from "@/lib/store/user";
import { Button } from "@/components/ui/button";
import { ArrowHookUpLeft24Filled } from "@fluentui/react-icons";

const Categorias = () => {
  const [data, setData] = useState<any[]>([]);
  const [id, setId] = useState<number | undefined>();
  const [menus, setMenus] = useState<any[]>([]);
  //   const [selectedProducts, setSelectedProducts] = useState<any[]>([]); // Nuevo estado para almacenar productos seleccionados
  const { addToCart, selectedProducts } = useCartStore(); // Usa el hook de Zustand

  const { selectedTableId, setSelectedTableId } = useAppState();

  const goBackToMesas = () => {
    setSelectedTableId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: categoriaData, error } = await supabase
          .from("tb_categoria")
          .select();

        if (error) {
          console.error("Error fetching categoriaData:", error);
        } else {
          setData(categoriaData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      try {
        const { data: menuData, error } = await supabase
          .from("tb_productos")
          .select();
        if (error) {
          console.error("Error fetching categoriaData:", error);
        } else {
          // Agregar una propiedad quantity a cada elemento de menuData
          const menuDataWithQuantity = menuData.map((item) => ({
            ...item,
            quantity: 0,
          }));
          setMenus(menuDataWithQuantity);
        }
      } catch (error) {}
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    setId(categoryId);
  };

  const handleIncrement = (productId: number) => {
    setMenus((prevMenus) =>
      prevMenus.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (productId: number) => {
    setMenus((prevMenus) =>
      prevMenus.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: product.quantity });

    console.log("Producto agregado al carrito:", product);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="w-full  border-b-2 border-black"
      >
        <button
          onClick={goBackToMesas}
          className="border border-black p-2 rounded-lg mb-4 bg-accent hover:bg-slate-900"
        >
          <ArrowHookUpLeft24Filled color="#E15E85" />
        </button>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 mb-4">
          {data.map((item, index) => (
            <Button
              key={item.id}
              className=" font-bold "
              style={{ backgroundColor: `${item.color}` }}
              onClick={() => handleCategoryClick(item.id)}
            >
              <div>{item.nombre}</div>
            </Button>
          ))}
        </div>
      </motion.div>
      {id !== undefined && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 w-full">
          {menus
            .filter((item) => item.id_categoria === id)
            .map((item, index) => (
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                key={item.id}
                className="flex items-center justify-between border-2 border-black rounded-md overflow-hidden bg-[#21252B] "
              >
                <button
                  onClick={() => handleAddToCart(item)}
                  className="cursor-pointer z-10 h-full p-2"
                >
                  {item.Nombre}
                </button>
                <div className="flex flex-col items-center justify-between z-10 bg-accent h-full p-2">
                  <svg
                    onClick={() => handleIncrement(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="cursor-pointer w-6 h-6 bg-[#0e1227] rounded-sm p-1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <p className="font-semibold text-2xl">{item.quantity}</p>
                  <svg
                    onClick={() => handleDecrement(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="cursor-pointer w-6 h-6 bg-[#0e1227] rounded-sm p-1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
        </div>
      )}
      {/* Aquí puedes renderizar el componente de lista de compras con los productos seleccionados */}
    </>
  );
};

export default Categorias;

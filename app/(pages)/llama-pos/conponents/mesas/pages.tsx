import supabase from "@/lib/store/supabase";
import { useAppState } from "@/lib/store/user";
import { DeleteDismiss24Regular } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MesaProps {
  selectedSalonId: number | null;
}

const Mesa: React.FC<MesaProps> = ({ selectedSalonId }) => {
  //   const { data } = await supabase.from("tb_mesas").select();
  const { setSelectedTableId } = useAppState();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from("tb_mesas")
        .select();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(tableData);
      }
    };

    fetchData();
  }, []);
  const handleTableClick = (tableId: string) => {
    setSelectedTableId(tableId); // Actualiza el estado global con el ID de la mesa seleccionada
    console.log(tableId);
  };
  console.log(data);
  return (
    <>
      {data
        .filter((item) => item.id_salon === selectedSalonId)
        .map((item) => (
          <motion.button
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            key={item.id}
            className="w-36 relative"
            onClick={() => handleTableClick(item.id)}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path
                fill="#009B7C"
                fillRule="nonzero"
                d="M16.736 8.241v7.293a.915.915 0 01-.918.911H8.191a.915.915 0 01-.918-.911V8.241c0-.504.411-.912.918-.912h7.627c.506 0 .918.408.918.912zm.925 3.835a2.86 2.86 0 010-.321v-2.99h3.171c1.749.002 3.168 1.413 3.168 3.15 0 1.739-1.421 3.151-3.172 3.151l-.061-.001h-3.106v-2.989zm-5.495-5.672c-.054.002-.108.004-.162.004-.054 0-.108-.002-.162-.004h-3.01V3.253h.001C8.835 1.516 10.255.106 12.004.106c1.75 0 3.171 1.412 3.171 3.151v3.147h-3.009zm0 10.962h3.009v3.147c0 1.739-1.421 3.15-3.171 3.15-1.749 0-3.169-1.409-3.171-3.146h-.001v-3.151h3.01a2.92 2.92 0 01.324 0zm-5.827-5.285v2.989H3.172C1.421 15.07 0 13.659 0 11.92c0-1.737 1.419-3.148 3.168-3.15v-.001h3.171v2.99a2.86 2.86 0 010 .322z"
              >
                {" "}
              </path>
            </svg>
            <div className="rounded-sm bg-red-400 w-11 h-11 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {item.nombre}
            </div>
            {/* <DeleteDismiss24Regular width={20} height={20} color="red" /> */}
          </motion.button>
        ))}
    </>
  );
};
export default Mesa;

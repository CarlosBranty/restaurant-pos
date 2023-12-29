import Newsalonpop from "@/components/newsalon/Newsalonpop";
import { Button } from "@/components/ui/button";
import supabase from "@/lib/store/supabase";
import { useSalonStore } from "@/lib/store/user";
import { DeleteDismiss24Filled } from "@fluentui/react-icons";
import React, { useEffect, useState } from "react";

interface SalonProps {
  setSelectedSalonId: (id: number) => void;
}

const Salon: React.FC<SalonProps> = ({ setSelectedSalonId }) => {
  const [data, setData] = useState<any[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tableData, error } = await supabase
        .from("tb_salones")
        .select();

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(tableData);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (e: React.MouseEvent) => {
    console.log(e.currentTarget);
  };

  const handleSalonclick = (id: number) => {
    setSelectedSalonId(id); // Set the selected salon ID using the prop function
    useSalonStore.setState({ selectedSalonId: id }); // Update the salon ID using Zustand
    // console.log(useSalonStore.getState().selectedSalonId);
  };

  return (
    <>
      {data.map((item) => (
        <button
          key={item.id}
          className="border-b-2 border-black h-16 flex items-center p-2 gap-4 z-10 hover:bg-slate-900 "
          onClick={() => handleSalonclick(item.id)}
        >
          <span
            style={{ backgroundColor: `${item.color}` }}
            className="w-12 h-12  flex items-center justify-center rounded-md"
          >
            A
          </span>
          {item.nombre}
        </button>
      ))}
      {/* <Newsalonpop /> */}
    </>
  );
};

export default Salon;

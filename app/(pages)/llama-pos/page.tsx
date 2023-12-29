"use client";
import React, { useEffect, useState } from "react";
import Leftbar, { LeftbarItem } from "@/components/leftbar/Leftbar";
import {
  Settings24Regular,
  BarcodeScanner24Filled,
  DataArea24Regular,
  TextColumnOneWide24Filled,
  Edit24Regular,
  DocumentBulletList24Regular,
  DeleteDismiss24Regular,
  Dialpad24Regular,
  PenSparkle24Regular,
  Backspace24Regular,
} from "@fluentui/react-icons";
import Mesa from "./conponents/mesas/pages";
import Salon from "./conponents/salones/page";
import Newsalonpop from "@/components/newsalon/Newsalonpop";
import Newmesapop from "@/components/newmesa/Newmesapop";
import { Label } from "@radix-ui/react-label";
import Categorias from "./conponents/categorias/Categorias";
import { useAppState } from "@/lib/store/user";
import DetalleCompra from "./conponents/detallecompra/Detallecompra";

const Page = () => {
  const { selectedTableId } = useAppState();
  const [selectedSalonId, setSelectedSalonId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  return (
    <div className=" min-h-screen flex w-screen ">
      <Leftbar>
        <LeftbarItem icon={<BarcodeScanner24Filled />} text="Ventas" active />
        <LeftbarItem icon={<DataArea24Regular />} text="Reportes" />
        <LeftbarItem icon={<Settings24Regular />} text="Configuraciones" />
      </Leftbar>
      <section className="bg-card w-full rounded-lg flex justify-between">
        <div className="w-[30%] border border-r-2 h-full border-black">
          <div className="flex flex-col ">
            <div className=" border-b-2 border-black h-14 py-4 px-2 flex gap-2">
              <TextColumnOneWide24Filled />
              Llamalab
            </div>
            <div className="border-b-2 border-black p-2  flex justify-between">
              Salones
              <Newsalonpop />
            </div>

            <Salon setSelectedSalonId={setSelectedSalonId} />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="h-14 w-full border-b-2 border-black flex justify-end">
            <Newmesapop />
          </div>
          <div className="flex flex-wrap gap-6 p-4 h-40">
            {selectedTableId ? (
              <Categorias />
            ) : (
              <Mesa selectedSalonId={selectedSalonId} />
            )}
          </div>
        </div>
        <div className=" border-l-2 border-black w-[35%] flex justify-between flex-col">
          <div className="h-14 border-b-2 border-black flex justify-between">
            <div className="h-full p-4">MESA: M-1</div>
            <div>
              <button className="h-full border-l-2 border-black px-4 hover:bg-slate-900">
                <PenSparkle24Regular />
              </button>
              <button className="h-full border-l-2 border-black px-4 hover:bg-slate-900">
                <DocumentBulletList24Regular />
              </button>
              <button className="h-full border-l-2 border-black px-4 hover:bg-slate-900">
                <DeleteDismiss24Regular />
              </button>
            </div>
          </div>
          <div className=" h-full">
            <DetalleCompra selectedProducts={selectedProducts} />
          </div>
          <div className="flex flex-col">
            <div className="w-full">
              <button className="w-1/2 rounded-tl-lg border border-black bg-accent text-[#00A183] py-4 hover:bg-slate-900">
                <Backspace24Regular color="#00A183" /> Descuento
              </button>
              <button className="w-1/2 rounded-tr-lg border border-black bg-accent text-[#8c65fc] py-4 hover:bg-slate-900">
                <Dialpad24Regular color="#8C65FC" />
                add monto
              </button>
            </div>
            <div className="border border-black bg-accent">
              <Label className="flex w-full px-4 justify-between text-muted-foreground my-2">
                <p>IGV 18%</p>
                <p>S/ 42.50</p>
              </Label>
              <Label className="flex w-full px-4 justify-between text-muted-foreground mb-2">
                <p>Subtotal</p>
                <p>S/ 168.50</p>
              </Label>
              <Label className="flex w-full px-4 justify-between text-lg font-bold mb-2">
                <p>Total</p>
                <p>S/ 211.00</p>
              </Label>
            </div>
            <button className="rounded-t-lg border border-black bg-primary py-4 hover:bg-primary-foreground">
              COBRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

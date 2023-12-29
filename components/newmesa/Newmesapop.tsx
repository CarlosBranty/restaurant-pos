"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddSquareMultiple24Regular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { Icons } from "../icons";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";
import { useSalonStore, useUser } from "@/lib/store/user";
import { GetProfileData } from "@/lib/supabasefunctions";

const Newmesapop = () => {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [nombreMesa, setNombremesa] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedButton, setSelectedButton] = useState<string>("");

  const user = useUser((state) => state.user);
  const [success, setSuccess] = useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    if (user?.id) {
      console.log(user.id);
      const profileData = await GetProfileData(user.id);
      console.log(profileData);
      const idEmpresa = profileData.id_empresa;
      const idSucursal = profileData.id_sucursal;

      try {
        const { data, error } = await supabase.from("tb_mesas").insert({
          id_salon: useSalonStore.getState().selectedSalonId,
          nombre: nombreMesa,
          disponibilidad: "1",
          estado: "1",
          id_empresa: idEmpresa,
          size_mesa: "1",
        });

        if (error) {
          throw error;
        }
        setSuccess(true);

        // row inserted successfully
      } catch (error) {
        console.log("Error inserting row: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-l-2 border-black h-full hover:bg-slate-900">
          <svg
            className="p-2 inset-0 w-full h-full"
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
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] ">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              CREAR NUEVA MESA
            </DialogTitle>
            <DialogDescription>
              Crear nueva mesa escribe un nombre para la nueva mesa.
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-2 ">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase my-4">
                  <span className="bg-background px-2 text-muted-foreground ">
                    Elija un nombre
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Nombre de mesa</Label>
                <Input
                  id="nombreSalon"
                  type="text"
                  placeholder="...escriba un nombre para su mesa"
                  value={nombreMesa}
                  onChange={(e) => setNombremesa(e.target.value)}
                  className="mb-6"
                />
              </div>

              <Button disabled={isLoading} onClick={onSubmit}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                CREAR MESA
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Newmesapop;

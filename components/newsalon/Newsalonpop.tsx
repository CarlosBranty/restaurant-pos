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
import { useUser } from "@/lib/store/user";
import { GetProfileData } from "@/lib/supabasefunctions";

const Newsalonpop = () => {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [nombreSalon, setNombresalon] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [salonColor, setSaloncolor] = useState<string>("");

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
        const { data, error } = await supabase.from("tb_salones").insert({
          nombre: nombreSalon,
          color: salonColor, // or selected color
          id_sucursal: idSucursal,
          estado: "1",
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

  const HandleColor = async (e: React.MouseEvent) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const selectedColor = (currentTarget as HTMLButtonElement).value;
    const selectedBtn = currentTarget.id;

    console.log(selectedColor);

    setSaloncolor(selectedColor);
    setSelectedButton(selectedBtn);

    console.log(salonColor);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2">
          <AddSquareMultiple24Regular />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] ">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              CREAR NUEVO SALON
            </DialogTitle>
            <DialogDescription>
              Cree un nuevo salon espacio o piso para registrar nuevas mesas en
              el.
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
                    Elija un color y nombre
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Nombre de Salon</Label>
                <Input
                  id="nombreSalon"
                  type="text"
                  placeholder="...escriba un nombre para su salon"
                  value={nombreSalon}
                  onChange={(e) => setNombresalon(e.target.value)}
                />
              </div>
              <div className="flex gap-2 my-4">
                <button
                  id="c1"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent ${
                    selectedButton === "c1" ? "border-primary" : ""
                  }`}
                  onClick={HandleColor}
                  value="#00A183"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary"></span>
                </button>
                <button
                  id="c2"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent ${
                    selectedButton === "c2" ? "border-red-400" : ""
                  }`}
                  onClick={HandleColor}
                  value="#E15E85"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-400"></span>
                </button>
                <button
                  id="c3"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent ${
                    selectedButton === "c3" ? "border-yellow-400" : ""
                  }`}
                  onClick={HandleColor}
                  value="#FFC52F"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400"></span>
                </button>
              </div>
              <Button disabled={isLoading} onClick={onSubmit}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                CREAR SALON
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Newsalonpop;

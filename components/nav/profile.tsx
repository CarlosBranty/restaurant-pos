import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  BarcodeScanner24Regular,
  DataArea24Regular,
  LockClosedKey24Regular,
} from "@fluentui/react-icons";

export default function Profile() {
  const user = useUser((state) => state.user);

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={user?.user_metadata.avatar_url}
          alt={user?.user_metadata.user_name}
          width={45}
          height={45}
          className="rounded-2xl ring-2 ring-secondary"
        />
      </PopoverTrigger>
      <PopoverContent className="p-2 space-y-3 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-2xl backdrop-filter">
        <div className="px-4 text-sm">
          <p>{user?.user_metadata?.name}</p>
          <p className="text-gray-400">{user?.user_metadata?.email}</p>
        </div>
        <Link href="/llama-pos" className="block ">
          <Button variant="ghost" className="w-full flex gap-2 justify-start">
            <BarcodeScanner24Regular /> Llamalab POS
          </Button>
        </Link>
        <Link href="/dashboard" className="block ">
          <Button variant="ghost" className="w-full flex gap-2 justify-start">
            <DataArea24Regular /> Admin Dashboard
          </Button>
        </Link>
        <div className="self-center border-b border-slate-200 dark:border-secondary w-full"></div>

        <form action="/auth/signout" method="post">
          <Button
            variant="ghost"
            className="w-full flex gap-2 justify-start"
            type="submit"
          >
            <LockClosedKey24Regular />
            Cerrar Sesión
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}

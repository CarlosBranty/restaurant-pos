import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Potencia tu empresa
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Contrata el un punto de venta ideal para tu negocio, moderniza
                  tus procesos y obten resultados que haran la diferencia.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 z-10"
                    placeholder="Ingresa tu email"
                    type="text"
                  />
                  <Button type="submit" className="z-10">
                    informes
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Puede registrarse con su email.
                  <Link className="underline underline-offset-2" href="#">
                    Terminos & Condiciones
                  </Link>
                </p>
              </div>
            </div>
            <Image
              alt="Product Image"
              className="mx-auto aspect-video  rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="/images/hero-llamalab-pos.png"
              width="310"
            />
          </div>
        </div>

        <section className="flex flex-col items-center justify-center py-12 space-y-8 container mt-28">
          <h1 className="text-4xl font-bold">Elije tu plan</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <Card className="flex flex-col items-center p-6 space-y-4  hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Basico</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-sm text-gray-500">por mes</span>
                <ul className="space-y-1 text-center">
                  <li>3 usuarios</li>
                  <li>1 sucursal</li>
                  <li>300 comprobantes</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                  Empezar
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center p-6 space-y-4  hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Standard</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-sm text-gray-500">por mes</span>
                <ul className="space-y-1 text-center">
                  <li>5 usuarios</li>
                  <li>3 sucursal</li>
                  <li>600 comprobantes</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-2 text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
                  Empezar
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center p-6 space-y-4  hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-sm text-gray-500">por mes</span>
                <ul className="space-y-1 text-center">
                  <li>10 usuarios</li>
                  <li>ilimitado sucursal</li>
                  <li>ilimitado comprobantes</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full py-2 text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
                  Empezar
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </section>
      <footer className="bg-accent text-white py-6 px-4 bottom-0 relative w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="font-bold text-2xl mb-2">
              Carlos Branty Conza Mendoza
            </h2>
            <p className="text-sm">Codigo by Tecsup</p>
            <p className="text-sm">losbrantybc@yahoo.com</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              aria-label="Facebook"
              className="text-white hover:text-gray-300"
              href="#"
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              aria-label="Twitter"
              className="text-white hover:text-gray-300"
              href="#"
            >
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              aria-label="LinkedIn"
              className="text-white hover:text-gray-300"
              href="#"
            >
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link
              aria-label="Instagram"
              className="text-white hover:text-gray-300"
              href="#"
            >
              <InstagramIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            © Carlos Branty Conza Mendoza. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default SectionHero;

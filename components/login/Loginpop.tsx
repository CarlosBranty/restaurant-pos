"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail20Filled } from "@fluentui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Loginpop = () => {
  const pathname = usePathname();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailr, setEmailreg] = useState<string>("");
  const [passwordr, setPasswordreg] = useState<string>("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data?.user) {
      window.location.href = "/auth/confirm?next=" + pathname;
    }
  };
  const handleLoginGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  const handleRegister = async () => {};
  const handleRegisterGoogle = async () => {};
  const onSubmitRegister = async () => {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    handleLogin();

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Mail20Filled />
          Login
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[925px] ">
        <Tabs defaultValue="login">
          <div className="w-full flex justify-center">
            <TabsList className="grid sm:w-1/2 grid-cols-2 justify-center">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent
            value="login"
            className="sm:max-w-[925px] grid sm:grid-cols-2"
          >
            <div className="flex flex-col justify-center my-32 gap-4 mx-4 ">
              <Image
                width={185}
                height={185}
                src="/images/qrcode.jpg"
                alt="QR LlamaLab POS"
                className="rounded-md mx-auto "
              />
              <strong className="text-center ">
                LlamaLab POS Restaurantes
              </strong>
              <p className="text-center text-muted-foreground">
                Escanee el codigo QR para comprar una licencia, o haga{" "}
                <a
                  href="https://wa.link/1c5rbw"
                  className="text-white"
                  target="_blank"
                >
                  Click Aqui!.
                </a>{" "}
                Software de punto de venta y facturacion electrónica
              </p>
            </div>
            <div className="my-32 mx-4">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">
                  INICIAR SESIÓN
                </DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you are
                  done.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2 ">
                  <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                    <Button variant="outline" onClick={handleLoginGoogle}>
                      <Icons.google className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In with Email
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent
            value="register"
            className="sm:max-w-[925px] grid sm:grid-cols-2"
          >
            <div className="flex flex-col justify-center my-32 gap-4 mx-4 ">
              <Image
                width={185}
                height={185}
                src="/images/qrcode.jpg"
                alt="QR LlamaLab POS"
                className="rounded-md mx-auto "
              />
              <p className="text-center ">LlamaLab POS Restaurantes</p>
              <p className="text-center text-muted-foreground">
                Escanee el codigo QR para comprar una licencia, o haga{" "}
                <a
                  href="https://wa.link/1c5rbw"
                  className="text-white"
                  target="_blank"
                >
                  Click Aqui!.
                </a>{" "}
                Software de punto de venta y facturacion electrónica
              </p>
            </div>
            <div className="my-32 mx-4">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl">
                  REGISTRARSE
                </DialogTitle>
                <DialogDescription>
                  Ingrese sus datos, o puede registrarse con google y github
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={onSubmitRegister} className="mt-2">
                <div className="grid gap-2 ">
                  <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                      <Icons.gitHub className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                    <Button variant="outline" onClick={handleRegisterGoogle}>
                      <Icons.google className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="emailr">Email</Label>
                    <Input
                      id="emailr"
                      type="email"
                      placeholder="m@example.com"
                      value={emailr}
                      onChange={(e) => setEmailreg(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="passwordr">Password</Label>
                    <Input
                      id="passwordr"
                      type="password"
                      value={passwordr}
                      onChange={(e) => setPasswordreg(e.target.value)}
                    />
                  </div>
                  <Button disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Registrarse con Email
                  </Button>
                </div>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Loginpop;

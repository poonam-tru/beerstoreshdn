import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="flex bg-black flex-1 flex-col">
      <nav className="flex justify-between py-5  px-5 flex-row  flex-1 items-center">
        <div className="basis-1/4">
          <a href="">
            <Image
              src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
              alt=""
              width={200}
              height={30}
            />
          </a>
        </div>
        <div className="basis-3/4">
          <div className="flex justify-end items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white w-auto h-auto" size={"icon"}>
                  <Image
                    className="mr-2.5"
                    src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/user_login.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Login
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>Login to Your Account.</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Input />
                <Input />
                <Button variant={"link"} className="p-0">Forgot Password?</Button>
                <div className="flex flex-col">
                <Button className="p-0">Login</Button>
                <Button variant={"secondary"}  className="p-0">Create Account</Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="mx-7 bg-white h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white w-auto h-auto" size={"icon"}>
                  <Image
                    className="mr-2.5"
                    src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/pin.svg"
                    alt=""
                    width={16}
                    height={24}
                  />
                  HEARST-11862km
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Input />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <Separator className=" h-px bg-white opacity-50" />
      <div className="px-5">
        <Navigation />
      </div>
    </header>
  );
};

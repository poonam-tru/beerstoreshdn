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
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-black flex-1 flex-col">
      <nav className="flex justify-between py-5  px-5 flex-row  flex-1 items-center">
        <div className="basis-1/4">
          <a href="" className="inline-flex">
            <Image
              src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
              alt=""
              width={200}
              height={30}
            />
          </a>
        </div>
        <div className="basis-3/4">
          <div className="flex justify-end items-center relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-white w-auto h-auto bg-transparent"
                  size={"icon"}
                >
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
              <DropdownMenuContent className="bg-white py-[25px] px-[30px] relative rounded-[5px] mt-[25px] w-[300px] left-[38px]">
                <DropdownMenuLabel className="text-base">
                  Login to Your Account.
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Input
                  placeholder="Enter Email Address"
                  className="border-[#ccc] py-[8px] px-[12px] rounded-[5px] text-[#555]"
                  endIcon={
                    <Image
                      src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/icon_mail.svg"
                      alt="mail"
                      width={15}
                      height={16}
                    />
                  }
                />
                <Input
                  placeholder="Enter Password"
                  className="border-[#ccc] py-[8px] px-[12px] rounded-[5px] mt-[10px] text-[#555]"
                  endIcon={
                    <Image
                      src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/icon_password.svg"
                      alt="password"
                      width={14}
                      height={20}
                    />
                  }
                />
                <div className="flex justify-end my-2">
                  <Button
                    variant={"link"}
                    className="p-0 text-right h-auto text-[#555]"
                  >
                    Forgot Password?
                  </Button>
                </div>
                <div className="flex flex-col">
                  <Button className="p-0">Login</Button>
                  <Button variant={"secondary"} className="p-0 mt-3">
                    Create Account
                  </Button>
                </div>
                <div className="indicator w-[20px] h-[20px] absolute bg-white top-[-9px] z-[1024] rotate-45 left-[50%] translate-x-[-50%] "></div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="mx-7 bg-white h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="text-white w-auto h-auto  bg-transparent"
                  size={"icon"}
                >
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
              <DropdownMenuContent className="bg-white relative rounded-[5px] mt-[25px] w-[300px] right-[22px] p-0">
                <DropdownMenuLabel className="text-base p-[15px] border-b-[2px] border-[#ddd]">
                  Current Store
                </DropdownMenuLabel>
                <div className="flex p-[15px]">
                  <Link href="">
                    <span className="flex">HEARST-11862km</span>
                    <span className="flex">1106 Front St., P0L 1N0</span>
                    <span className="flex">Click here for Holiday Hours</span>
                  </Link>
                </div>
                <div className="flex p-[15px] border-t-[2px] border-[#ddd] gap-2">
                  <Button>Direction</Button>
                  <Button variant={"outline"}>Create store</Button>
                </div>
                <DropdownMenuSeparator />

                <div className="indicator w-[20px] h-[20px] absolute bg-white top-[-9px] z-[1024] rotate-45 right-[10px] translate-x-[-10px] "></div>
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
export default Header;

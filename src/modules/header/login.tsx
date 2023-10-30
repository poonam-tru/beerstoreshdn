import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function login() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-white w-auto h-auto bg-transparent text-[14px] font-sans font-normal hidden md:block md:flex"
          size={"icon"}
          variant="link"
        >
          <Image
            className="mr-2.5"
            src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/user_login.svg"
            alt=""
            width={20}
            height={20}
          />
          <p className="font-sans font-normal text-[#fff]">Login</p>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white py-[25px] px-[30px] relative rounded-[5px] mt-[25px] w-[300px] left-[38px]">
        <DropdownMenuLabel className="text-base text-[16px] font-sans font-medium">
          Login to Your Account.
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Input
          placeholder="Enter Email Address"
          className="border-[#ccc] py-[8px] px-[12px] rounded-[5px] text-[#555] text-[14px]"
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
          className="border-[#ccc] py-[8px] px-[12px] rounded-[5px] mt-[10px] text-[#555] text-[14px]"
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
            className="p-0 text-right h-auto text-[#555] text-[12px] font-sans font-medium"
          >
            Forgot Password?
          </Button>
        </div>
        <div className="flex flex-col">
          <Button className="p-0 text-[14px] font-Gothm-Bold rounded-[4px]">
            Login
          </Button>
          <Button
            variant={"secondary"}
            className="p-0 mt-3 text-[12px] font-Gothm-Medium rounded-[4px]"
          >
            Create Account
          </Button>
        </div>
        <div className="indicator w-[20px] h-[20px] absolute bg-white top-[-9px] z-[1024] rotate-45 left-[50%] translate-x-[-50%] "></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

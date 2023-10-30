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
import { useState } from "react";

export default function location() {
  const [isopen, setIsopen] = useState(false);

  return (
    <DropdownMenu open={isopen}>
      <DropdownMenuTrigger onClick={() => setIsopen(true)} asChild>
        <Button
          className="text-white w-auto h-auto  bg-transparent text-[14px] font-Gothm-Book"
          size={"icon"}
          variant={"link"}
        >
          <Image
            className="sm:mr-2.5"
            src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/pin.svg"
            alt=""
            width={16}
            height={24}
          />
          <p className="font-sans font-normal text-[#fff]">HEARST-11862km</p>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white relative rounded-[5px] mt-[25px] w-[300px] md:right-[22px] max-md:left-[50%] max-md:translate-y-[50%]  p-0">
        <DropdownMenuLabel className="text-base text-[18px] font-sans font-medium p-[15px] border-b-[2px] border-[#ddd]">
          Current Store
        </DropdownMenuLabel>
        <div className="flex p-[15px]">
          <Link href="" className="text-[14px] font-sans font-normalk ">
            <span className="flex">HEARST-11862km</span>
            <span className="flex">1106 Front St., P0L 1N0</span>
            <span className="flex">Click here for Holiday Hours</span>
          </Link>
        </div>
        <div className="flex p-[15px] border-t-[2px] border-[#ddd] gap-2">
          <Button
            variant={"default"}
            className="text-[12px] font-sans  font-bold h-[36px] rounded-[5px]"
          >
            Direction
          </Button>
          <Button
            className="text-[12px] font-sans  font-bold h-[36px] rounded-[5px]"
            variant={"secondary"}
          >
            Create store
          </Button>
        </div>
        <DropdownMenuSeparator />
        <Image
          src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/close.svg"
          height={13}
          width={13}
          alt={""}
          onClick={() => setIsopen(false)}
          className="right-[30px] top-[18px] absolute h-[13px] w-[13px] "
        />
        <div className="indicator hidden md:block w-[20px] h-[20px] absolute bg-white top-[-9px] z-[1024] rotate-45 right-[10px] translate-x-[-10px] "></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

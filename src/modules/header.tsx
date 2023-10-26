import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "./navigation";
import Link from "next/link";
import TopLlink from "./topheaderlink";

const Header = () => {
  return (
    <div className="bg-black mx-auto">
      <header className="flex flex-1 flex-col w-full">
        <nav className="flex justify-between py-[14px] md:py-[20px]  px-5 flex-row  flex-1 items-center">
          <div className="basis-1/4 hidden md:flex">
            <Link href="/" className="inline-flex">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
                alt=""
                width={226}
                height={40}
              />
            </Link>
          </div>
          <div className="basis-3/4">
            <TopLlink />
          </div>
        </nav>
        <Separator className=" h-px bg-white opacity-50" />
        <div className="px-5">
          <Navigation />
        </div>
      </header>
    </div>
  );
};
export default Header;

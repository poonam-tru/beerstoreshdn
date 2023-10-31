"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "./navigation";
import Link from "next/link";
import Location from "./location";
import Login from "./login";
import Logo from "./logo";
import { navigationData } from "../../fetch/header/navigation";
const Header = () => {
  return (
    <div className="bg-black mx-auto">
      <header className="flex flex-1 flex-col w-full">
        <nav className="flex justify-between py-[14px] md:py-[20px]  px-5 flex-row  flex-1 items-center">
          <div className="basis-1/4 hidden md:flex">
            <Logo />
          </div>
          <div className="basis-3/4">
            <div className="flex md:justify-end items-center relative">
              <Login />
              <Separator
                orientation="vertical"
                className="mx-3 sm:mx-7 bg-white h-6 hidden md:block"
              />
              <Location />
            </div>
          </div>
        </nav>
        <Separator className=" h-px bg-white opacity-50" />
        <div className="px-5 ">
          <Navigation />
        </div>
      </header>
    </div>
  );
};
export default Header;

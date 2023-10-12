"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Hamburger from "../image/hamburger.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description: "modal",
  },
  {
    title: "Hover Card",
    href: "3",
    description: "sighted",
  },
  {
    title: "Progress",
    href: "#",
    description: "typically",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually",
  },
  {
    title: "Tabs",
    href: "#",
    description: "Sections",
  },
  {
    title: "Tooltip",
    href: "#",
    description: "Are",
  },
];
const dummy = [
  {
    mainHead: "SHOP OUR BEER",
    href: "",
    content: [
      {
        subhead: "Discover",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
      {
        subhead: "Beer Category",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
      {
        subhead: "Beer Style",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
          { link: "On Sale Now", href: "" },
        ],
      },
      {
        subhead: "Beer Format",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
      {
        subhead: "Beer Flavour",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
      {
        subhead: "Health Category",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
    ],
  },
  {
    mainHead: "STORE LOCATOR",
    href: "",
    // content: [],
  },
  {
    mainHead: "FOR BEER LOVERS",
    href: "",
    content: [
      {
        subhead: "",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
    ],
  },
  {
    mainHead: "ABOUT US",
    href: "",
    content: [
      {
        subhead: "",
        list: [
          { link: "On Sale Now", href: "" },
          { link: "Whats New", href: "" },
          { link: "Seasonal", href: "" },
          { link: "Mixed Pack", href: "" },
        ],
      },
    ],
  },
  {
    mainHead: "CONTACT",
    href: "",
    // content: [],
  },
];

export function Navigation() {
  return (
    <div className="px-[5px]">
      <div className="hidden md:block">
        <div className="flex flex-wrap lg:justify-between w-full">
          <NavigationMenu className=" lg:w-3/4">
            <NavigationMenuList>
              {dummy?.map(({ mainHead, href, content }, IDX) => (
                <NavigationMenuItem key={mainHead} className="relative">
                  {[1, 4].includes(IDX) ? (
                    <NavigationMenuLink
                      href="/"
                      className="font-[Gotham-Medium] 2xl:text-[20px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5"
                    >
                      {mainHead}
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuTrigger className="font-[Gotham-Medium] 2xl:text-[20px] xl:text-[14px] lg:text-[12px]  md:text-[14px] text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5">
                      {mainHead}
                    </NavigationMenuTrigger>
                  )}

                  <NavigationMenuContent className="flex flex-row  top-[60px] border-[1px] border-solid border-[#ddd] bg-[#f4f4f4] z-30 ">
                    {content?.map(({ subhead, list }) => (
                      <div
                        className="flex flex-col bg-white"
                        key={`di${subhead}`}
                      >
                        {subhead && (
                          <div className="flex flex-col gap-3 p-3 md:w-[120px] lg:w-[150px] 2xl:w-[180px] border-b-[1px]">
                            <h2 className="font-[Gotham-Medium] text-[#d06f1a] 2xl:text-[15px]   md:text-[10px] flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                              {subhead}
                            </h2>
                          </div>
                        )}
                        <ul className="flex flex-col h-full py-[10px] md:w-[120px] lg:w-[150px] 2xl:w-[180px] border-e-[1px] border-[#ddd]">
                          {list?.map(({ link, href }) => (
                            <li
                              key={`list${link}`}
                              className={`flex px-3${
                                [2, 3].includes(IDX)
                                  ? " border-b-[1px] border-solid border-[#ddd]"
                                  : ""
                              }`}
                            >
                              <NavigationMenuLink href="" asChild>
                                <a
                                  className="font-[Gotham-Book] p-0  2xl:text-[14px] xl:text-[14px] py-[3px]  md:text-[10px] text-[#4a4f55] hover:text-[#d06f1a]"
                                  href={href}
                                >
                                  {link}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="p-0 search lg:w-1/4">
            <Input
              className="p-0 w-full"
              placeholder="Search 1,000+ brand of beer "
              endIcon={
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="p-0 relative right-[55px]"
                >
                  <Image
                    src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/search-button.svg"
                    alt="password"
                    width={40}
                    height={40}
                  />
                </Button>
              }
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden h-[60px]">
        <div className=" flex justify-between items-center py-[10px]">
          <div>
            <Button variant={"ghost"} className="p-0 h-[20px]">
              <Image src={Hamburger} alt="" width={40} height={40} />
            </Button>
          </div>
          <div>
            <a href="" className="inline-flex">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
                alt=""
                width={200}
                height={30}
              />
            </a>
          </div>
          <div>
            <a>
              <Image
                className="mr-2.5"
                src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/user_login.svg"
                alt=""
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

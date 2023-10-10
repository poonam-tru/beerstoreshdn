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
    mainHead: "SHOP OUR BEER",
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
    <NavigationMenu className="py-3">
      <NavigationMenuList>
        {dummy?.map(({ mainHead, href, content }, IDX) => (
          <NavigationMenuItem key={mainHead} className="relative">
            {[1, 4].includes(IDX) ? (
              <NavigationMenuLink
                href="/"
                className= "font-[Gotham-Medium] 2xl:text-[20px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5"
              >
                {mainHead}
              </NavigationMenuLink>
            ) : (
              <NavigationMenuTrigger  className="font-[Gotham-Medium] 2xl:text-[20px] xl:text-[14px] lg:text-[12px]  md:text-[14px] text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5">
                {mainHead}
              </NavigationMenuTrigger>
            )}

            <NavigationMenuContent className="flex flex-row  top-[40px] border-[1px] border-solid border-[#ddd] bg-[#f4f4f4]">
              {content?.map(({ subhead, list }) => (
                <div className="flex flex-col bg-white z-20" key={`di${subhead}`}>
                  {subhead && (
                    <div className="flex flex-col gap-3 p-3 md:w-[120px] lg:w-[150px] 2xl:w-[180px] border-b-[1px]">
                      <h2 className="font-[Gotham-Medium] text-[#d06f1a] 2xl:text-[15px]   md:text-[10px] flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                        {subhead}
                      </h2>
                    </div>
                  )}
                  <ul className="flex flex-col 2xl:gap-3 md:gap-1 p-3 md:w-[120px] lg:w-[150px] 2xl:w-[180px]">
                    {list?.map(({ link, href }) => (
                      <li key={`list${link}`}>
                        <NavigationMenuLink href="" asChild>
                          <a
                            className="font-[Gotham-Book] p-0  2xl:text-[14px] xl:text-[12px]  md:text-[10px] text-[#4a4f55] hover:text-[#d06f1a]"
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
  );
}

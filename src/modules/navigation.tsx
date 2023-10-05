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
                className="text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10"
              >
                {mainHead}
              </NavigationMenuLink>
            ) : (
              <NavigationMenuTrigger className=" text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base mr-10">
                {mainHead}
              </NavigationMenuTrigger>
            )}

            <NavigationMenuContent className="flex flex-row  top-[40px] border-[1px] border-solid border-[#ddd] bg-[#f4f4f4]">
              {content?.map(({ subhead, list }) => (
                <div className="flex flex-col bg-white" key={`di${subhead}`}>
                  {subhead && (
                    <div className="flex flex-col gap-3 p-3 w-[180px] border-b-[1px]">
                      <h2 className="text-[#d06f1a] text-sm flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                        {subhead}
                      </h2>
                    </div>
                  )}
                  <ul className="flex flex-col gap-3 p-3 w-[180px]">
                    {list?.map(({ link, href }) => (
                      <li key={`list${link}`}>
                        <NavigationMenuLink href="" asChild>
                          <a
                            className="p-0 text-sm text-[#4a4f55] hover:text-[#d06f1a]"
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

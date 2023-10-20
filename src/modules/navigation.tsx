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
const headerManuNav = [
  {
    mainHead: "SHOP OUR BEER",
    href: "#",
    content: [
      {
        subhead: "Discover",
        list: [
          { link: "On Sale Now", href: "/" },
          { link: "Whats New", href: "/" },
          { link: "Seasonal", href: "/" },
          { link: "Mixed Pack", href: "/" },
        ],
      },
      {
        subhead: "Beer Category",
        list: [
          { link: "Import", href: "/" },
          { link: "International", href: "/" },
          { link: "Ontario", href: "/" },
          { link: "Craft", href: "/" },
          { link: "Premium", href: "/" },
          { link: "Value", href: "/" },
          { link: "Domestic", href: "/" },
          { link: "Specialty", href: "/" },
          { link: "Non Beer", href: "/" },
          { link: "Flavoured", href: "/" },
        ],
      },
      {
        subhead: "Beer Types",
        list: [
          { link: "Ale", href: "/" },
          { link: "Lager", href: "/" },
          { link: "Malt", href: "/" },
          { link: "Stout", href: "/" },
        ],
      },
      {
        subhead: "Beer Styles",
        list: [
          { link: "Amber", href: "/" },
          { link: "Blonde", href: "/" },
          { link: "Brown", href: "/" },
          { link: "Cream", href: "/" },
          { link: "Dark", href: "/" },
          { link: "Golden", href: "/" },
          { link: "India Pale Ale", href: "/" },
          { link: "Pale", href: "/" },
          { link: "Pilsner", href: "/" },
          { link: "Porter", href: "/" },
          { link: "Red", href: "/" },
          { link: "Strong", href: "/" },
          { link: "Wheat", href: "/" },
        ],
      },
      {
        subhead: "Beer Format",
        list: [
          { link: "Single", href: "/" },
          { link: "Can", href: "/" },
          { link: "Bottles", href: "/" },
          { link: "6 Packs", href: "/" },
          { link: "12 Pack", href: "/" },
          { link: "12 Pack", href: "/" },
          { link: "30 Pack", href: "/" },
          { link: "Kegs", href: "/" },
        ],
      },
      {
        subhead: "Beer Flavour",
        list: [
          { link: "Fruit", href: "/" },
          { link: "Honey", href: "/" },
          { link: "Lime", href: "/" },
        ],
      },
      {
        subhead: "Health Category",
        list: [
          { link: "Gluten Free", href: "/" },
          { link: "Light Low", href: "/" },
          { link: "Calorie", href: "/" },
          { link: "Low Carb", href: "/" },
        ],
      },
    ],
  },
  {
    mainHead: "STORE LOCATOR",
    href: "/",
    // content: [],
  },
  {
    mainHead: "FOR BEER LOVERS",
    href: "/",
    content: [
      {
        subhead: "",
        list: [
          { link: "For Beer Lovers ", href: "/" },
          { link: "Articles", href: "/articles" },
          { link: "Beer 101", href: "/" },
          { link: "Recipes", href: "/" },
          { link: "Beer & Food Pairings", href: "/" },
          { link: "Party Planning", href: "/" },
        ],
      },
    ],
  },
  {
    mainHead: "ABOUT US",
    href: "/about-us",
    content: [
      {
        subhead: "",
        list: [
          { link: "Online Ordering Information", href: "/" },
          { link: "Business Services", href: "/" },
          { link: " Ownership & Governance", href: "/" },
          { link: "Environmental Leadership", href: "/" },
          { link: "Social Responsibility", href: "/" },
          { link: "Community Involvement", href: "/" },
          { link: "Careers", href: "/" },
          { link: "Gift Cards", href: "/" },
          { link: "TBS Dispute Resolution", href: "/" },
          { link: "Contact Us", href: "/about-us/contact-us" },
          { link: "Manuals and Forms", href: "/" },
        ],
      },
    ],
  },
  {
    mainHead: "CONTACT",
    href: "/about-us/contact-us",
    // content: [],
  },
];

export function Navigation() {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="flex flex-wrap lg:flex-row flex-col justify-between w-full py-[5px]">
          <NavigationMenu className="basis-3/5 lg:basis-3/4">
            <NavigationMenuList>
              {headerManuNav?.map(({ mainHead, href, content }, IDX) => (
                <NavigationMenuItem key={mainHead} className="relative">
                  {[1, 4].includes(IDX) ? (
                    <NavigationMenuLink
                      href={href ? href : ""}
                      className="font-sans font-medium 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px]  text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5"
                    >
                      {mainHead}
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuTrigger className="font-sans font-medium 2xl:text-[20px] xl:text-[18px] lg:text-[15px] md:text-[14px]   text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase text-base md:mr-2 2xl:mr-5">
                      <Link href={href && href}>{mainHead}</Link>
                    </NavigationMenuTrigger>
                  )}

                  <NavigationMenuContent className="flex flex-row  top-[60px] border-[1px] border-solid border-[#ddd] bg-[#f4f4f4] z-[9]">
                    {content?.map(({ subhead, list }) => (
                      <div
                        className="flex flex-col bg-white "
                        key={`di${subhead}`}
                      >
                        {subhead && (
                          <div className=" gap-3 px-[15px] py-[10px] lg:p-[15px] border-b-[1px] md:min-h-[65px]">
                            <h2 className="font-sans font-medium text-[#d06f1a] 2xl:text-[15px]   md:text-[10px] flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                              {subhead}
                            </h2>
                          </div>
                        )}
                        <ul
                          className={`flex flex-col h-full  md:w-[100px] lg:w-[140px] xl:w-[175px] 2xl:w-[210px] border-e-[1px] border-[#ddd] ${
                            [2, 3].includes(IDX)
                              ? " w-[240px]"
                              : "py-[10px] md:w-[105px] lg:w-[120px] xl:w-[150px]"
                          }`}
                        >
                          {list?.map(({ link, href }) => (
                            <li
                              key={`list${link}`}
                              className={`flex px-3${
                                [2, 3].includes(IDX)
                                  ? " border-b-[1px] border-solid border-[#ddd] py-[10px] px-[15px]"
                                  : ""
                              }`}
                            >
                              <NavigationMenuLink asChild>
                                <Link
                                  className="font-sans font-normal p-0 lg:text-[14px] py-[3px]  text-[10px] text-[#4a4f55] hover:text-[#d06f1a]"
                                  href={href && href}
                                >
                                  {link}
                                </Link>
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
          <div className="flex basis-1/4 lg:basis-1/4 justify-end h-auto">
            <div className="max-w-[400px] lg:w-full">
              <Input
                className="bg-white  sm:h-[40px] lg:h-[50px] text-[10px] font-sans font-normal rounded-[50px] py-[8px] pl-[14px] lg:pl-[28px] pr-[5px]"
                placeholder="Search 1,000+ brand of beer "
                endIcon={
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="p-0 relative justify-end"
                  >
                    <Image
                      src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/search-button.svg"
                      alt="password"
                      width={40}
                      height={40}
                      className={"w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"}
                    />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden h-auto">
        <div className=" flex justify-between items-center py-[10px]">
          <Button variant={"ghost"} className="p-0 h-[20px]">
            <Image src={Hamburger} alt="" width={40} height={40} />
          </Button>
          <div className="flex">
            <Link href="/" className="inline-flex">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
                alt="test"
                width="0"
                height="0"
                style={{ width: "100%", height: "30px" }}
              />
            </Link>
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

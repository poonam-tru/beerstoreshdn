"use client";
import Link from "next/link";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Hamburger from "../image/hamburger.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/mediaChange";
import { Separator } from "@/components/ui/separator";

const navbardata = [
  {
    mainHead: "SHOP OUR BEER",
    href: "",
    open: false,
    content: [
      {
        subhead: "Discover",
        open: false,
        list: [
          { link: "On Sale Now", href: "/" },
          { link: "Whats New", href: "/" },
          { link: "Seasonal", href: "/" },
          { link: "Mixed Pack", href: "/" },
        ],
      },
      {
        subhead: "Beer Category",
        open: false,
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
        open: false,
        list: [
          { link: "Ale", href: "/" },
          { link: "Lager", href: "/" },
          { link: "Malt", href: "/" },
          { link: "Stout", href: "/" },
        ],
      },
      {
        subhead: "Beer Styles",
        open: false,
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
        open: false,
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
        open: false,
        list: [
          { link: "Fruit", href: "/" },
          { link: "Honey", href: "/" },
          { link: "Lime", href: "/" },
        ],
      },
      {
        subhead: "Health Category",
        open: false,
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
    href: "",
    open: false,
    // content: [],
  },
  {
    mainHead: "FOR BEER LOVERS",
    href: "",
    open: false,
    content: [
      {
        subhead: "",
        open: false,
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
    open: false,
    content: [
      {
        subhead: "",
        open: false,
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
    open: false,
    // content: [],
  },
];

export function Navigation() {
  const mediaScreen = useMediaQuery("(max-width:767.98px)");
  const [sideMenu, setSidemenu] = useState("visible");
  const [cardOpened, setCardOpened] = useState(navbardata);
  const [opened, setOpened] = useState(false);
  const [logoChange, setLogoChange] = useState(false);
  useEffect(() => {
    if (!mediaScreen) {
      setSidemenu("invisible");
      const newdata = cardOpened.map((itm, idx) => {
        itm.open = false;
        itm?.content?.map((item) => (item.open = false));
        return itm;
      });
      setCardOpened(newdata);
      console.info(newdata, "newdata");
    }
  }, [mediaScreen]);
  const sideMenuLevOne =
    sideMenu === "visible"
      ? " fixed top-0 bg-black w-full h-full z-50 left-0   peer-focus:left-0 ease-out delay-600 duration-700  "
      : " fixed top-0 bg-black w-full h-full -left-full z-50  peer-focus:left-0 ease-out delay-600 duration-700  ";

  const cardOpen = (index: any) => {
    const newdata = cardOpened.map((itm, idx) => {
      if (index === idx) {
        itm.open = !itm.open;
      }
      return itm;
    });
    setCardOpened(newdata);
    setLogoChange(true);

    console.info(newdata, "newdata");
  };
  const resetData = () => {
    console.info("first");
    const reset = cardOpened.map((itm) => {
      itm.open = false;
      return itm;
    });
    setCardOpened(reset);
    setLogoChange(false);

    console.info(reset, "reset");
  };
  const resetSubmenuData = () => {
    setOpened(false);
    console.info("first");
    const reset = cardOpened.map((itm) => {
      if (itm.open === true) {
        itm?.content?.map((item) => (item.open = false));
      }
      // itm.open = false;
      return itm;
    });
    setCardOpened(reset);

    console.info(reset, "reset");
  };

  console.info(opened, "opened");
  const subMenuHandler = (indx: any) => {
    setOpened(true);
    console.info(logoChange, "logoChanged");
    const subMenuReset = cardOpened?.map((itm) => {
      itm?.content?.filter((items, idx) => {
        if (idx == indx) {
          items.open = !items?.open;
        }
        return items;
      });
      return itm;
    });
    console.info(subMenuReset, "submenureset");
    setCardOpened(subMenuReset);
  };
  return (
    <div>
      <div className="block md:hidden h-auto">
        <div className=" flex justify-between items-center py-[10px]">
          <Button
            onClick={() => setSidemenu("visible")}
            variant={"ghost"}
            className="p-0 h-[20px]"
          >
            <Image src={Hamburger} alt="" width={40} height={40} />
          </Button>

          <div className="flex">
            <Link href="/" className="inline-flex">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
                alt="test"
                width="0"
                height="0"
                style={{ width: "130px", height: "21px" }}
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

      <div
        className={`md:visible ${sideMenu} ${
          mediaScreen && sideMenuLevOne
        } flex flex-col`}
      >
        {mediaScreen && (
          <div className="px-[30px] py-[14px]">
            {logoChange ? (
              <ChevronLeft
                id="cross"
                color="#d06f1a"
                className="h-[30px] w-[25px]"
                onClick={!opened ? resetData : resetSubmenuData}
              />
            ) : (
              <a href="" className="inline-flex">
                <Image
                  src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
                  alt="test"
                  width="0"
                  height="0"
                  style={{ width: "130px", height: "21px" }}
                />
              </a>
            )}
            <Image
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/close-white.svg"
              height={13}
              width={13}
              alt={""}
              onClick={() => {
                setSidemenu("invisible");
                resetData();
                resetSubmenuData();
              }}
              className="right-[30px] top-[18px] absolute h-[13px] w-[13px] "
            />
          </div>
        )}
        {mediaScreen && (
          <Separator
            orientation="horizontal"
            className="bg-white  h-px opacity-50"
          />
        )}
        <div>
          <div className="flex  justify-between flex-col-reverse md:flex-col lg:flex-row w-full  md:py-[5px] py-[25px] md:px-0 ">
            <div className="md:basis-3/5 lg:basis-3/4 items-baseline md:flex md:items-center justify-start py-[25px] md:py-0 max-w-full max-md:[&>*:first-child]:w-full">
              <ul className="flex flex-col md:flex-row justify-start md:py-[20px]    items-baseline w-full max-md:px-[30px]">
                {cardOpened.map(({ mainHead, href, content, open }, indx) => (
                  <li className="relative py-[20px] items-center max-md:w-full flex   md:py-0 border-b-[1px] md:border-none border-solid border-[#d4d4d4]">
                    {content ? (
                      <div className="relative w-full">
                        {!mediaScreen && (
                          <HoverCard>
                            <HoverCardTrigger
                              href="/"
                              className="font-mono font-medium cursor-pointer w-full flex items-center hover:underline  text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:[10px] text-[14px] leading-[20px]   mr-[10px] 2xl:mr-5"
                            >
                              {mainHead}
                              <ChevronDown
                                color="white"
                                height={15}
                                width={20}
                                className="float-right ml-1"
                                onClick={() => mediaScreen && cardOpen(indx)}
                              />
                            </HoverCardTrigger>
                            <div className="[&>*:first-child]:md:!top-[30px] [&>*:first-child]:z-[9] [&>*:first-child]:md:!absolute [&>*:first-child]:md:!left-[30px]">
                              <HoverCardContent
                                className={`  flex flex-row   bg-black md:bg-white`}
                              >
                                <ul
                                  className={`flex flex-col md:flex-row items-baseline  md:items-stretch  justify-start h-full w-full `}
                                >
                                  {content?.map(({ subhead, list }, idx) => (
                                    <li
                                      className={`flex flex-col w-full bg:black md:bg-[#fff] border-b-[1px]  border-solid border-[#d4d4d4] ${
                                        indx == 0 &&
                                        "2xl:w-[210px] xl:w-[175px] lg:w-[130px] md:w-[100px]"
                                      } `}
                                    >
                                      {subhead && (
                                        <div className="flex flex-col gap-3 p-3  border-b-[1px] border-solid border-[#ddd] ">
                                          <h3 className="font-mono font-medium text-[#d06f1a] 2xl:text-[15px]   md:text-[10px] flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                                            {subhead}
                                          </h3>
                                        </div>
                                      )}
                                      {list && (
                                        <ul
                                          className={`flex flex-col h-full border-collapse border-[1px] border-solid border-[#e5e7eb] ${
                                            indx == 0 ? "py-[10px] " : "w-250px"
                                          }`}
                                        >
                                          {list.map(({ link, href }) => (
                                            <li
                                              key={`list${link}`}
                                              className={`flex  w-full  ${
                                                indx == 0
                                                  ? "px-[20px]  py-[5px] "
                                                  : "border-b-[1px] border-solid border-[#e5e7eb] px-[25px] py-[10px]"
                                              }   hover:text-[#d06f1a]
                                       `}
                                            >
                                              <Link
                                                className="font-mono font-normal  text-[14px]   md:text-[10px] text-[#4A4F55]"
                                                href={href && href}
                                              >
                                                {link}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </HoverCardContent>
                            </div>
                          </HoverCard>
                        )}
                        {mediaScreen && (
                          <HoverCard open={open}>
                            <HoverCardTrigger className="font-mono font-medium max-md:w-full max-md:flex max-md:justify-between items-center  text-white focus:bg-transparent hover:text-white focus:text-white p-0 h-auto uppercase 2xl:text-[20px] xl:text-[18px] lg:text-[14px] md:[10px] text-[14px] leading-[20px]    2xl:mr-5">
                              {mainHead}
                              <ChevronRight
                                color="#d06f1a"
                                height={20}
                                width={15}
                                className="float-right h-[20px] w-[15px]"
                                onClick={() => mediaScreen && cardOpen(indx)}
                              />
                            </HoverCardTrigger>
                            <div className="[&>*:first-child]:w-full  [&>*:first-child]:!translate-y-[122px] [&>*:first-child]:h-full">
                              <HoverCardContent
                                className={`HoverCardContent  border-none px-[30px] flex flex-row  top-[160px] md:top-[64px]  bg-black md:bg-white z-[9] h-full`}
                              >
                                <div className="w-full">
                                  <ul
                                    className={`flex flex-col md:flex-row items-baseline  md:items-stretch  justify-start h-full w-full `}
                                  >
                                    {content?.map(
                                      ({ subhead, list, open }, indx) => (
                                        <li className="flex flex-col w-full bg:black md:bg-[#fff] border-b-[1px] border-solid border-[#d4d4d4]">
                                          <HoverCard open={open}>
                                            <div className="[&>*:first-child]:w-full [&>*:first-child]:!translate-y-0  [&>*:first-child]:h-full">
                                              <HoverCardContent
                                                className={`HoverCardContent border-none px-[30px] flex flex-row  top-[160px] md:top-[64px]  bg-black md:bg-white z-[9] h-full`}
                                              >
                                                <ul
                                                  className={`flex flex-col h-full   border-[#ddd] w-full`}
                                                >
                                                  {list.map(
                                                    ({ link, href }) => (
                                                      <li
                                                        key={`list${link}`}
                                                        className={`flex  w-full border-t-[1px] border-solid border-[#ddd] py-[20px] hover:text-[#d06f1a]
                                   `}
                                                      >
                                                        <Link
                                                          className="font-mono font-normal p-0 text-[14px]  md:text-[10px] text-[#fff]"
                                                          href={href && href}
                                                        >
                                                          {link}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </HoverCardContent>
                                            </div>
                                            {subhead ? (
                                              <HoverCardTrigger
                                                onPointerEnter={(event) =>
                                                  mediaScreen &&
                                                  event.preventDefault()
                                                }
                                                onPointerLeave={(event) =>
                                                  mediaScreen &&
                                                  event.preventDefault()
                                                }
                                                onClick={() =>
                                                  subMenuHandler(indx)
                                                }
                                              >
                                                <div className="flex flex-row gap-3 items-center py-[20px]  border-b-[1px] border-solid border-[#ddd] ">
                                                  <h3 className="font-mono font-medium text-[#fff] text-[14px] flex h-full w-full select-none flex-col justify-end rounded-md  no-underline outline-none focus:shadow-md">
                                                    {subhead}
                                                  </h3>
                                                  <ChevronRight
                                                    color="#d06f1a"
                                                    height={24}
                                                    width={12}
                                                    className="h-[20px] w-[15px]"
                                                  />
                                                </div>
                                              </HoverCardTrigger>
                                            ) : (
                                              <ul
                                                className={`flex flex-col h-full  `}
                                              >
                                                {list.map(({ link, href }) => (
                                                  <li
                                                    key={`list${link}`}
                                                    className={`flex  w-full border-t-[1px] border-solid border-[#ddd] py-[20px] hover:text-[#d06f1a]
                                   `}
                                                  >
                                                    <Link
                                                      className="font-mono font-normal p-0 text-[14px] py-[5px]  md:text-[10px] text-[#fff]"
                                                      href={href && href}
                                                    >
                                                      {link}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </HoverCard>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </HoverCardContent>
                            </div>
                          </HoverCard>
                        )}
                      </div>
                    ) : (
                      <Link
                        href="#"
                        className="pr-[26px] font-mono font-medium 2xl:text-[20px] hover:underline text-left xl:text-[18px] lg:text-[14px] md:[10px] text-[14px] leading-[20px] h-[20px]   text-white focus:bg-transparent hover:text-white focus:text-white p-0  uppercase  mr-[10px] 2xl:mr-5"
                      >
                        {mainHead}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:basis-1/4 lg:basis-1/4 h-auto items-center  md:justify-end px-[30px] md:px-0">
              <div className="lg:max-w-[500px] md:max-w-[265px] lg:w-full w-full md:mb-[10px] lg:mb-0 ">
                <Input
                  className="bg-white text-[#4A4F55]  h-[40px] 2xl:h-[50px] xl:h-[40px] text-[10px] lg:text-[14px] font-mono font-normal rounded-[50px] py-[8px]  pl-[14px] lg:pl-[28px] pr-[5px]"
                  placeholder="Search 1,000+ brand of beer..."
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
                        className={
                          "w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px]"
                        }
                      />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

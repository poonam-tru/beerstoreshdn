import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterMenu from "./footerMenu";

const Footer = () => {
  const dummyData = [
    {
      title: "INFORMATION",
      data: [
        {
          title: "About Us",
          url: "/",
        },
        {
          title: "Business Services",
          url: "/",
        },
        {
          title: "Ownership Governance",
          url: "/",
        },
        {
          title: "Contact Us",
          url: "/",
        },
        {
          title: "Media center",
          url: "/",
        },
      ],
    },
    {
      title: "LEGAL & POLICIES",
      data: [
        {
          title: "Accessibility",
          url: "/",
        },
        {
          title: "Contests & Promotions",
          url: "/",
        },
        {
          title: "Privacy Policy",
          url: "/",
        },
        {
          title: "Terms & Conditions",
          url: "/",
        },
      ],
    },
    {
      title: "EMPLOYMENT",
      data: [
        {
          title: "Careers at The Beer Store",
          url: "/",
        },
        {
          title: "Core Values",
          url: "/",
        },
        {
          title: "Divisions",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="px-5 pb-5 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-5 pt-10">
          <div>
            <a href="">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/TBS_Logo.svg"
                alt=""
                width={85}
                height={65}
              />
            </a>
          </div>
          {dummyData.map(({ title, data }) => (
            <div className="flex flex-col" key={`key${title}`}>
              <FooterMenu title={title} menuList={data as any} />
            </div>
          ))}
          <div className="flex flex-col">
            <h2 className="text-white uppercase font-semibold mb-6  md:text-[14px]  text-[18px] font-[Gotham-Bold]">
              FOLLOW US
            </h2>
            <div>
              <ul className="flex gap-5">
                <li>
                  <a href="#">
                    <Image
                      alt="alive"
                      src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/facebook.svg"
                      width={30}
                      height={30}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      alt="alive"
                      src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/twitter.svg"
                      width={30}
                      height={30}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <Image
                      alt="alive"
                      src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/pinterest.svg"
                      width={30}
                      height={30}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      alt="alive"
                      src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
                      width={30}
                      height={30}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-white uppercase font-semibold  md:text-[14px]  mb-3 text-[18px] font-[Gotham-Bold]">
                DOWNLOAD OUR APP
              </h2>
              <div className="flex flex-col lg:flex-row gap-[15px]">
                <a href="#">
                  <Image
                    alt="alive"
                    src="https://tbsecoms.wpengine.com/wp-content/uploads/2022/08/app-store-small.svg"
                    width={90}
                    height={35}
                    style={{ height: "35px", width: "105px" }}
                  />
                </a>
                <a href="#">
                  <Image
                    alt="alive"
                    src="https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/google-store-small.svg"
                    width={105}
                    height={35}
                    style={{ height: "35px", width: "105px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-5 bg-white opacity-50 " />
        <div className="flex justify-end gap-5">
          <Image
            alt="alive"
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
            width="85"
            height="44"
            style={{ height: "44px", width: "85px" }}
            unoptimized
          />
          <Image
            alt="alive"
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-best-bar-none.20140514.png"
            width="85"
            height="44"
            style={{ height: "44px", width: "85px" }}
            unoptimized
          />
          <Image
            alt="alive"
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-essential-accessibility.png"
            width="85"
            height="44"
            style={{ height: "44px", width: "85px" }}
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;

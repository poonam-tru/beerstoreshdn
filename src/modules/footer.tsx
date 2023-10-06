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
      title: "Information",
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
      title: "Information",
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
      title: "Information",
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
  ];
  return (
    <footer className="container px-5 pb-5 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-5 pt-10">
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
          <h2 className="text-white uppercase font-semibold mb-6">FOLLOW US</h2>
          <div className="flex gap-5">
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
              width="30"
              height="30"
            />
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
              width="30"
              height="30"
            />
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
              width="30"
              height="30"
            />
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
              width="30"
              height="30"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-white uppercase font-semibold mb-3">
              DOWNLOAD OUR APP
            </h2>
            <div className="flex">
              <Image
                alt="alive"
                src="https://tbsecoms.wpengine.com/wp-content/uploads/2022/08/app-store-small.svg"
                width="100"
                height="30"
              />
              <Image
                alt="alive"
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/google-store-small.svg"
                width="100"
                height="30"
              />
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
        />
        <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-best-bar-none.20140514.png"
          width="85"
          height="44"
        />
        <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-essential-accessibility.png"
          width="85"
          height="44"
        />
      </div>
    </footer>
  );
};
export default Footer;

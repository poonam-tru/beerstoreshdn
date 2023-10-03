import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  const dummyData = [
    {
      title: "Information",
      data: [
        " About Us",
        "Business Services",
        "Ownership Governance",
        " Contact Us",
        "Media center",
      ],
    },
    {
      title: "Information",
      data: [
        " About Us",
        "Business Services",
        "Ownership Governance",
        " Contact Us",
        "Media center",
      ],
    },
    {
      title: "Information",
      data: [
        " About Us",
        "Business Services",
        "Ownership Governance",
        " Contact Us",
        "Media center",
      ],
    },
  ];
  return (
    <footer className="px-5 pb-5 bg-black">
      <div className="grid grid-cols-5 pt-10">
        <div>
          <a href="">
            <Image
              src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
              alt=""
              width={200}
              height={30}
            />
          </a>
        </div>
        {dummyData.map(({ title, data }) => (
          <div className="flex flex-col" key={`key${title}`}>
            <h2 className="text-white uppercase font-semibold">{title}</h2>
            <ul>
              {data.map((item) => (
                <li key={`key${item}`}>
                  <a className="text-white font-light" href="">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
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
                width="120"
                height="35"
              />
              <Image
                alt="alive"
                src="https://tbsecoms.wpengine.com/wp-content/uploads/2022/08/app-store-small.svg"
                width="120"
                height="35"
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
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
          width="85"
          height="44"
        />
        <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
          width="85"
          height="44"
        />
      </div>
    </footer>
  );
};
export default Footer;

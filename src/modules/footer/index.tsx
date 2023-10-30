import React from "react";
import { Separator } from "@/components/ui/separator";

import FooterMenu from "../footerMenu";
import Logo from "./logo";
import SocialMedia from "./SocialMedia";
import DownloadApp from "./downloadApp";
import BottomFotter from "./bottomFotter";

const Footer = () => {
  const footerMenuNav = [
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
    {
      title: "INFORMATION FOR BUSINESSES",
      data: [
        {
          title: "Promotional & Advertising",
          url: "/",
        },
        {
          title: "Opportunities",
          url: "/",
        },
      ],
    },
  ];
  return (
    <footer className="md:px-5 px-2 pb-5 bg-black">
      <div className="container">
        <div className="flex gap-2 pt-10">
          <Logo className="hidden md:block px-[15px]" />
          <div className="flex  md:flex-col xl:flex-row flex-col-reverse w-full justify-between">
            <div className="grid grid-cols-1 md:grid-cols-4  ">
              {footerMenuNav.map(({ title, data }) => (
                <div
                  className="flex flex-col px-[15px] mb-[15px]"
                  key={`key${title}`}
                >
                  <FooterMenu title={title} menuList={data as any} />
                </div>
              ))}
            </div>
            <div className="flex flex-col px-[15px] mb-[15px]">
              <div className="flex justify-between w-full  pb-[30px] md:pb-0">
                <Logo className="block md:hidden" />
                <SocialMedia />
              </div>
              <DownloadApp />
            </div>
          </div>
        </div>
        <Separator className="my-5 hidden md:block bg-white opacity-50 " />
        <BottomFotter />
      </div>
    </footer>
  );
};
export default Footer;

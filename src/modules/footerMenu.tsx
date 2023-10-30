"use client";
import * as React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMediaQuery } from "@/lib/mediaChange";

export interface FooterMenuItem {
  title: string;
  url: string;
}

export interface FooterMenuProps {
  title?: React.ReactNode;
  menuList?: FooterMenuItem[];
  children?: React.ReactNode; // Allow additional children
}

const FooterMenu = ({ title, menuList, children }: FooterMenuProps) => {
  const mediaScreen = useMediaQuery("(max-width:767.98px)");
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    if (mediaScreen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [mediaScreen]);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
      <div className="flex items-center justify-between p-0">
        {!mediaScreen && (
          <h4 className=" text-white font-bold uppercase text-[14px] font-sans  lg:text-[18px] mb-[15px] ">
            {title}
          </h4>
        )}
        {mediaScreen && (
          <CollapsibleTrigger asChild>
            <div className="flex flex-1 justify-between py-[16px] border-b border-solid border-[#282828] ">
              <h4 className="  text-white  uppercase xl:text-[18px] md:text-[14px] text:[14px] font-sans font-bold">
                {title}
              </h4>
              {isOpen ? (
                <ChevronDown color="#eaab31" className="h-3 w-3 text-white" />
              ) : (
                <ChevronRight color="#eaab31" className="h-3 w-3 text-white" />
              )}
            </div>
          </CollapsibleTrigger>
        )}
      </div>
      <CollapsibleContent className="CollapsibleContent">
        <ul className="pt-[15px]">
          {menuList?.map((item) => (
            <li key={`key${item.title}`} className="flex py-[5px] md:py-[8px] ">
              <a
                className="leading-tight font-sans font-normal text-white  hover:text-[#d06f1a] text-[14px] md:text-[12px]  xl:text-[14px]"
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
      {/* Render additional children */}
      {children}
    </Collapsible>
  );
};

export default FooterMenu;

"use client";
import { useState } from "react";

interface categorySidebarProps {
  list: any;
}
///Api - functionality

const CategorySidebar = ({ list }: categorySidebarProps) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item: any) => (
          <div className="flex flex-col" key={item.title}>
            <h3 className="text-[16px] pt-[25px] font-sans font-bold">
              {item.title}
            </h3>
            <ul>
              {item.list.map((item: any, idx: any) => (
                <li
                  key={idx}
                  data-active={item === selectedItem}
                  className="cursor-pointer font-sans font-normal py-[15px] text-[#4A4F55] text-[14px] border-b border-solid border-[#d6d6d6] hover:text-[#B95804]"
                  onClick={() => console.log("api")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default CategorySidebar;

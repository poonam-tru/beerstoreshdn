import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function search() {
  return (
    <div className="lg:max-w-[500px] md:max-w-[265px] lg:w-full w-full md:mb-[10px] lg:mb-0 ">
      <Input
        className="bg-white text-[#4A4F55]  h-[40px] 2xl:h-[50px] xl:h-[40px] text-[10px] lg:text-[14px] font-sans font-normal rounded-[50px] py-[8px]  pl-[14px] lg:pl-[28px] pr-[5px]"
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
              className={"w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px]"}
            />
          </Button>
        }
      />
    </div>
  );
}

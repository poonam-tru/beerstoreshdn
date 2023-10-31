import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface bannerHeader {
  title: string;
  children?: React.ReactNode;
  backgroundImage?: string | undefined;
  className?: string | undefined;
}

const BannerHeader = ({
  children,
  title,
  backgroundImage,
  className,
}: bannerHeader) => {
  return (
    <div className={cn("flex flex-row min-h-[385px] relative", className)}>
      {backgroundImage && (
        <div className="flex flex-row flex-1">
          <Image
            alt={title}
            src={backgroundImage}
            width={500}
            height={385}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
          /> 
        </div>
      )}
      <div className="bg-black bg-opacity-30 flex flex-col absolute left-0 h-full right-0 justify-center items-center p-[15px]">
        {title && (
          <h1 className="text-[28px] font-mono sm:text-[38px] md:text-[48px]  text-white">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default BannerHeader;

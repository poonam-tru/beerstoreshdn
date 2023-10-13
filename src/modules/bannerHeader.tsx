import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { relative } from "path";

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
    <div className={cn("flex flex-row min-h-[340px] relative", className)}>
      {backgroundImage && (
        <div className="flex flex-row flex-1">
          <Image
            alt={title}
            src={backgroundImage}
            width={500}
            height={300}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      )}
      <div className="flex flex-col absolute left-0 h-full right-0 justify-center items-center p-[15px]">
        {title && (
          <h1 className="text-[28px] font-[Leviathan-HTF-Black] sm:text-[38px] md:text-[48px]  text-white">
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};

export default BannerHeader;

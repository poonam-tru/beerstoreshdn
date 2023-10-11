import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface bannerHeader {
  title: string;
  bannerContent: React.ReactNode;
  backgroundImage: string;
  className?: string | undefined;
}

const BannerHeader = ({
  bannerContent,
  title,
  backgroundImage,
  className,
}: bannerHeader) => {
  return (
    <div className={cn("flex flex-row min-h-[340px]", className)}>
      <div className="flex flex-row">
        <Image
          alt={title}
          src={backgroundImage}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex absolute left-0, right-0 justify-center items-center">
        <h1 className="text-[48px]  text=[#fff]">{title}</h1>
        {bannerContent}
      </div>
    </div>
  );
};

export default BannerHeader;

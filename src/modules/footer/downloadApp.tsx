import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function downloadApp() {
  return (
    <div className=" w-full  border-y-[1px] border-[#282828] md:border-0   py-[30px]">
      <h2 className="text-white text-center uppercase md:text-left  text-[14px] my-[16px] md:mb-3 md:text-[18px] font-sans font-bold">
        DOWNLOAD OUR APP
      </h2>
      <div className="flex  justify-center md:justify-start gap-[15px]">
        <Link href="#">
          <Image
            alt="alive"
            src="https://tbsecoms.wpengine.com/wp-content/uploads/2022/08/app-store-small.svg"
            width={90}
            height={30}
            className="w-full h-auto"
          />
        </Link>
        <Link href="#">
          <Image
            alt="alive"
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/google-store-small.svg"
            width={102}
            height={30}
            className="w-full h-auto"
          />
        </Link>
      </div>
    </div>
  );
}

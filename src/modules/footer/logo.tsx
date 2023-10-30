import Link from "next/link";
import Image from "next/image";
import React from "react";
export interface Footerlogo {
  className?: string;
}
export default function logo({ className }: Footerlogo) {
  return (
    // <div className="hidden md:block px-[15px]">
    <div className={className}>
      <Link href="/">
        <Image
          src="https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/TBS_Logo.svg"
          alt=""
          width={85}
          height={65}
        />
      </Link>
    </div>
  );
}

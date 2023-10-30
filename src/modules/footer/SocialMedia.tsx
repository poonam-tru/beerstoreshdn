import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function SocialMedia() {
  return (
    <div>
      <h2 className="text-white uppercase mb-[16px]  md:mb-6  md:text-[14px]  text-[18px] font-sans font-bold">
        FOLLOW US
      </h2>
      <ul className="flex gap-1 md:gap-5">
        <li>
          <Link href="#">
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/facebook.svg"
              width={30}
              height={30}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/twitter.svg"
              width={30}
              height={30}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="#">
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/pinterest.svg"
              width={30}
              height={30}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              alt="alive"
              src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/instagram.svg"
              width={30}
              height={30}
              style={{ height: "30px", width: "30px" }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

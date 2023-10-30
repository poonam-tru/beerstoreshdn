import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function logo() {
  return (
    <Link href="/" className="inline-flex">
      <Image
        src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
        alt=""
        width={226}
        height={40}
      />
    </Link>
  );
}

import React from "react";
import Image from "next/image";
export default function bottomFotter() {
  return (
    <div className="flex justify-evenly md:justify-end gap-5 mt-[30px]">
      <Image
        alt="alive"
        src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
        width="85"
        height="44"
      />
      <Image
        alt="alive"
        src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-best-bar-none.20140514.png"
        width="85"
        height="44"
      />
      <Image
        alt="alive"
        src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-essential-accessibility.png"
        width="85"
        height="44"
      />
    </div>
  );
}

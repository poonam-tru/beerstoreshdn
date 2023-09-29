import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="px-5 pb-5 bg-black">
      <div className="grid grid-cols-4 pt-10">
        <div>
          <a href="">
            <Image
              src="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/Logo-new.svg"
              alt=""
              width={200}
              height={30}
            />
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white uppercase font-semibold">Information</h2>
          <ul>
            <li>
              <a className="text-white font-light" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Business Services
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ownership Governance
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Media Center
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ordering Online
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white uppercase font-semibold">Information</h2>
          <ul>
            <li>
              <a className="text-white font-light" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Business Services
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ownership Governance
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Media Center
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ordering Online
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white uppercase font-semibold">Follow Us</h2>
          <ul>
            <li>
              <a className="text-white font-light" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Business Services
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ownership Governance
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Media Center
              </a>
            </li>
            <li>
              <a className="text-white font-light" href="">
                Ordering Online
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="my-5 bg-white opacity-50 " />
      <div className="flex justify-end gap-5">
        <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
          width="85"
          height="44"
        />
         <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
          width="85"
          height="44"
        />
         <Image
          alt="alive"
          src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/logo-arrive-alive-logo.png"
          width="85"
          height="44"
        />
      </div>
    </footer>
  );
};

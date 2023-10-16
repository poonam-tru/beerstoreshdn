"use client";
import BannerHeader from "@/modules/bannerHeader";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const storeFeatures = [
  {
    id: 0,
    title: "In-store Pickup",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/in-store-pick-up.svg",
  },
  {
    id: 1,
    title: "Home Delivery",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/home-delivery.svg",
  },
  {
    id: 2,
    title: "Curbside Pickup",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/curbside-pick-up.svg",
  },
  {
    id: 3,
    title: "Drive-thru",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/drive-thru.svg",
  },
  {
    id: 4,
    title: "Self-Serve Kiosk",
    image: "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/kiosk.svg",
  },
  {
    id: 5,
    title: "Empties Accepted",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg",
  },
  {
    id: 6,
    title: "Kegs",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg",
  },
  {
    id: 7,
    title: "Skip the dishes",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/12/Skip_Logo.svg",
  },
  {
    id: 8,
    title: "Uber Eats",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/06/uber-eats-new1.svg",
  },
  {
    id: 9,
    title: "Insta Cart",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/06/Instacart_Carrot_Black-1-svg.svg",
  },
];

const Locations = () => {
  return (
    <>
      <BannerHeader
        title="Find a Beer Store Location"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/archive-beer-banner.jpg"
      ></BannerHeader>
      <div className="container">
        <div className="flex py-2">
          <div className="basis-1/5">
            <div className="flex items-center space-x-2">
              <Label
                className="text-[#4a4f55] font-normal text-[12px] font-sans"
                htmlFor="airplane-mode"
              >
                All Stores
              </Label>
              <Switch id="airplane-mode" />
              <Label
                className="text-[#4a4f55] font-normal text-[12px] font-sans"
                htmlFor="airplane-mode"
              >
                Online Ordering
              </Label>
            </div>
          </div>
          <div className="basis-4/5">
            <div className="flex">
              <div className="font-sans font-medium mr-[18px] flex-shrink-0 w-[120px]">
                Store Feature:
              </div>
              <div>
                <ul className="flex flex-wrap">
                  {storeFeatures.map((feature) => (
                    <li
                      key={`store_feature${feature.id}`}
                      className="flex items-center mr-[25px] mb-2.5"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={30}
                        height={30}
                        className={"mr-[10px] h-[30px]"}
                      />
                      <span className="text-[#4a4f55] font-normal text-[12px] font-sans ">
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="font-sans font-medium mr-[18px] flex-shrink-0 w-[120px]">
                Map Legend:
              </div>
              <div>
                <ul className="flex flex-wrap">
                  <li className="flex items-center mr-[25px]">
                    <Image
                      src={
                        "https://tbsecomd.wpengine.com/wp-content/uploads/2023/04/online-icon.svg"
                      }
                      alt={"Online ordering available"}
                      width={20}
                      height={20}
                      className={"h-auto mr-[10px]"}
                    />
                    <span className="text-[#4a4f55] font-normal text-[12px] font-sans ">
                      Online ordering available
                    </span>
                  </li>
                  <li className="flex items-center mr-[25px]">
                    <Image
                      src="https://tbsecomd.wpengine.com/wp-content/uploads/2023/04/offline-icon.svg"
                      alt={"Online ordering not available"}
                      width={20}
                      height={20}
                      className={"h-auto mr-[10px]"}
                    />
                    <span className="text-[#4a4f55] font-normal text-[12px] font-sans ">
                      Online ordering not available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d6d6d6]">
        <div className="container max-w-full pl-[145px] pr-0">
          <div className="flex">
            <div className="w-[490px] flex-shrink-0 pr-[30px] pt-[30px]">
              <Card className="flex flex-row p-5 mb-5 rounded-[5px] bg-white">
                <CardHeader className="mr-2.5 flex-shrink-0">
                  <Image
                    src={
                      "https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/offline-icon.svg"
                    }
                    width={30}
                    height={48}
                    alt={"offline"}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-[14px] font-sans font-normal text-[#4A4F55] mb-[5px]">
                    Online ordering not available
                  </CardTitle>
                  <div className="text-[14px] font-sans font-normal text-[#4A4F55] mb-[5px]">
                    <strong className="font-bold">HEARST </strong>- 0 km
                  </div>
                  <div className="text-[14px] font-sans font-normal text-[#4A4F55]">
                    1106 Front St., P0L 1N0
                  </div>
                  <div className="flex gap-x-2.5 mt-5">
                    <Image
                      src={
                        "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg"
                      }
                      width={20}
                      height={30}
                      alt={"offline"}
                      className={"h-[24px]"}
                    />
                    <Image
                      src={
                        "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg"
                      }
                      width={20}
                      height={30}
                      alt={"offline"}
                      className={"h-[25px]"}
                    />
                  </div>
                  <Button
                    asChild
                    className=" mt-5 h-[30px] uppercase w-[140px] font-sans justify-between font-bold leading-normal text-[11px] py-[3px] px-[7px] rounded-[5px]"
                  >
                    <Link href="/">
                      Store Details
                      <ChevronRight width={15} height={26} />
                    </Link>
                  </Button>
                </CardContent>
                <CardFooter className="flex flex-col flex-1 items-end">
                  <Button
                    className="min-w-[90px] h-[30px] uppercase font-sans  font-bold leading-normal text-[11px] py-[3px] px-[7px] rounded-[5px]"
                    variant="secondary"
                  >
                    Select
                  </Button>
                  <Button className="min-w-[90px] bg-white   before:bg-primary mt-2 h-[30px] uppercase font-sans ont-bold leading-normal text-[11px] py-[3px] px-[7px] rounded-[5px]">
                    Direction
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex-1">ff</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;

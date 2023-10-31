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

const storeLocations = [
  {
    id: 1,
    title: "Online ordering not available",
    images: [
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg",
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg",
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/06/Instacart_Carrot_Black-1-svg.svg",
    ],
  },
  {
    id: 2,
    title: "Online ordering not available",
    images: [
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg",
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg",
    ],
  },
  {
    id: 3,
    title: "Online ordering not available",
    images: [
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg",
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg",
    ],
  },
  {
    id: 4,
    title: "Online ordering not available",
    images: [
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/empties-new.svg",
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/08/kegs-small.svg",
    ],
  },
];
const Locations = () => {
  return (
    <>
      <BannerHeader
        title="Find a Beer Store Location"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/archive-beer-banner.jpg"
      ></BannerHeader>
      <div className="container px-[15px] mdtab:px-[45px] 2xl:px-[15px]">
        <div className="flex  flex-col xl:flex-row py-2">
          <div className="basis-full  xl:basis-1/5">
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
          <div className="basis-full  mt-4 xl:mt-0 xl:basis-4/5">
            <div className="flex flex-col md:flex-row">
              <div className="font-sans font-medium max-[767px]:mb-[10px]  text-[14px] mr-[18px] flex-shrink-0 w-[110px]">
                Store Feature:
              </div>
              <div>
                <ul className="flex flex-wrap mdtab:gap-[10px] md:gap-0">
                  {storeFeatures.map((feature) => (
                    <li
                      key={`store_feature${feature.id}`}
                      className="flex w-full xs:basis-3/6 md:basis-3/12 mdtab:basis-1/5  lg:w-auto items-center md:mr-[25px] mb-2.5"
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
            <div className="flex flex-col md:flex-row mt-2">
              <div className="font-sans max-[767px]:mb-2.5 font-medium mr-[18px] text-[14px] flex-shrink-0 w-[110px]">
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
                  <li className="flex items-center mr-[25px] max-[767px]:mt-2.5">
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
      <div className="bg-[#f4f4f4]">
        <div className="container max-w-full pl-0 lg :pl-[45px] 2xl:pl-[145px] pr-0">
          <div className="flex  mdtab:flex-row flex-col-reverse">
            <div className="w-full flex-shrink-0 px-[30px] mdtab:w-[490px] md:pr-[30px] pt-[30px]">
              {storeLocations.map((location) => (
                <Card
                  key={`locations_${location.id}`}
                  className="flex flex-row items-start p-5 mb-5 rounded-[5px] bg-white border border-solid border-[#d6d6d6] shadow-none flex-wrap"
                >
                  <CardHeader className="2xl:mr-2.5 flex-shrink-0 mr-[8px]">
                    <Image
                      src={
                        "https://tbsecomd.wpengine.com/wp-content/themes/Beer-Store/images/offline-icon.svg"
                      }
                      width={30}
                      height={48}
                      alt={"offline"}
                      className={"w-[20px] h-[32px] 2xl:w-[30px] 2xl:h-[48px]"}
                    />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-row max-[480px]:flex-wrap ">
                    <div className="basis-3/4 max-[380px]:basis-full">
                      <CardTitle className="text-[12px] sm:text-[14px] font-sans font-normal text-[#4A4F55] mb-[5px]">
                        {location.title}
                      </CardTitle>
                      <div className="text-[12px] sm:text-[14px] font-sans font-normal text-[#4A4F55] mb-[5px]">
                        <strong className="font-bold">HEARST </strong>- 0 km
                      </div>
                      <div className="text-[12px] sm:text-[14px] font-sans font-normal text-[#4A4F55]">
                        1106 Front St., P0L 1N0
                      </div>
                      <div className="flex gap-x-2.5 mt-5 ">
                        {location.images.map((img, idx) => (
                          <Image
                            key={`location_icon${idx}`}
                            src={img}
                            width={20}
                            height={30}
                            alt={"offline"}
                            className={"h-[24px]"}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="basis-1/4 flex flex-col max-[480px]:flex-row max-[480px]:mt-2.5 items-end max-[480px]:basis-full">
                      <Button
                        className="w-[90px] h-[30px] uppercase font-sans  font-bold leading-normal text-[11px] py-[3px] px-[7px] rounded-[5px] max-[480px]:mr-2.5"
                        // variant="secondary" specify if "Selected"
                      >
                        Select
                      </Button>
                      <Button className="w-[90px] bg-white   before:bg-primary mt-2 h-[30px] uppercase font-sans ont-bold leading-normal text-[11px] py-[3px] px-[7px] rounded-[5px]">
                        Directions
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-row basis-full mt-[15px] 2xl:ml-[40px] ml-[28px]">
                    <Button
                      asChild
                      className="tracking-wide h-[30px] uppercase w-[140px] font-sans justify-between font-bold leading-normal text-[11px] py-[3px] px-[7px] pr-[12px] rounded-[5px]"
                    >
                      <Link href="/">
                        Store Details
                        <ChevronRight width={18} height={24} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex-1">
              <Image
                src="/contact/staticmap.png"
                alt="map"
                width={500}
                height={500}
                className={"w-full h-full object-cover"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;

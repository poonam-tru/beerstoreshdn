"use client";
import InfoCard from "@/modules/infoCard";
import BannerSlider from "../modules/slider";
import ProductCard from "@/modules/productCard";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <BannerSlider></BannerSlider>

      <ProductCard
        title={"test"}
        image={{
          url: "https://cdn.brandfolder.io/DRTYD0A2/as/r424hktcrj8gq58ptcrwxf/1836.png",
          alt: "test",
          width: 200,
          height: 298,
        }}
        buttonText={"Buy Now"}
        badgeText="Sale"
        description={
          <>
            <div className="flex items-center">
              <Image
                src=" https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/bottles-01.svg"
                alt="bottle"
                width={10}
                height={26}
                className={"mr-2"}
              />
              <p className="text-[#4a4f55]">6 X Bottle 341 ml</p>
            </div>
            <Separator className="bg-gray-500 opacity-50 h-px my-2" />
            <div className="flex">
              <span className="text-[##4a4f57]">Price:</span>
              <span className="text-[#c00] font-medium mr-2">$45.00</span>
              <span className="line-through text-[##4a4f57]">$15.95</span>
            </div>
          </>
        }
      />

      <InfoCard
        title={"test"}
        image={{
          url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
          alt: "test",
          width: 200,
          height: 298,
        }}
        buttonText={"Read More"}
        badgeText="Sale"
        description={
          "Whether you’re seeing a show at a small club or a big ... "
        }
      />
    </>
  );
};

export default Home;

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

      <section className="bg-white py-[70px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-6">
            <InfoCard
              className="flex-row-reverse"
              title={"some day pickup or delivery"}
              image={{
                url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
                alt: "test",
                width: 200,
                height: 298,
              }}
              buttonText={"Read More"}
            />
            <InfoCard
              className="flex-row-reverse"
              title={"ultra great deal"}
              image={{
                url: "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
                alt: "test",
                width: 200,
                height: 298,
              }}
              buttonText={"Read More"}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4]">
        <div className="flex flex-col text-center">
          <h2 className=" text-[30px]">
            Shop Sale Prices and Limited Time Offers
          </h2>
        </div>
        <div className="container">Content here</div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> Discover </p>
          <h2 className=" text-[30px]">New Beers</h2>
        </div>
        <div className="container">Content here</div>
      </section>
      <section className="bg-[#F4F4F4]">
        <div className="flex flex-col text-center">
          <h2 className=" text-[30px]">
            Shop Sale Prices and Limited Time Offers
          </h2>
        </div>
        <div className="container">Content here</div>
      </section>
      <section className="bg-white">
        <div className="flex flex-col text-center">
          <p className="uppercase  text-[16px]"> More From </p>
          <h2 className=" text-[30px]">The Beer Store</h2>
        </div>
        <div className="container">Content here</div>
      </section>
    </>
  );
};

export default Home;

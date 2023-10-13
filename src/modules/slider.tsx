import React, { Children } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
const dumyData = [
  {
    url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  },
  {
    url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  },

  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
  // {
  //   url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  // },
];
const bgImage = {
  banner1:
    "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/JulyHiringCampaign-DesktopBG.jpg",
  banner2:
    "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner1-mob.jpg",
  banner3:
    "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner2-mob.jpg",
  banner4:
    "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/discovery-cylce-8-desktop.png",
  banner5:
    "https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/stay-bg.png",
  bannerfe2:
    "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/molson-candian.png",
  bannerfe4:
    "https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/brand-banner-more-value.png",
  bannerfe6:
    "https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/Hiring.png",
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute right-[4%] top-[calc(50%-30px)] "}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={
          "https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/next-light.svg"
        }
        height={60}
        width={60}
        className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
        alt="kkk"
      />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute left-[4%] top-[calc(50%-30px)] z-10"}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={
          "https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/prev-light.svg"
        }
        height={60}
        width={60}
        alt="kk"
        className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
      />
    </div>
  );
}
export default function slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const inSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider className="h-500" {...settings}>
      {/* slider1 */}
      <div className="bg-center relative bg-fixed h-500">
        <div className="h-full relative  flex items-center lg:flex-row flex-col md:items-center">
          <div className="flex h-full mx-auto my-0  absolute ps-[5%] lg:ps-[10%]">
            <div className="flex flex-col items-end text-left justify-center ps-[10%] pe-[5%]">
              <div className="text-white ">
                <h1 className=" xl:text-70px md:text-[40px] font-[Leviathan-HTF-Black-Italic]">
                  Holiday Hour
                </h1>
                <p className="xl:text-24px leading-[38px] lg:text-[24px] p-[10px] font-[Gotham-Bold]">
                  All stores will be closed on October 9<sup>th</sup> for the
                  Thanksgiving Holiday
                </p>
                <div className="mt-[20px]">
                  <Button className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold] rounded-s-full rounded-e-full h-[50px]">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={bgImage.banner1}
            alt=""
            width={600}
            height={300}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
      {/* slider2 */}
      <div className="bg-center relative bg-fixed h-500">
        <div className="h-full relative  flex items-center mx-auto lg:flex-row flex-col md:items-center justify-center">
          <div className="h-full flex  mx-auto my-0  flex-col sm:flex-row   md:items-center justify-end md:justify-center   absolute top-0 bottom-0 right-0 left-0 container">
            <div className="basics-1/2 h-ful flex flex-col justify-center text-center  md:left-[100px]">
              <p className="xl:text-82px text-white text-[30px] sm:text-[45px] sm:leading-[45px] xl:leading-[82px] font-[Leviathan-HTF-Black]">
                <span className="block xl:text-78px text-white text-[25px] sm:text-[38px] sm:leading-[38px] xl:leading-[78px]">
                  {" "}
                  FALL INTO
                </span>
                SAVINGS
              </p>
              <div className="mt-[20px]">
                <Button
                  variant={"secondary"}
                  className="px-[40px] py-[11px] text-[14px] rounded-e-full rounded-s-full font-[Gotham-Bold] h-[50px]"
                >
                  BROWSE TODAY
                </Button>
              </div>
            </div>
            <div className="basics-1/2 h-full flex  items-end overflow-hidden ">
              <Image
                src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/molson-candian.png"
                alt=""
                width={600}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <Image
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/bg-11.jpg"
            alt=""
            width={600}
            height={300}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
      {/* slider 3 */}
      <div className="bg-center relative bg-fixed h-500">
        <div className="absloute top-0 mx-auto">
          <div className="flex justify-center items-center flex-col mx-auto  px-[15px] h-full w-full absolute top-0">
            <p className="xl:text-48px sm:text-[28px]  font-[Leviathan-HTF-Black]">
              DISCOVERY CENTER
            </p>

            <div className="flex flex-wrap justify-center  max-w-4xl	">
              {dumyData.map((itm, idx) => (
                <div key={`images${idx}`} className="m-[10px]">
                  <Image src={itm.url} width="160" height="145" alt="image" />
                </div>
              ))}
            </div>

            <div className="mt-[20px]">
              <Button
                variant={"secondary"}
                className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold]   rounded-e-full rounded-s-full h-[50px]"
              >
                SHOP
              </Button>
            </div>
          </div>
          <Image
            src={bgImage.banner3}
            alt=""
            width={600}
            height={300}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>

      <div className="bg-center relative bg-fixed h-500">
        <div className="h-full relative  flex items-center mx-auto lg:flex-row flex-col md:items-center justify-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2  absolute top-0  bottom-0 w-full container">
            <div className="md:w-1/2 flex flex-col justify-center text-center  md:left-[100px]">
              <p className="xl:text-72px  sm:text-[45px] sm:leading-[45px] xl:leading-[72px] font-[Leviathan-HTF-Black]">
                <span className="block"> MORE VALUE</span>
                MORE CONVENIENCE
              </p>
              <div className="mt-[20px]">
                <Button
                  variant={"secondary"}
                  className="px-[40px] py-[11px] text-[14px] rounded-e-full rounded-s-full font-[Gotham-Bold] h-[50px]"
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex relative md:items-end justify-center ">
              <div className="w-[50%] md:w-full">
                <Image
                  src={bgImage.bannerfe4}
                  alt=""
                  width={600}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <Image
            src={bgImage.banner4}
            alt=""
            width={600}
            height={300}
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
      {/* bNNER 5 */}
      <div className="bg-revert bg-fixed h-500 bg-no-repeat bg-cover bg-banner-bg-5">
        <div className=" flex flex-col justify-center  h-full items-center container mx-auto my-0 px-[15px] text-center ">
          <div className="max-w-4xl relative">
            <Image
              src={
                "https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/stay-text.png"
              }
              width={950}
              height={500}
              alt="image"
              style={{ width: "100%", height: "auto" }}
              className="bg-cover"
            />
            <div className="text-end me-12 absolute bottom-0 right-0">
              <Button
                variant={"secondary"}
                className="px-[40px] py-[11px]  text-[14px] font-[Gotham-Bold] rounded-e-full rounded-s-full  h-[50px]"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* banner 6 */}
      <div className="bg-center bg-fixed h-500 bg-no-repeat bg-cover bg-black">
        <div className="h-full flex  mx-auto my-0   md:items-center justify-center flex-col md:flex-row ps-[5%] md:ps-[10%]">
          <div className="md:w-1/2 sm:w-full flex flex-col justify-center text-start  ">
            <p className="2xl:text-73px 2xl:leading-[84px]  xl:text-[62px] xl:leading-[72px] lg:text-[34px] sm:leading-[45px] text-white font-[Leviathan-HTF-Black]">
              <span className="block text-white"> WE LOVE BEER</span>
              DO YOU?
            </p>
            <p className="md:text-24px lg:text-[28px] text-[18px] text-white font-[Gotham-Bold]">
              If you share our passion for all things beer and align with our
              core values of being a socially and environmentally responsible
              organization, Apply Today!
            </p>
            <div className="py-[20px]">
              <Button className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold]  rounded-e-full rounded-s-full h-[50px]">
                BROWSE TODAY
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 overflow-hidden">
            <Image
              src={bgImage.bannerfe6}
              alt=""
              width={600}
              height={300}
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        </div>
      </div>
    </Slider>
  );
}

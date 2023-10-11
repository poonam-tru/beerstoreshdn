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
    "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/JulyHiringCampaign-DesktopBG.jpg')",
  banner2:
    "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner1-mob.jpg')",
  banner3:
    "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner2-mob.jpg')",
  banner4:
    "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/discovery-cylce-8-desktop.png')",
  banner5:
    "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/stay-bg.png')",
  bannerfe2:
    "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/molson-candian.png')",
  bannerfe4:
    "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/brand-banner-more-value.png')",
  bannerfe6:
    "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/Hiring.png')",
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
  const insideSettings = {
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

  return (
    <Slider className="h-500" {...settings}>
      {/* slider1 */}
      <div
        className={`bg-center bg-fixed bg-no-repeat bg-cover h-500 bg-banner-bg-1`}
      >
        <div className="flex h-full container mx-auto my-0 ">
          <div className="flex flex-col items-end text-left justify-center ps-[10%] pe-[5%]">
            <div className="text-white ">
              <h1 className=" xl:text-70px md:text-[40px] font-[Leviathan-HTF-Black-Italic]">
                Holiday Hour
              </h1>
              <text className="xl:text-24px leading-[38px] lg:text-[24px] p-[10px] font-[Gotham-Bold]">
                All stores will be closed on October 9<sup>th</sup> for the
                Thanksgiving Holiday
              </text>
              <div className="mt-[20px]">
                <Button className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold] rounded-s-full rounded-e-full text-black bg-[#f4b233] h-[50px]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider2 */}
      <div className="bg-center bg-fixed h-500 bg-no-repeat bg-cover bg-banner-bg-2">
        <div className="h-full flex container items-center mx-auto my-0 px-[15px] lg:flex-row flex-col md:items-center justify-center">
          <div className="md:w-1/2 flex flex-col justify-center text-center relative md:left-[100px]">
            <text className="xl:text-82px sm:text-[45px] sm:leading-[45px] xl:leading-[82px] font-[Leviathan-HTF-Black]">
              <span className="block"> ULTRA</span>
              GREAT DEALS
            </text>
            <div className="mt-[20px]">
              <Button className="px-[40px] py-[11px] text-[14px] rounded-e-full rounded-s-full bg-black text-white font-[Gotham-Bold] h-[50px]">
                BROWSE TODAY
              </Button>
            </div>
          </div>

          <div className="sm:w-1/2 w-1/2 h-1/2 md:h-full bg-banner-fe-2 bg-center bg-fixed bg-no-repeat bg-cover z-10"></div>
        </div>
      </div>
      {/* slider 3 */}
      <div className="bg-center h-500 bg-fixed bg-no-repeat bg-cover bg-banner-bg-3">
        <div className="container flex flex-col justify-center items-center  mx-auto my-0 px-[15px] h-full">
          <div>
            <text className="xl:text-48px sm:text-[28px]  font-[Leviathan-HTF-Black]">
              DISCOVERY CENTER
            </text>
          </div>
          <div className="flex flex-wrap justify-center max-w-4xl	">
            {dumyData.map((itm, idx) => (
              <div key={`images${idx}`} className="mx-2.5 my-2.5">
                <Image src={itm.url} width="160" height="145" alt="image" />
              </div>
            ))}
          </div>
          <div>
            <div className="mt-[20px]">
              <Button className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold]   rounded-e-full rounded-s-full bg-black text-white h-[50px]">
                SHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* sllider 4 */}
      <div className="bg-center bg-fixed bg-no-repeat bg-cover h-500 bg-banner-bg-4">
        <div className="h-full flex items-center justify-center container mx-auto my-0 md:flex-row flex-col md:items-center md:justify-center">
          <div className="md:w-1/2  flex flex-col  justify-center text-center relative md:left-[60px]">
            <text className="xl:text-82px xl:leading-[82px] sm:text-[40px] sm:leading-[40px]   font-[Leviathan-HTF-Black]">
              <span className="block"> More value</span>
              <span className="block"> More Convenience</span>
            </text>
            <div className="mt-[35px] ">
              <Button className="px-[40px] py-[11px]  text-[14px] font-[Gotham-Bold]   rounded-e-full rounded-s-full bg-black text-white h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </div>

          <div className="sm:w-1/2 justify-center h-1/2 sm:h-full bg-contain bg-banner-fe-4 bg-center md:bg-bottom bg-fixed bg-no-repeat  z-10"></div>
        </div>
      </div>
      {/* bNNER 5 */}
      <div className="bg-revert bg-fixed h-500 bg-no-repeat bg-cover bg-banner-bg-5">
        <div className=" flex flex-col justify-center  h-full items-center container mx-auto my-0 px-[15px] text-center ">
          <div className="max-w-4xl">
            <Image
              src={
                "https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/stay-text.png"
              }
              width={950}
              height={500}
              alt="image"
              className="bg-cover"
            />
            <div className="text-end me-12">
              <Button className="px-[40px] py-[11px]  text-[14px] font-[Gotham-Bold] rounded-e-full rounded-s-full  bg-black text-white h-[50px]">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* banner 6 */}
      <div className="bg-center bg-fixed h-500 bg-no-repeat bg-cover bg-black">
        <div className="h-full flex  mx-auto my-0   md:items-center justify-center flex-col md:flex-row ps-[10%]">
          <div className="md:w-1/2 sm:w-full flex flex-col justify-center text-start  ">
            <text className="2xl:text-73px 2xl:leading-[84px]  xl:text-[62px] xl:leading-[72px] sm:text-[25px] sm:leading-[45px] text-white font-[Leviathan-HTF-Black]">
              <span className="block text-white"> WE LOVE BEER</span>
              DO YOU?
            </text>
            <text className="md:text-28px text-[14px] text-white font-[Gotham-Bold]">
              If you share our passion for all things beer and align with our
              core values of being a socially and environmentally responsible
              organization, Apply Today!
            </text>
            <div className="py-[20px]">
              <Button className="px-[40px] py-[11px] text-[14px] font-[Gotham-Bold]  rounded-e-full rounded-s-full text-black bg-[#f4b233] h-[50px]">
                BROWSE TODAY
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 sm:w-full h-full bg-banner-fe-6 bg-center bg-no-repeat bg-cover z-10"></div>
        </div>
      </div>
    </Slider>
  );
}

import React from "react";
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
  {
    url: "https://cdn.brandfolder.io/DRTYD0A2/as/qbehsd-6pftv4-6mx8ot/2388.png?position=1",
  },
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
      className={"absolute right-[130px] top-[calc(50%-30px)]"}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        src={
          "https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/next-light.svg"
        }
        height={60}
        width={60}
        alt="kkk"
      />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"absolute left-[130px] top-[calc(50%-30px)] z-10"}
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
          slidesToShow: 4,
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
          <div className="flex h-full">
            <div className=" w-1/2 flex flex-col items-end text-left justify-center">
              <div>
                <h1 className="text-5xl text-70px">Holiday Hour</h1>
                <text className="text-28px leading-[38px] p-[10px]">
                  <span className="block">
                    All stores will be closed on October 9<sup>th</sup> for the
                  </span>
                  Thanksgiving Holiday
                </text>
                <div className="mt-[20px]">
                  <Button  className="px-2.5 py-1 rounded-s-full rounded-e-full  bg-white">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider2 */}
        <div className="bg-center bg-fixed h-500 bg-no-repeat bg-cover bg-banner-bg-2">
          <div className="h-full flex  items-center justify-center">
            <div className="w-1/2 flex flex-col justify-center text-center relative left-[100px]">
              <text className="text-112px leading-[122px] ">
                <span className="block"> ULTRA</span>
                GREAT DEALS
              </text>
              <div className="mt-[37px]">
                <a className="px-2.5 py-1  rounded-e-full rounded-s-full bg-white">
                  BROWSE TODAY
                </a>
              </div>
            </div>

            <div className="w-1/2 h-full bg-banner-fe-2 bg-center bg-fixed bg-no-repeat bg-cover z-10"></div>
          </div>
        </div>
        {/* slider 3 */}
        <div className="bg-center h-500 bg-fixed bg-no-repeat bg-cover bg-banner-bg-3">
          <div className="container flex flex-col justify-center items-center h-full">
            <div>
              <text className="text-48px">DISCOVERY CENTER</text>
            </div>
            <div className="flex flex-wrap justify-center max-w-4xl	">
              {dumyData.map((itm, idx) => (
                <div key={`images${idx}`} className="mx-2.5 my-2.5">
                  <Image src={itm.url} width="160" height="145" alt="image" />
                </div>
              ))}
            </div>
            <div>
              <div>
                <a className="px-2.5 py-1  rounded-e-full rounded-s-full bg-white">
                  SHOP
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* sllider 4 */}
        <div className="bg-center bg-fixed bg-no-repeat bg-cover h-500 bg-banner-bg-4">
          <div className="h-full flex  items-center justify-center">
            <div className="w-1/2 flex flex-col justify-center text-center relative left-[60px]">
              <text className="text-82px leading-[82px]">
                <span className="block"> More value</span>
                <span className="block"> More Convenience</span>
                
              </text>
              <div className="mt-[35px] ">
                <a className="px-2.5  py-1  rounded-e-full rounded-s-full bg-white">
                  BROWSE TODAY
                </a>
              </div>
            </div>

            <div className="w-1/2 h-full bg-banner-fe-4 bg-bottom bg-fixed bg-no-repeat  z-10"></div>
          </div>
        </div>
        {/* bNNER 5 */}
        <div className="bg-revert bg-fixed h-500 bg-no-repeat bg-cover bg-banner-bg-5">
          <div className=" flex flex-col  h-full items-center text-center ">
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
                <a className="px-2.5 py-1  rounded-e-full rounded-s-full bg-white">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* banner 6 */}
        <div className="bg-center bg-fixed h-500 bg-no-repeat bg-cover bg-black">
          <div className="h-full flex  items-center justify-center  ps-36">
            <div className="w-1/2 flex flex-col justify-center text-start  ">
              <text className="text-73px leading-[84px] text-white">
                <span className="block text-white"> WE LOVE BEER</span>
                DO YOU?
              </text>
              <text className="text-28px text-white">
                If you share our passion for all things beer and align with our
                core values of being a socially and environmentally responsible
                organization, Apply Today!
              </text>
              <div>
                <a className="px-2.5 py-1  rounded-e-full rounded-s-full bg-white">
                  BROWSE TODAY
                </a>
              </div>
            </div>

            <div className="relative right-8 w-1/2 h-full bg-banner-fe-6 bg-center bg-fixed bg-no-repeat bg-cover z-10"></div>
          </div>
        </div>
      </Slider>
  
  );
}

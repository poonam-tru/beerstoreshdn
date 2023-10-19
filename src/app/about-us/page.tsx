"use client";
import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Minus, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const aboutUsList = [
  {
    title: "About Us",
    listItems: [
      "Did You Know?",
      "  Accessibility",
      "Operational Report",
      " Ombudsman",
      "  Meet New Beer Store",
      " Upcoming Openings",
      " Meet the President",
      "Contest Winners",
      "Online Ordering FAQ",
      "Media Centre",
      "Contact Us",
    ],
  },
  {
    title: "Careers",
    listItems: [
      "Careers at The Beer Store",
      "Core Values",
      "Divisions",
      "DEIB",
    ],
  },
  {
    title: "Environmental Leadership",
    listItems: [
      "Overview",
      "Stewardship Report",
      "Every Container Counts",
      "*NEW* Returning Empties",
      "Ontario Deposit Return Program (ODRP)",
      "Awards & Recognition",
    ],
  },
  {
    title: "Social Responsibility",
    listItems: ["Responsibility Programs", "Alcohol Retailing Deregulation"],
  },
  {
    title: "Community Involvement",
    listItems: [
      " Community Programs",
      " Disability Community Involvement",
      "Organizing a Bottle Drive",
      "Community Donation Drive",
    ],
  },
  {
    title: "Licensees",
    listItems: [
      "Licensees",
      " Inventory Levels",
      "Ordering",
      "PickUp Orders",
      " Delivery",
      " Prices & Surcharges",
      "Payment Options",
      " Deposit Returns",
      "Contact Info",
    ],
  },
  {
    title: "Retail Partners Program",
    listItems: [
      "Inventory Levels",
      " PickUp Orders",
      "Delivery",
      "Prices & Surcharges",
      " Payment Options",
      "Deposit Returns",
      "Contact Info",
      " Manuals and Forms",
    ],
  },
  {
    title: "Ownership",
    listItems: [
      " Ownership Governance",
      " Open Ownership",
      "Governance",
      "Corporate Policy & Financial Information",
    ],
  },
  {
    title: "Draught Services",
    listItems: [
      "About Draught Services",
      "Keg Sizing",
      " Ordering Information",
      "Contact Info",
    ],
  },
];
const cardList = [
  {
    id: 1,
    title: "Working at the Beer Store",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2019/05/career_about.png",
    description:
      "If you’re passionate and love a fast paced environment, then working at the Beer Store is for you! ",
    buttonText: "Joining the Beer Store team",
  },
  {
    id: 2,
    title: "Green before Green was cool",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/about2.jpg",
    description:
      "We’re very proud of our award-winning beer container return system!    ",
    buttonText: "The Ontario Deposit Returns Program ",
  },
];

const cardListdeatil = [
  {
    id: 1,
    title: "Environmental Leadership",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/about3.jpg",
    description:
      "In October of 2019, the Four Billionth liquor container was returned to the Beer Store under the Bag It Back program — the highly successful deposit return program for wine, spirit and beer containers sold through LCBO and Ontario winery stores. ",
    buttonText: "Read more about our Environmental Programs ",
  },
  {
    id: 2,
    title: "Social Responsibility",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/about4.jpg",
    description:
      "We take corporate social responsibility seriously, and make sure that every beer we sell is a responsible sale — whether it’s through our WeID 25 program or refusing to sell to intoxicated customers. In 2018, we challenged and/or refused service to roughly 3,000,000 individuals at our retail locations.",
    buttonText: "Read more about our Social Responsibility Programs",
  },
];
const newsList = [
  {
    id: 1,
    title: "2020 Stewardship Report",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2021/04/StewardshipReport2020_Web-2.jpg",
    description: "April 26, 2021 ",
  },
  {
    id: 2,
    title: "The Beer Store Welcomes C...",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2020/11/Covidposting_ArticleArchive.jpg",
    description: "January 26, 2021",
  },
  {
    id: 2,
    title: "TBS Response to the City ...",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2020/11/Covidposting_ArticleArchive.jpg",
    description: "November 24, 2020 ",
  },
];
const AboutUs = () => {
  const beerStoreSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <BannerHeader
        title="About Us"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout>
        <SidebarLayout bordered>
          <div className="py-[40px] pr-[15px] lg:pr-[30px] ">
            <Accordion type="single" collapsible className="w-full">
              <>
                {aboutUsList.map((item) => (
                  <AccordionItem
                    value={item.title}
                    key={`aboutus_item${item.title}`}
                  >
                    <AccordionTrigger className="text-left py-[25px] hover:no-underline text-[14px] font-sans  font-bold">
                      {item.title}
                      <Plus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=open]:hidden" />
                      <Minus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=closed]:hidden" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <>
                        {item.listItems.map((item) => (
                          <a
                            href="#"
                            className="flex text-[#4A4F55] hover:text-[#D06F1A] hover:bg-[#f4f4f4]   px-[5px] py-[3px]  text-[12px] font-sans  font-normal"
                            key={`key_${item}`}
                          >
                            {item}
                          </a>
                        ))}
                      </>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </>
            </Accordion>
          </div>
        </SidebarLayout>
        <ContentLayout>
          <div className="flex flex-col py-[60px] px-[15px]  md:pl-[60px] lg:pl-[80px]">
            <div className="flex flex-col md:flex-row gap-[30px]">
              {cardList.map((card) => (
                <div className="basis-2/4" key={`${card.title}`}>
                  <Card className="h-full rounded-[5px] overflow-hidden flex flex-col shadow-none">
                    <CardHeader>
                      <Image
                        src={card?.image}
                        width={300}
                        height={200}
                        alt={card?.title}
                        className="w-full object-cover m-h-[240px]"
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col p-[30px] flex-grow ">
                      {card.title && (
                        <CardTitle className="text-[20px] font-sans  font-bold mb-[15px] leading-[1.1]">
                          {card.title}
                        </CardTitle>
                      )}
                      {card.description && (
                        <CardDescription className="text-[#4a4f55] text-[14px] font-sans  font-normal mb-[30px]">
                          {card.description}
                        </CardDescription>
                      )}
                      {card.buttonText && (
                        <div className="flex md:self-end mt-auto">
                          <Button
                            asChild
                            className="h-auto leading-normal text-[10px] font-sans  font-bold py-[3px] px-[7px] rounded-[5px] uppercase"
                          >
                            <Link href="/">
                              {card.buttonText}{" "}
                              <ChevronRight width={20} height={26} />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-[#f4f4f4] border-[#e2e2e2] border-solid border rounded-[2px] p-[40px] mt-[40px] md:mt-[50px]">
              <h2 className="text-[24px] f md:text-[28px] font-mono tracking-[0.38px] font-Bold mb-2">
                Time-Tested, Beer-Lover Approved
              </h2>
              <p className="text-[#4A4F55] ">
                Becoming experts on beer doesn’t happen overnight. We’ve been in
                business since 1927 and we’re owned by 30 Ontario-based brewers.
                The Beer Store employs 7,000 hard-working Ontarians with
                well-paying full and part-time jobs.
              </p>
              <p className="text-[#4A4F55] mt-2.5">
                There’s no other team of beer experts who live and love all
                things beer as much as we do. We love beer as much as you — so
                you know we’ll always be dedicated to bringing you your
                favourite brands from brewers around the world and offer tips on
                how to enjoy them responsibly. As customer, you can choose from
                more than 800 beer brands, in over 440 retail stores, from 200
                brewers around the world.
              </p>
              <h2 className="text-[20px] md:text-[24px] font-sans font-bold mt-[20px] mb-0">
                Facts and Figures
              </h2>
              <p className="text-[#4A4F55] mt-[10px] text-[14px] font-sans  font-normal">
                The Beer Store was established in 1927, which means we’ve been
                around longer than the Internet. And television. And a lot of
                other things (probably even you!).
              </p>
              <p className="text-[#4A4F55] mt-[10px] text-[14px] font-sans  font-normal">
                Here’s something for the number crunchers to chew on: We operate
                over 440 retail stores, serve just under 18,000 licensed
                customers, 671 government-owned LCBO retail locations, 327
                retail partners and LCO convenience stores, and 446 grocery
                stores selling beer/wine/cider.
              </p>
              <div className="flex mt-[25px]">
                <Button
                  asChild
                  className="h-[35px] font-sans font-bold text-[14px] py-[3px] px-[7px] rounded-[5px] uppercase"
                >
                  <Link href="/">
                    Media Contact <ChevronRight width={20} height={26} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[30px] mt-[40px] md:mt-[60px]">
              {cardListdeatil.map((card) => (
                <div className="basis-2/4" key={`${card.title}`}>
                  <Card className="h-full rounded-[5px] overflow-hidden flex flex-col border-none shadow-none">
                    <CardHeader>
                      {card.title && (
                        <CardTitle className="text-[24px] font-sans  font-bold  mb-[25px] leading-[1.1]">
                          {card.title}
                        </CardTitle>
                      )}
                      <Image
                        src={card?.image}
                        width={300}
                        height={200}
                        alt={card?.title}
                        className="w-full object-cover m-h-[240px] rounded-[5px]"
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col pt-[20px] pb-[40px] flex-grow ">
                      {card.description && (
                        <CardDescription className="text-[#4a4f55] text-[14px] font-sans  font-normal  mb-[30px]">
                          {card.description}
                        </CardDescription>
                      )}
                      {card.buttonText && (
                        <div className="flex self-end mt-auto">
                          <Button
                            asChild
                            className="h-auto leading-normal text-[10px] font-sans  font-bold py-[3px] px-[7px] rounded-[5px] uppercase"
                          >
                            <Link href="/">
                              {card.buttonText}{" "}
                              <ChevronRight width={20} height={26} />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <Separator className="bg-[#e2e2e2] opacity-50 h-px mb-[60px]" />
            <h2 className="text-[20px] md:text-[22px] lg:text-[30px]">
              In the News
            </h2>
            <div className="block md:flex-row gap-[30px] slider-news-list">
              <Slider {...beerStoreSliderSettings}>
                {newsList.map((news) => (
                  <div key={`${news.title}`} className="px-[15px]">
                    <Card className="rounded-[6px] min-h-[170px] basis-1/2 flex">
                      <div className="flex h-[inherit]">
                        <div className="basis-32 h-full">
                          <Image
                            src={news.image}
                            width={200}
                            height={200}
                            alt={news.image}
                            className="w-full rounded-[5px] h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between items-stretch basis-1/2 p-[10px]">
                          <h3 className="text-[14px] font-sans font-bold tracking-[0.14px]">
                            {news.title}
                          </h3>
                          <p className="text-[14px] font-sans  font-normal text-[#4A4F55]">
                            {news.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default AboutUs;

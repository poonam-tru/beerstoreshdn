import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import BannerHeader from "@/modules/bannerHeader";
import ContainerLayout from "@/modules/containerLayout";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const sidebarList = [
  {
    title: " By Category",

    list: [
      "Articles",
      "Beer & Food Pairing",
      " Beer 101",
      " Checklists",
      "Party Planning",
      "Recipe Collections",
    ],
  },
  {
    title: "By Season",
    list: ["Fall", "Spring", "Summer", "Winter"],
  },
  {
    title: "By Occasions",
    list: [
      "Cottaging Guide",
      "Halloween",
      "Holiday",
      "Thanksgiving",
      "Valentines Day",
    ],
  },
];
const articleList = [
  {
    title: "What is stout?",
    description: "Whether you’re a seasoned stout enthusiast or new to this...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/10/stout-beer-archive.jpg",
    category: "Articles",
  },
  {
    title: "What beer suits your concert style?",
    description: "Whether you’re seeing a show at a small club or...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer_concert_style_pairings-archive.jpg",
    category: "Beer & Food Pairing	",
  },
  {
    title: "What is amber ale?",
    description: "Amber ale (perfect in any season) is the beer for...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/what-is-amber-ale-archive.jpg",
    category: "Articles",
  },
  {
    title: "7 beer myths, busted",
    description:
      "Ever wondered whether beer really tastes better from a bottle,...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/beer-myths-busted-archive.jpg",
    category: "Article",
  },
  {
    title: "What is sour beer?",
    description:
      "Tart, pungent and funky? Despite what you thought you knew...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/09/sour-beer-archive.jpg",
    category: "Article",
  },
  {
    title: "How does beer get carbonated?",
    description: "Much of what you love most about beer is ultimately...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2023/08/beer-carbonation-archive.jpg",
    category: "Articles",
  },
];
const AboutUs = () => {
  return (
    <>
      <BannerHeader
        title="Beer &amp; Occasions"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2019/10/archive-article-banner.jpg"
      />
      <ContainerLayout
        bordered={false}
        sidebarContent={
          <div className="flex flex-col pt-[40px] pr-[15px]">
            <h2 className="text-[24px]">Sort by</h2>
            {sidebarList.map((item) => (
              <div className="flex flex-col" key={`${item.title}`}>
                <h3 className="text-[16px] py-[25px]">{item.title}</h3>
                <ul>
                  {item?.list.map((item, idx) => (
                    <li
                      key={`${idx}`}
                      className="cursor-pointer py-[15px] text-[#4A4F55] text-[14px] border-b border-solid border-[#d6d6d6] hover:text-[#B95804]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
        content={
          <div className="grid grid-cols-3 gap-[30px] py-[40px] pl-[40px]">
            {articleList.map((article) => (
              <div className="basis-1/3" key={`${article.title}`}>
                <Card
                  className={
                    " flex h-full flex-col border border-solid rounded-[10px] relative overflow-hidden"
                  }
                >
                  <CardHeader>
                    {article?.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    )}
                  </CardHeader>

                  <CardContent className="flex flex-col p-[20px] h-full">
                    {article.title && (
                      <CardTitle className="mb-4">{article.title}</CardTitle>
                    )}
                    {article.description && (
                      <CardDescription className="mb-4">
                        {article.description}
                      </CardDescription>
                    )}
                    {article.category && (
                      <Badge className=" bg-white rounded-[3px] uppercase text-black hover:bg-White px-2 py-1 leading-4 justify-center absolute left-4 top-4">
                        {article.category}
                      </Badge>
                    )}
                    <CardFooter className="flex self-start mt-auto">
                      <Button
                        asChild
                        className="h-[30px] text-[10px] py-[3px] px-[7px] rounded-[5px] uppercase"
                      >
                        <Link href="/">
                          Learn More
                          <ChevronRight width={15} height={31} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        }
      />
    </>
  );
};

export default AboutUs;
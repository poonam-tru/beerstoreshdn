import { Button } from "@/components/ui/button";

import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import ArticleCard from "@/modules/articleCard";
import CategorySidebar from "@/modules/categorySidebar";

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
const Articles = () => {
  return (
    <>
      <BannerHeader
        title="Beer &amp; Occasions"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2019/10/archive-article-banner.jpg"
      >
        <div className="relative max-w-4xl w-full mt-[20px] sm:mt-[48px]">
          <Search className="absolute top-[50%] translate-y-[-50%] left-3 text-[#4A4F55]" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="border-none pl-[50px] py-[10px] h-[45px] md:h-[55px] pr-4 bg-white rounded-[100px] placeholder:text-[#4A4F55] "
          />
          <Button className="px-3 py-2 uppercase text-[14px] h-[45px]  sm:text-[18px] absolute right-0 top-0 md:h-[55px] rounded-r-[100px] w-[100px] sm:w-[170px]">
            Search
          </Button>
        </div>
      </BannerHeader>
      <ContainerLayout>
        <SidebarLayout bordered={false}>
          <div className="flex flex-col py-[60px] pr-[30px]">
            <h2 className="text-[24px] font-sans mb-2.5">Sort by</h2>
            <CategorySidebar list={sidebarList} />
          </div>
        </SidebarLayout>
        <ContentLayout>
          <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[30px] py-[60px] pl-[15px] md:pl-[40px]">
            {articleList.map((article) => (
              <div
                className="basis-full sm:basis-2/4 xl:basis-1/3"
                key={`${article.title}`}
              >
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  buttonText="Learn More"
                  url={"/"}
                  image={article.image}
                />
              </div>
            ))}
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default Articles;

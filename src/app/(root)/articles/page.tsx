import { Button } from "@/components/ui/button";
import BannerHeader from "@/modules/bannerHeader";
import { ContainerLayout, SidebarLayout, ContentLayout } from "@/modules/containerLayout";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import ArticleCard from "@/modules/articleCard";
import CategorySidebar from "@/modules/categorySidebar";
import FilterTag from "@/modules/filterTag";

import { getArticleData } from "@/fetch/recipe/articlelist";
import { getSidebarData } from "@/fetch/recipe/sidebar";

const Article = async () => {
  const articleList = await getArticleData();
  const sidebarData = await getSidebarData();

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
            <CategorySidebar list={sidebarData} />
          </div>
        </SidebarLayout>
        <ContentLayout>
          <div className="py-[60px]  md:pl-[40px]">
            <div className="flex gap-1 pb-[25px] items-start">
              <span className="font-sans font-bold text-2xl mr-[15px] flex-shrink-0">
                Active Filter:
              </span>
              <FilterTag
                title="Articles"
              />
            </div>
            <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
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
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default Article;
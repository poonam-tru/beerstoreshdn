import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import RecipeCard from "@/modules/recipeCard";
import BannerHeader from "@/modules/bannerHeader";
import { ContainerLayout, SidebarLayout, ContentLayout } from "@/modules/containerLayout";
import { Search } from "lucide-react";
import CategorySidebar from "@/modules/categorySidebar";

import { getRecipeData } from "@/fetch/recipe/recipelist";
import { getSidebarData } from "@/fetch/recipe/sidebar";

const Recipe = async() => {
  const recipeData = await getRecipeData();
  const sidebarData = await getSidebarData();
  
  return (
    <>
      <BannerHeader
        title="Recipes"
        backgroundImage="https://tbsecomd.wpengine.com/wp-content/uploads/2020/10/image_recipe-optimized.jpg"
      >
        <div className="relative max-w-4xl w-full mt-[20px] sm:mt-[48px]">
          <Search className="absolute top-[50%] translate-y-[-50%] left-3 text-[#4A4F55]" />
          <Input
            type="text"
            placeholder="Search recipes..."
            className="border-none basis-3/4 font-sans pl-[50px] py-[10px] h-[45px] md:h-[55px] pr-4 bg-white rounded-[100px] placeholder:text-[#4A4F55] "
          />
          <Button className="px-3 py-2 font-sans uppercase text-[14px] h-[45px]  sm:text-[18px] absolute right-0 top-0 md:h-[55px] rounded-r-[100px] w-[100px] sm:w-[170px]">
            Search
          </Button>
        </div>
      </BannerHeader>

      <ContainerLayout>
        <SidebarLayout bordered={false}>
          <div className="flex flex-col py-[60px] pr-[15px]">
            <h2 className="text-[24px] font-sans mb-2.5 font-bold">Sort by</h2>
            <CategorySidebar list={sidebarData} />
          </div>
        </SidebarLayout>

        <ContentLayout>
          <div className="py-[60px] md:pl-[40px]">
            <div className="flex gap-1 pb-[25px] items-start">
              <span className="font-sans font-bold text-2xl mr-[15px] flex-shrink-0">Active Filter:</span>
              <div className="flex flex-wrap gap-[5px]">
                <div className="flex px-2.5 py-[5px] flex-row items-center gap-[5px] border border-solid border-[#d6d6d6] bg-[#f4f4f4] rounded-[5px]">
                  <span className="text-[14px] text-black font-sans">Articles</span>
                  <div>
                    <Image
                      src="https://tbsecoms.wpengine.com/wp-content/uploads/2019/10/close.svg"
                      alt="remove"
                      width="15"
                      height="15"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {recipeData.map((recipe:any) => (
                <div
                  className="basis-full sm:basis-2/4 xl:basis-1/3"
                  key={`${recipe.title}`}
                >
                  <RecipeCard
                    title={recipe.title}
                    image={recipe.image}
                    cookTime={recipe.cookTime}
                    serves={recipe.serves}
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

export default Recipe;

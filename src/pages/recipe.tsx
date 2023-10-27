import { Button } from "@/components/ui/button";
import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/modules/recipeCard";
import CategorySidebar from "@/modules/categorySidebar";
import Image from "next/image";

const sidebarList = [
  {
    title: "By Category",

    list: [
      "Beertails",
      "Cozy Recipes",
      "Plant-Forward Recipes",
      "Summer Weekend Recipes",
      "Winter Warm-up Recipes",
    ],
  },
  {
    title: "By Season",
    list: ["Fall", "Spring", "Summer", "Winter"],
  },
  {
    title: "By Occasions",
    list: [" Holiday Baking", "Thanksgiving"],
  },
];
const recipesList = [
  {
    title: "Pumpkin Spice Amber Ale Latte",
    cookTime: "7min",
    serves: "1 latte (with enough leftover syrup for 7 more)",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/09/Pumpkin_Spice_Amber_Ale_Latte-archive.jpg",
  },
  {
    title: "Beer Fudge Bars",
    cookTime: "7min",
    serves: "Makes 10 frozen fudge bars (about a heaping ¼ cup each)",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/07/Beer_Fudge_Bars-featured-mobile-1.png",
  },
  {
    title: "Tart Cherry Beer Slushie",
    cookTime: "7min",
    serves: "Serves 2, or 1 generously",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/06/Tart_Cherry_Beer_Slushie-archive.jpg",
  },
  {
    title: "Hard Seltzer & Peach Sorbet",
    cookTime: "None",
    serves: "6",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/05/hard-seltzer-and-peach-sorbet-archive-3.jpg",
  },
  {
    title: "Pilsner Spritz",
    cookTime: "None",
    serves: "1, easily multiplied",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2023/05/Pilsner-Spritz-archive.jpg",
  },
  {
    title: "Pilsner Chimichurri Burgers",
    cookTime: "25min",
    serves: "4",
    image:
      "https://tbsecomd.wpengine.com/wp-content/uploads/2022/02/ChimichurriBurgers_ArchivePhoto.jpg",
  },
];

const Recipe = () => {
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
            <CategorySidebar list={sidebarList} />
          </div>
        </SidebarLayout>
        <ContentLayout>
          <div className="py-[60px]  md:pl-[40px]">
            <div className="flex gap-1 pb-[25px] items-start">
              <span className="font-sans font-bold text-2xl mr-[15px] flex-shrink-0">
                Active Filter:
              </span>
              <div className="flex flex-wrap gap-[5px]">
                <div className="flex px-2.5 py-[5px] flex-row items-center gap-[5px] border border-solid border-[#d6d6d6] bg-[#f4f4f4] rounded-[5px]">
                  <span className="text-[14px] text-black font-sans">
                    Articles
                  </span>
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
              {recipesList.map((recipe) => (
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

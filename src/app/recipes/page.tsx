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
import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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
const Recipes = () => {
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
            {sidebarList.map((item) => (
              <div className="flex flex-col" key={`${item.title}`}>
                <h3 className="text-[16px] pt-[25px]   font-sans  font-bold">
                  {item.title}
                </h3>
                <ul className="mt-[10px]">
                  {item?.list.map((item, idx) => (
                    <li
                      key={`${idx}`}
                      className="cursor-pointer  font-sans  font-normal py-[15px] text-[#4A4F55] text-[14px] border-b border-solid border-[#d6d6d6] hover:text-[#B95804]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SidebarLayout>
        <ContentLayout>
          <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-[30px] py-[60px]  md:pl-[40px]">
            {recipesList.map((recipe) => (
              <div
                className="basis-full sm:basis-2/4 xl:basis-1/3"
                key={`${recipe.title}`}
              >
                <Card
                  className={
                    " flex h-full flex-col border border-solid rounded-[10px] relative overflow-hidden"
                  }
                >
                  <Link href={"/"} className="">
                    <CardHeader>
                      {recipe?.image && (
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          width={370}
                          height={256}
                          className="w-full h-auto md:h-[258px] md:object-cover md:object-center "
                        />
                      )}
                    </CardHeader>

                    <CardContent className="flex flex-col p-[20px]">
                      {recipe.title && (
                        <CardTitle className="mb-4 text-[15px]  font-sans  font-bold md:text-[18px]">
                          {recipe.title}
                        </CardTitle>
                      )}
                    </CardContent>
                  </Link>
                  <CardFooter className="flex  mt-auto border-t border-solid border-[#d6d6d6]">
                    <div className="basis-1/2 flex flex-row  p-2.5 items-start border-r border-solid border-[#d6d6d6]">
                      <Image
                        src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/11/time.svg"
                        alt="time"
                        width={18}
                        height={18}
                        className={"mr-2.5"}
                      />
                      <div className="flex flex-col ">
                        <h4 className="font-sans text-sm font-bold">
                          Cook-Time
                        </h4>
                        <p className="font-sans text-[12px] font-normal">
                          {recipe.cookTime}
                        </p>
                      </div>
                    </div>
                    <div className="basis-1/2 flex flex-row p-2.5 items-start">
                      <Image
                        src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/11/serves.svg"
                        alt="time"
                        width={27}
                        height={18}
                        className={"mr-2.5"}
                      />
                      <div className="flex flex-col ">
                        <h4 className="font-sans text-sm font-bold">Serves</h4>
                        <p className="font-sans text-[12px] font-normal">
                          {recipe.serves}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default Recipes;

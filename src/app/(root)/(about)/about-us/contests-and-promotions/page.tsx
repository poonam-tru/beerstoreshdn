import { contestsPromotionsData } from "@/fetch/aboutus/contests-and-promotions";
import { ContestAndPromotionsContainer } from "@/pages/contestAndPromotions/contestAndPromotions";
import { MainTemplate } from "@/template";

const ContestsPromotions = async (value: number) => {
  const data = await contestsPromotionsData();
  const breadcrumb = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Contests & Promotions', url: '#' }
  ];

  return (
    <>
    <MainTemplate
      bannerTitle={`Contest Winners`}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
          <div className="flex flex-col py-[30px] md:py-[60px] px-[10px] md-[15px] md:pr-0 md:pl-[40px] lg:pl-[60px] 2xl:pl-[100px]">
            <div>
              <h2 className="max-[320px]:text-[18px] text-[20px] sm:text-[24px] lg:text-[25px] xl:text-[28px]">Contests & Promotions</h2>
              <p className="text-[#4A4F55] mb-[25px]">
              We’ve brewed up some exciting contests and we’re saying cheers to you, lucky winners! To learn more about our past contest winners, prizes and rules and regulations, click on the year you’d like to view and the contest you’re interested in. Don’t forget to follow us @TheBeerStoreON for upcoming contests and giveaways. The next lucky winner could be you!
              </p>
              <p className="text-[#4A4F55] mb-[25px]">Click the drop down below to view all past winners:</p>
              <ContestAndPromotionsContainer accordiandata={data}/>
            </div>
          </div>
        </MainTemplate>
    </>
  );
};

export default ContestsPromotions;

import { contestsPromotionsData } from "@/fetch/aboutus/contests-and-promotions";
import BannerHeader from "@/modules/bannerHeader";
import { ContainerLayout, ContentLayout, SidebarLayout } from "@/modules/containerLayout";
import { ContestAndPromotionsContainer } from "@/pages/contestAndPromotions/contestAndPromotions";
import SidebarList from "@/modules/sidebarList";

const ContestsPromotions = async (value: number) => {
  const data = await contestsPromotionsData();

  return (
    <>
      <BannerHeader
        title="Accessibility"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout>
        <SidebarLayout>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          <div className="py-[70px]">
            <div>
              <h2>Contests & Promotions</h2>
              <p className="text-[#4A4F55] mb-[25px]">
              We’ve brewed up some exciting contests and we’re saying cheers to you, lucky winners! To learn more about our past contest winners, prizes and rules and regulations, click on the year you’d like to view and the contest you’re interested in. Don’t forget to follow us @TheBeerStoreON for upcoming contests and giveaways. The next lucky winner could be you!
              </p>
              <p className="text-[#4A4F55] mb-[25px]">Click the drop down below to view all past winners:</p>
              <ContestAndPromotionsContainer accordiandata={data}/>
            </div>
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default ContestsPromotions;

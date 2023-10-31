import Image from "next/image";
import { MainTemplate } from "@/template";
import { careerData } from "@/fetch/aboutus/careers";
import InterestCard from "@/modules/career/interestcard";
import ContentList from "@/modules/career/contentlist";

const Career = async () => {
  const data = await careerData();
  const breadcrumb = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "careers", url: "/careers" },
  ];

  const { careersCards, backgroudImage, teamTitle, detail} = data;
  return (
    <MainTemplate
      bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
      <div className="flex flex-col py-[60px] px-[15px] lg:pl-[100px]">
        <InterestCard contentDetail={careersCards} />
        <div className="flex py-[60px]">
          <div className="basis-full relative">
            <Image
              src={backgroudImage}
              alt="team"
              width={500}
              height={300}
              className={"w-full"}
            />
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
              <h2 className="text-white text-[36px] leading-[1.1]">
                {teamTitle}
              </h2>
            </div>
          </div>
        </div>
        <ContentList contentDetail={detail}/>
      </div>
    </MainTemplate>
  );
};

export default Career;

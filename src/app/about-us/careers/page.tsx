import Image from "next/image";
import { MainTemplate } from "@/template";
import { careerData } from "@/fetch/aboutus/careers";
import InfoCard from "@/modules/infoCard";
import chevronRight from "../../../../public/images/arrow-right.svg";

const Career = async () => {
  const data = await careerData();
  const breadcrumb = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "careers", url: "/careers" },
  ];

  const { careersCards, backgroudImage, teamTitle } = data;
  return (
    <MainTemplate
      bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
      <div className="flex flex-col py-[60px] px-[15px] lg:pl-[100px]">
        <div className="flex gap-[30px] flex-row">
          {careersCards.length > 0 &&
            careersCards.map((item: any, _idx: any) => (
              <div
                className="basis-full md:basis-1/2"
                key={`career_card${_idx}`}
              >
                <InfoCard
                  className="[&_.info-content]:px-[30px] [&_.info-content]:py-[25px] [&_.info-footer>button]:rounded-[3px] [&_.info-footer>button]:w-auto  [&_.info-footer]:justify-end [&_.info-footer>button]:text-[11px] [&_.info-footer>button]:p-[7px] [&_.info-footer>button]:h-[30px] [&_.info-footer>button]:mt-[15px] [&_.info-footer>button]:uppercase"
                  title={item.cardTitle}
                  buttonText="I'm Interested"
                  buttonLink="/"
                  buttonIcon={
                    <Image
                      src={chevronRight}
                      alt="arrow"
                      width={6}
                      height={12}
                      style={{ width: 6, height: 12, marginLeft: 10 }}
                    />
                  }
                  image={{
                    url: item.cardImage,
                    alt: item.cardTitle,
                    width: "600",
                    height: "400",
                  }}
                />
              </div>
            ))}
        </div>
        <div className="flex py-[60px]">
          <div className="basis-full relative">
            <Image src={backgroudImage} alt="team" width={500} height={300} className={"w-full"} />
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
              <h2 className="text-white text-[36px] leading-[1.1]">{teamTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Career;

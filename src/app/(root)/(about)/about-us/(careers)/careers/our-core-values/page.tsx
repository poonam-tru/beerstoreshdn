import { MainTemplate } from "@/template";
import { coreValuesData } from "@/fetch/aboutus/corevalues";
import Image from "next/image";
import parse from "html-react-parser";
import CardWithIcon from "@/modules/career/cardWithIcon";

const CoreValues = async () => {
  const data = await coreValuesData();
  const breadcrumb = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Careers", url: "/careers" },
    { title: "Our Core Values", url: "/our-core-values" },
  ];

  const { content, mainTitle, detail } = data;
  return (
    <MainTemplate
      // bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      // bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
      <div className="flex flex-col py-[60px] px-[15px] lg:pr-0 lg:pl-[100px]">
        <div className="flex flex-col">
          <h2>{mainTitle}</h2>
          <p className="mb-[25px]">{content}</p>
          
          <CardWithIcon cardDetail={detail}/>
        </div>
      </div>
    </MainTemplate>
  );
};

export default CoreValues;

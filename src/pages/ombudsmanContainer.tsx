import Image from "next/image";
import Link from "next/link";
import BannerHeader from "@/modules/bannerHeader";
import parse from 'html-react-parser';

import {
  ContainerLayout,
  SidebarLayout,
  ContentLayout,
} from "@/modules/containerLayout";
import SidebarList from "@/modules/sidebarList";

import { ombudsmanData } from "@/fetch/aboutus/ombudsman" 




const OmbudsmanConatiner = async () => {

  const data = await ombudsmanData();

  return (
    <>
      <BannerHeader
        title="Ombudsman"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout>
        <SidebarLayout bordered>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          <div className="flex flex-col py-[60px] px-[15px] md:pr-0 md:pl-[60px] lg:pl-[80px]">
            <div className="flex flex-col-reverse md:flex-row gap-[30px]">
              <div className="basis-4/6 px-[15px]">
                <h2>{data?.mainTitle}</h2>
                <div className="[&>p]:mb-[25px] [&>h3]:mb-[25px] [&>h3]:text-[24px] [&>h3]:font-bold [&>p]:text-[#000] [&>a]:text-[#B95804] [&>p>a]:text-[#B95804]">
                  {parse(data?.description)}
                </div>
              </div>
              <div className="basis-2/6 min-h-0 min-w-0">
                <div className="flex justify-center align-items-center rounded-[5px]">
                  <Image
                    alt={""}
                    src="https://tbsecoms.wpengine.com/wp-content/uploads/2019/05/Govern.jpg"
                    width={381}
                    height={437}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default OmbudsmanConatiner;

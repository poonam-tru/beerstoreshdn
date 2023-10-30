import Link from "next/link";
import Image from "next/image";
import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  ContentLayout,
  SidebarLayout,
} from "@/modules/containerLayout";
import { Button } from "@/components/ui/button";
import SidebarList from "@/modules/sidebarList";

import { accessbilityData } from "@/fetch/aboutus/accessbility";

import parse from "html-react-parser";

const Accessibility = async () => {
  const data = await accessbilityData();
  console.info(data, "data");
  return (
    <>
      <BannerHeader
        title={data?.mainTitle}
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout>
        <SidebarLayout bordered>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          <div className="flex flex-col py-[60px] px-[15px]  md:pl-[60px] lg:pl-[80px]">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="basis-4/6">
                <h2>{data?.mainTitle}</h2>
                {parse(data?.description)}

                <ul className="dot-list">
                  {data?.linkList.map((item: any) => (
                    <li key={item?.linkTitle}>
                      <Link href={item?.linkUrl}>{item?.linkTitle}</Link>
                      {item?.description}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-[15px] h-auto leading-normal text-[14px] font-sans font-bold pt-[7px] pb-[4px] px-[8px] rounded-[5px] uppercase"
                >
                  <Link href={data?.contactUrl}>{data?.contactBtn}</Link>
                </Button>
              </div>
              <div className="basis-2/6 min-h-0 min-w-0">
                <div className="flex justify-center align-items-center">
                  <Image
                    alt={""}
                    src={data?.accessbilityImage}
                    width={254}
                    height={254}
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

export default Accessibility;

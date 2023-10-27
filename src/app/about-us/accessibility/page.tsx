import Link from "next/link"
import Image from "next/image"
import parse from 'html-react-parser';

import { Button } from "@/components/ui/button"
import { accessbilityData } from "@/fetch/aboutus/accessbility" 
import { MainTemplate } from "@/template";

const Accessibility = async () => {
  const data = await accessbilityData();
  const breadcrumb = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Accessibility', url: '#' }
  ];

  return (
    <MainTemplate
      bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
        <div className="flex flex-col py-[60px] px-[15px] lg:pl-[100px]">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="basis-4/6">
              <h2>{data?.mainTitle}</h2>
              <div className="[&>p]:mb-[25px]">
                {parse(data?.description)}
              </div>

              <ul className="dot-list">
                {data?.linkList.map((item:any) =>(
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
    </MainTemplate>
  );
};

export default Accessibility;

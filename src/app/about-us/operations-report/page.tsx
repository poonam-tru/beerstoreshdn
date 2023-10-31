import Image from 'next/image' 
import parse from 'html-react-parser';

import { MainTemplate } from '@/template';
import { getOperationReportData } from "@/fetch/aboutus/operationReport";

const OperationsReport = async () => {
  const data = await getOperationReportData();
  const breadcrumb = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Operations Report', url: '#' }
  ];
  return (
    <>
    <MainTemplate
      bannerTitle={data?.mainTitle}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
      <div className="flex flex-col py-[60px] px-[15px] pl-[100px]">
          <div className="flex flex-col-reverse md:flex-row gap-[30px] -mx-[15px]">
              <div className="basis-4/6 px-[15px]">
              <h2>{data?.mainTitle}</h2>
                <div className="[&>p]:text-[#4A4F55] [&>p]:mb-[25px] [&>h3]:text-[24px] [&>h3]:font-bold [&>h3]:font-sans [&>h3]:mb-[25px] [&>h3]:leading-[1.1] [&>h3]:tracking-[0.16px]">
                  {parse(data?.description)}
                    <ul className="dot-list">
                      {
                        data?.lists?.map((item:any) => (
                          <li key={item?.text}>{item?.text}</li>
                        ))
                      }
                    </ul>
                </div>
              </div>
              <div className="basis-2/6 min-h-0 min-w-0">
                  <div className="flex justify-center align-items-center rounded-[5px]">
                      <Image
                          alt={''}
                          src={data?.image}
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
    </MainTemplate>
    </>
  )
}
export default OperationsReport
import Image from 'next/image' 
import Link from 'next/link'
import BannerHeader from "@/modules/bannerHeader"
import { ContainerLayout, SidebarLayout, ContentLayout } from "@/modules/containerLayout";
import SidebarList from '@/modules/sidebarList';

const OperationsReport = () => {
  return (
    <>
      <BannerHeader
        title="Accessibility"
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
                    <h2>Operations Report</h2>
                    <p className="text-[#4A4F55] mb-[25px]">Want to know what kind of year we had at The Beer Store? You can learn all about it here in our annual Operational Report.</p>

                    <h3 className="text-[24px] font-bold font-sans mb-[25px] leading-[1.1] tracking-[0.16px]">You’ll find:</h3>
                    <ul className="dot-list">
                        <li>The year in beer sales</li>
                        <li>Our continued commitment to Environmental Leadership</li>
                        <li>Our ongoing monitoring of responsible sales and service</li>
                        <li>Marketing & Digital Strategy update</li>
                        <li>Health & Safety update</li>
                        <li>Beer tax contributions</li>
                        <li>Financial statements</li>
                        <li><Link href="#">Download the full report (PDF)</Link></li>
                    </ul>

                    </div>
                    <div className="basis-2/6 min-h-0 min-w-0">
                        <div className="flex justify-center align-items-center rounded-[5px]">
                            <Image
                                alt={''}
                                src="https://tbsecoms.wpengine.com/wp-content/uploads/2023/06/OpsReport2022_FINAL-1-scaled.jpg"
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
  )
}


export default OperationsReport
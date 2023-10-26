import Link from 'next/link'
import BannerHeader from "@/modules/bannerHeader"
import { ContainerLayout, SidebarLayout, ContentLayout } from "@/modules/containerLayout"
import SidebarList from '@/modules/sidebarList'

import { getFormerEmployeesData } from '@/fetch/aboutus/formeremployees'

import parse from 'html-react-parser';

const FormerEmployees = async() => {
  const data = await getFormerEmployeesData();
  return (
    <>
      <BannerHeader
        title={data?.mainTitle}
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />
      <ContainerLayout>
        <SidebarLayout><SidebarList /></SidebarLayout>
        <ContainerLayout>
            <div className="py-[70px]">
                <h2>{data?.mainTitle}</h2>
                <div className="[&>p]:mb-[25px] [&>p>strong]:font-medium [&>p>strong]:block [&>p>a]:text-[#B95804] [&>p>a]:block" >
                  {parse(data?.description)}
                </div>
            </div>
        </ContainerLayout>
      </ContainerLayout>
    </>
  )
}

export default FormerEmployees
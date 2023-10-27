import React from 'react'
import { ContainerLayout, ContentLayout, SidebarLayout } from "@/modules/containerLayout"

import BannerHeader from "@/modules/bannerHeader"
import SidebarList from "@/modules/sidebarList"

import Breadcrumb from "@/modules/breadcrumb";

interface SiderbarTemplateProps{
    bannerTitle?: string | any,
    bannerBg?: string | any,
    breadcrumbList?: [] | any,
    children?: React.ReactNode
}

export const SidebarTemplate: React.FC<SiderbarTemplateProps> = async ({ bannerTitle, bannerBg, breadcrumbList, children }) => {
  return (
    <>
      <BannerHeader
        title={bannerTitle}
        backgroundImage={bannerBg}
      />
      <div className="container px-[15px] lg:px-[45px]">
          <div className="border-solid border-b-[1px] border-b-[#d6d6d6]">
            <Breadcrumb list={breadcrumbList} />
          </div>
      </div>
      <ContainerLayout>
        <SidebarLayout bordered>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          {children}
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

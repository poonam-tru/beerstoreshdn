"use client";
import Image from "next/image";
import Link from "next/link";
import BannerHeader from "@/modules/bannerHeader";
import { ContainerLayout, ContentLayout, SidebarLayout } from "@/modules/containerLayout";
import SidebarList from "@/modules/sidebarList";
const mediaCentreList = [
  {
    title: "2022 Stewardship Report, Circularity in Action for 95 Years",
    publishedOn: "31-Mar-2023",
    description:
      "At The Beer Store, we are serious about our commitment to the environment. We work hard every day to protect the environment...",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2021/04/StewardshipReport2020_Web-2.jpeg",
    url: "/",
  },
  {
    title: "The Beer Store Announces Hiring of New President – Roy Benin ",
    publishedOn: "02-Mar-2023",
    description:
      "Following a 7-month search, The Beer Store's Board of Directors is pleased to announce Roy Benin as the new CEO/President. Ted Moroz, a 40-year TBS employee and CEO/President since 2009 will retire on April 28, 2023.",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2020/11/Covidposting_ArticleArchive.jpg",
    url: "/",
  },
  {
    title: "Five billion ODRP beverage containers recycled",
    publishedOn: "21-Mar-2022",
    description:
      "Today, The Beer Store in partnership with the LCBO is proud to announce the return of the five billionth container under the Deposit Return Program for wine, spirit, and beer containers sold in the province of Ontario. ",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2020/11/Covidposting_ArticleArchive.jpg",
    url: "/",
  },
  {
    title:
      "The Beer Store and Goodwill Industries announces partnership to recycle used uniforms",
    publishedOn: "19-Oct-2021",
    description:
      "The Beer Store and Goodwill Industries are pleased to announce their partnership during Waste Reduction Week",
    image:
      "https://tbsecoms.wpengine.com/wp-content/uploads/2020/11/Covidposting_ArticleArchive.jpg",
    url: "/",
  },
];

const MediaCentreContainer = () => {
  return (
    <>
      <BannerHeader
        title="Media Center"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout>
        <SidebarLayout bordered>
          <SidebarList />
        </SidebarLayout>
        <ContentLayout>
          <div className="flex flex-col py-[60px] px-[15px]  md:pl-[60px] lg:pl-[80px]">
            <h2>Media Centre</h2>
            {mediaCentreList.map((item) => (
              <div
                className="flex flex-col md:flex-row  gap-[15px] md:gap-[30px] pb-[30px] mb-[30px] border-b border-solid border-[#d6d6d6] last-of-type:border-0"
                key={`media_centre${item.title}`}
              >
                {item.image && (
                  <div className="basis-1/4">
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={381}
                      height={437}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                )}
                <div className="basis-3/4">
                  {item.title && (
                    <h2 className="font-sans font-bold text-[18px] md:text-[20px] leading-[1.1] mb-[20px] tracking-[0.2px]">
                      {item.title}
                    </h2>
                  )}
                  {item.publishedOn && (
                    <p className="mb-[10px]">
                      <strong className="font-medium">Published On:</strong>{" "}
                      <span>{item.publishedOn}</span>
                    </p>
                  )}
                  {item.description && (
                    <p className="mb-[10px]">{item.description}</p>
                  )}
                  {item.url && (
                    <Link className="tbs-link-text font-[14px]" href={item.url}>
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default MediaCentreContainer;

import Image from "next/image"
import Link from "next/link"
import { MainTemplate } from "@/template";
import { getMediaCentreData } from '@/fetch/aboutus/mediaCentre';

const MediaCentre = async() => {
  const data = await getMediaCentreData();
  const breadcrumb = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Media Centre', url: '#' }
  ];
  return (
    <>
    <MainTemplate
      bannerTitle={`Media Centre`}
      breadcrumbList={breadcrumb}
      bannerBg={`https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg`}
    >
      <div className="flex flex-col py-[60px] px-[15px]  md:pl-[60px] lg:pl-[80px]">
              <h2>Media Centre</h2>
              {data?.map((item:any) => (
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
    </MainTemplate>
    </>  
  )
};

export default MediaCentre;
